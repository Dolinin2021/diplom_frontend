import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import UserService from '../services/user.service';
import buttonClick from '../functions/buttonClick';

// Страница "Административный интерфейс системы"

export default function UserList() {
  const [info, setInfo] = useState([]);

  function changeUserRoleClick(user_id, user_role) {
    UserService.changeUserRole(user_id, user_role).then((data) => {
      const newInfo = info.map(user => {
        if (user.id === user_id) {
          return { ...user, is_superuser: data.data.is_superuser }
        } else {
          return user;
        }
      })
      setInfo(newInfo);
    }).catch((error) => {
      console.log(error.message);
    });
  }

  function handleDeleteClick(evt, adminUserId){
    UserService.delCurrentUser(adminUserId).then((data) => {
      console.log(data);
    }).catch((error) => {
      console.log(error.message);
    });
    evt.target.closest('tr').remove();
  }

  useEffect(() => {
    UserService.getUserList().then((data) => {
      setInfo(data);
    }).catch((error) => {
      console.log(error.message);
    })
  }, []);

  return (
    <div className='container'>
      <div>
        <h3>
          <strong>Административный интерфейс системы</strong>
        </h3>
        <table>
          <thead className='jumbotron'>
            <tr>
              <th>Имя пользователя</th>
              <th>Электронная почта</th>
              <th>Роль</th>
              <th>Файловое хранилище</th>
              <th>Удалить</th>
            </tr>
          </thead>
          <tbody>
            {info.map((item) => 
              <tr key={item.id}>
                <td><span className="list-group-item" >{<NavLink to={'/userlist/detail' + `/${item.id}`}>{item.username}</NavLink>}</span></td>
                <td><span className="list-group-item">{item.email}</span></td>
                <td>
                  <span className="list-group-item" >
                    <button type="button" 
                      style={{cursor: "pointer"}} 
                      onClick={() => { changeUserRoleClick(item.id, item.is_superuser) }}>
                        {item.is_superuser ? "Администратор" : "Пользователь"}
                    </button>
                  </span>
                </td>
                <td><span className="list-group-item" >{<NavLink to={'/filelist/detail' + `/${item.id}`}>Перейти</NavLink>}</span></td>
                <td><span className="list-group-item" >{<button type="button" onClick={(event) => {handleDeleteClick(event, item.id)}}>Удалить</button>}</span></td>
              </tr>)}
          </tbody>
        </table>
      </div>
      <div>
        <button type="button" onClick={buttonClick} style={{marginTop: '20px'}}>Назад</button>
      </div>
    </div>
  )
}
