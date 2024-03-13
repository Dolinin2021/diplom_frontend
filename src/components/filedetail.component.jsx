import { useEffect, useState } from "react";
import UserService from './../services/user.service'
import { useParams } from 'react-router-dom';
import buttonClick from "../functions/buttonClick";
import vfilename from "../validation/vfilename";

// Страница "Редактирование файла"

export default function FileDetail () {
  const [info, setInfo] = useState([]);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [url, setURL] = useState('');
  
  const params = useParams();
  const fileId = params.id;
  let counter = 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (vfilename(title)) {
      UserService.updateCurrentFile(fileId, title, comment).then((data) => {
        console.log(data);
        history.back();
      }).catch((error) => {
        console.log(error);
        if (error.message === 'Request failed with status code 400') {
          alert('Необходимо заполнить обязательные поля: имя файла и комментарий.');
        } else if (error.message === 'Request failed with status code 500') {
          alert('Повторяющееся имя файла. Имя файла будет изменено, но общая ссылка останется прежней.');
          history.back();
        }
      }); 
    } else {
      return;
    }
  };

  const handleGenerateURL = (e) => {
    e.preventDefault();
    UserService.generateURL(fileId).then((data) => {
      setURL(data);
    }).catch((error) => {
      console.log(error.message);
    }); 
  }

  useEffect(() => {
    UserService.getCurrentFile(fileId).then((data) => {
      setInfo(data);
      setTitle(data.title);
      setComment(data.comment);
    }).catch((error) => {
      console.log(error.message);
    })
  }, []);

  return (
    <div className="container">
      <h3>
        <strong>Редактирование файла</strong>
      </h3>
      <form>
        <div key={info.id} className="content">
          <strong key={counter}>
            <label htmlFor='name'>Имя файла:</label>
            <input 
              type='text' 
              defaultValue={info.title} 
              id='name'
              onChange={(e) => setTitle(e.target.value)}
            />
          </strong>
          <p key={counter + 1}>
            <strong key={counter + 1}>
              <label htmlFor='comment'>Комментарий:</label>
              <textarea 
                defaultValue={info.comment} 
                id='comment' 
                onChange={(e) => setComment(e.target.value)} 
              />
            </strong>
          </p>
          <p key={counter + 2}>
            <strong key={counter + 2}>
              <label htmlFor='url'>Ссылка для скачивания:</label>
              <textarea 
                type='text' 
                disabled 
                id='url' 
                value={url}  
                style={{width: '30%'}} 
              />
            </strong>
          </p>
        </div>
      </form>
      <button type='button' onClick={handleSubmit}>Сохранить</button>
      <button type='button' onClick={handleGenerateURL} style={{marginLeft: '40px'}}>Сгенерировать URL</button> 
      <div>
        <button type="button" onClick={buttonClick} style={{marginTop: '20px'}}>Назад</button>
      </div>
    </div>
  );
}
