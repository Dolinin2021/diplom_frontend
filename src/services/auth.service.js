import axios from 'axios';
import { API_URL } from '../common/system-var';

// Служба аутентификации пользователя

class AuthService {
  async register(username, email, password) {
    const response = await axios
      .post(API_URL + 'useradd/', {
        username,
        email,
        password
      });
    return response;
  }

  async login(username, password) {
    const response = await axios
      .post(API_URL + 'api/v1/token/', {
        username,
        password
      });
    if (response.data.access) {
      localStorage.setItem('refresh_token', JSON.stringify(response.data.refresh));
      localStorage.setItem('token', JSON.stringify(response.data));
    }
    return response.data;
  }

  async updateAccessToken(refresh) {
    const response = await axios
      .post(API_URL + 'api/v1/token/refresh/', {
        refresh
      });
    if (response.data) {
      localStorage.setItem('token', JSON.stringify(response.data));
    }
    return response.data;
  }

  logout() {
    localStorage.clear();
  }
}

export default new AuthService();
