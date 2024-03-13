import parseJwt from "./parseJwt";

// Функция получения id пользователя

export default function userIdentifer(adminUserId = null) {
  let userId = 0;
  if (!adminUserId) {
    const token = JSON.parse(localStorage.getItem('token'));
    if (!token) {
      window.history.replaceState(
        {},
        '',
        '/login'
      )
    }
    const decodedJwt = parseJwt(token.access);
    userId = decodedJwt.user_id;
  } else {
    userId = adminUserId;
  }
  return userId;
}
