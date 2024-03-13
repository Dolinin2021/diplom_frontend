// Функция, которая возвращает заголовок для авторизации пользователя

export default function authHeader() {
  const token = JSON.parse(localStorage.getItem('token'));

  if (token && token.access) {
    return { Authorization: 'Bearer ' + token.access };
  } else {
    return {};
  }
}
