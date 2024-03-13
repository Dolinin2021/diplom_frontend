import axios from 'axios';
import authHeader from './auth-header';
import AuthService from './auth.service';
import { API_URL } from '../common/system-var';


// перехватчик запросов
// который к каждому запросу добавляет accessToken из localStorage
export const instance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});



instance.interceptors.request.use(
  (config) => {
    config.headers = authHeader();
    return config
  }
);


// перехватчик ответов
// который в случае невалидного accessToken попытается его обновить
// и переотправить запрос с обновленным accessToken
instance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
   const originalRequest = {...error.config};
   originalRequest._isRetry = true; 
    if (
      error.response.status === 401 && 
      error.config &&
      !error.config._isRetry
    ) {
      try {
        const tokenRefresh = JSON.parse(localStorage.getItem('refresh_token'));
        const newToken = await AuthService.updateAccessToken(tokenRefresh);
        return instance.request(originalRequest);
      } catch (error) {
        console.log("AUTH ERROR")
        window.history.replaceState(
          {},
          '',
          '/login'
        )
        window.location.reload();
      }
    }
    throw error;
  }
);
