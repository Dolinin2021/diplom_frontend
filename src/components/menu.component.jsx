import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../services/auth.service';

// Навигационное меню

export default function Menu() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  function logout(event) {
    const navItemLogin = document.createElement('li');  
    navItemLogin.className = 'nav-item-login';

    const a = document.createElement('a'); 
    a.className = 'nav-link';
    a.textContent = 'Вход';

    navItemLogin.appendChild(a);
    let el = event.target;
    el.parentNode.replaceChild(navItemLogin, el);

    navigate('/login');

    AuthService.logout();
  }

  function login(event) {
    const navItemLogout = document.createElement('li');  
    navItemLogout.className = 'nav-item-home';

    const a = document.createElement('a'); 
    a.className = 'nav-link';
    a.textContent = 'Выход';

    navItemLogout.appendChild(a);
    let el = event.target;
    el.parentNode.replaceChild(navItemLogout, el);

    navigate('/home');
  }

  return (
    <nav className='navbar navbar-expand navbar-dark bg-dark'>
      <Link className='navbar-brand'>
        My Cloud
      </Link>
      <div className='navbar-nav ml-auto'>
        {(token) 
        ?
        <li className='nav-item'>
          <Link to={'/home'} className='nav-link' onClick={logout}>
            Выход
          </Link>
        </li>
        :
        <div className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <Link to={'/register'} className='nav-link'>
              Регистрация
            </Link>
          </li>
          <li className='nav-item'>
            <Link to={'/login'} className='nav-link' onClick={login}>
              Вход
            </Link>
          </li> 
        </div>}
      </div>
    </nav>
  )
}
