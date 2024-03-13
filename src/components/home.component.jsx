import { NavLink } from 'react-router-dom';

// Главная страница

export default function Home() {
  return (
    <div className='container'>
      <header className='jumbotron'>
        <h3>
          <strong>Главная страница приложения</strong>
        </h3>
      </header>
      <p>
        <strong>
          <NavLink to='/register'>Регистрация</NavLink>
        </strong>
      </p>
      <p>
        <strong>
          <NavLink to='/login'>Вход</NavLink>
        </strong>
      </p>
    </div>
  )
}
