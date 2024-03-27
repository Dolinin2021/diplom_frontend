import { useState, useRef } from "react";
import buttonClick from "../functions/buttonClick";
import axios from "axios";
import authHeader from "../services/auth-header";
import { useParams } from 'react-router-dom';
import userIdentifer from '../functions/userIdentifer';
import { API_URL } from '../common/system-var';


// Страница "Добавление файла"

export default function CreateFile () {
  const [comment, setComment] = useState('');
  const [file, setFile] = useState('');
  const [progress, setProgess] = useState(0);
  const el = useRef();
  const params = useParams();
  
  const adminUserId = params.id;
  let userId = 0;
  let counter = 0;

  userId = userIdentifer(adminUserId);

  const handleChange = (e) => {
    setProgess(0)
    const file = e.target.files[0];
    setFile(file);
  }

  const uploadFile = () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('user', userId);
    formData.append('comment', comment);
    axios.post(`${API_URL}backend/api/v1/filelist/`, formData, {
      onUploadProgress: (ProgressEvent) => {
        let progress = Math.round(
          ProgressEvent.loaded / ProgressEvent.total * 100
        ) + '%';
        setProgess(progress);
      }, 
      headers: authHeader() 
    }).then(res => {
      console.log(res);
      history.back();
    }).catch((err) => {
      console.log(err)
      setProgess(0);
      if (err.message === 'Request failed with status code 400') {
        alert('Необходимо выбрать файл для загрузки.');
      }
    })
  }

  return (
    <div className="container">
      <h3>
        <strong>Добавление файла</strong>
      </h3>
      <form>
        <div key={counter} className="content">
          <p key={counter}>
            <strong key={counter}>
              <label htmlFor='comment'>Комментарий:</label>
              <textarea 
                id='comment' 
                onChange={(e) => setComment(e.target.value)} 
              />
            </strong>
          </p>
          <p key={counter + 1}>
            <strong key={counter + 1}>
              <label htmlFor='id_user'>id пользователя:</label>
              <input 
                type='text' 
                disabled 
                id='id_user' 
                value={userId}  
              />
            </strong>
          </p>
        </div>
        <div className="file-upload">
          <input type="file" ref={el} onChange={handleChange} />
          <div className="progessBar">
            {progress}
          </div>
        </div>
      </form>
      <button type='button' onClick={uploadFile}>Добавить</button>
      <button type="button" onClick={buttonClick} style={{marginLeft: '20px'}}>Назад</button>
    </div>
  );
}
