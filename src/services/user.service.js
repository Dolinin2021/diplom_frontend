import authHeader from './auth-header';
import { instance } from './api.config';
import { API_URL } from '../common/system-var';

// Служба для работы с API

class UserService {
  async getUserList() {
    const response = await instance
      .get(API_URL + 'backend/userlist/', { 
        headers: authHeader() 
      });
    return response.data.allUsers;
  }

  async getCurrentUser(user_id) {
    const response = await instance
      .get(API_URL + `backend/userlist/${user_id}/`, { 
        headers: authHeader() 
      });
    if (response.status === 401) {
      return response;
    }
    return response.data['userInfo'];
  }

  async delCurrentUser(user_id) {
    const response = await instance
      .delete(API_URL + `backend/user/change/${user_id}/`, { 
        headers: authHeader() 
      });
    return response;
  }

  async changeUserRole(user_id, user_role) {
    const response = await instance
      .put(API_URL + `backend/user/change/${user_id}/`,
      { 
        "is_superuser": !user_role 
      }, 
      { 
        headers: authHeader(),
      });
    return response;
  }

  async getFileList() {
    const response = await instance
      .get(API_URL + 'backend/api/v1/filelist/', { 
        headers: authHeader() 
      });
    return response.data;
  }

  async getFileListCurrentUser(user_id) {
    const response = await instance
      .get(API_URL + `backend/api/v1/filelist/${user_id}/`, { 
        headers: authHeader() 
      });
    return response.data;
  }

  async getCurrentFile(file_id) {
    const response = await instance
      .get(API_URL + `backend/api/v1/filelist/detail/${file_id}/`, { 
        headers: authHeader() 
      });
    return response.data;
  }

  async delCurrentFile(file_id) {
    const response = await instance
      .delete(API_URL + `backend/api/v1/filelist/detail/${file_id}/`, { 
        headers: authHeader() 
      });
    return response;
  }

  async updateCurrentFile(file_id, title, comment) {
    const response = await instance
      .patch(API_URL + `backend/api/v1/filelist/detail/${file_id}/`, 
      {
        title,
        comment
      },
      { 
        headers: authHeader() 
      });
    return response.data;
  }

  async generateURL(file_id) {
    const response = await instance
      .put(API_URL + `backend/api/v1/filelist/detail/${file_id}/`,
      { 
        headers: authHeader() 
      });
    return response.data.url;
  }
}

export default new UserService();
