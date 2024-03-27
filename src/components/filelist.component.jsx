import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import UserService from '../services/user.service';
import bytesToSize from '../functions/bytesToSize';
import buttonClick from '../functions/buttonClick';
import { useNavigate } from 'react-router-dom';
import parseStr from '../functions/parseStr';

// Страница "Файловое хранилище"

export default function FileList() {
  const [info, setInfo] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const adminUserId = params.id;

  function handleDeleteClick(evt, fileId){
    UserService.delCurrentFile(fileId).then((data) => {
      console.log(data);
    }).catch((error) => {
      console.log(error.message);
    });
    evt.target.closest('tr').remove();
  }

  function onCLick() {
    navigate('/filelist/new');
  }

  function onCLickAdmin() {
    navigate(`/filelist/new/${adminUserId}`);
  }
  
  useEffect(() => {
    if (adminUserId) {
      UserService.getFileListCurrentUser(adminUserId).then((data) => {
        setInfo(data);
      }).catch((error) => {
        console.log(error.message);
      })
    } else {
      UserService.getFileList().then((data) => {
        setInfo(data);
      }).catch((error) => {
        console.log(error.message);
      })
    }
  },[]);

  return (
    <div className='container'>
      <div className="tbl-header">
        <h3>
          <strong>Файловое хранилище</strong>
        </h3>
        <table>
          <thead className='jumbotron'>
            <tr>
              <th>Имя файла</th>
              <th>Размер</th>
              <th>Общая ссылка</th>
              <th>Комментарий</th>
              <th>Дата создания</th>
              <th>Редактировать</th>
              <th>Удалить</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="tbl-content">
        <table>
          <tbody>
          {info.map((item) => 
            <tr key={item.id}>
              <td><span className="list-group-item">{item.title}</span></td>
              <td><span className="list-group-item" >{bytesToSize(item.file_size)}</span></td>
              <td><span className="list-group-item" ><a href={parseStr(item.file)}>{parseStr(item.file)}</a></span></td>
              <td><span className="list-group-item" >{item.comment}</span></td>
              <td><span className="list-group-item" >{item.date}</span></td>
              <td><span className="list-group-item" >{<NavLink to={'/file/detail' + `/${item.id}`}> Перейти</NavLink>}</span></td>
              <td><span className="list-group-item" >{<button type="button" onClick={(event) => {handleDeleteClick(event, item.id)}}>Удалить</button>}</span></td>
            </tr>)}
          </tbody>
        </table>
      </div>
      <div>
        <button type="button" onClick={buttonClick} style={{marginTop: '20px'}}>Назад</button>
        {(adminUserId) ? 
        <button type="button" onClick={onCLickAdmin} style={{marginLeft: '30px'}}>Добавить новый файл</button>
        : <button type="button" onClick={onCLick} style={{marginLeft: '30px'}}>Добавить новый файл</button>}
      </div>
    </div>
  );
}
