import { useEffect, useState } from "react";
import UserService from './../services/user.service'
import { NavLink, useParams } from 'react-router-dom';
import buttonClick from "../functions/buttonClick";
import userIdentifer from "../functions/userIdentifer";

// Страница профиля пользователя

export default function Profile () {
  const [info, setInfo] = useState({});
  const params = useParams();
  const adminUserId = params.id;
  let userId = 0;

  userId = userIdentifer(adminUserId);

  useEffect(() => {
    UserService.getCurrentUser(userId).then((data) => {
      setInfo(data);
    }).catch((error) => {
      console.log(error.message);
    })
  }, [])

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
        {(info.admin) ? 
        <strong>Администратор: {info.name}</strong>
        : <strong>Пользователь: {info.name}</strong>}
        </h3>
      </header>
      <p>
        <strong>Id пользователя:</strong>{" "}
        {info.userId}
      </p>
      <p>
        <strong>Email пользователя:</strong>{" "}
        {info.email}
      </p>
      <p>
        <strong>Количество файлов пользователя:</strong>{" "}
        {info.quantityFiles}
      </p>
      <p>
        {(adminUserId) ? 
        <strong>
          <NavLink to={'/filelist/detail/' + `${adminUserId}`}>Файловое хранилище</NavLink>
        </strong>
        :
        <strong>
          <NavLink to='/filelist'>Файловое хранилище</NavLink>
        </strong>
        }
      </p>
      {(adminUserId) 
      ? null
      : (info.admin) 
      ? <strong><NavLink to='/userlist'>Административный интерфейс системы</NavLink></strong>
      : null}
      <div>
        <button type="button" onClick={buttonClick} style={{marginTop: '20px'}}>Назад</button>
      </div>
    </div>
  );
}
