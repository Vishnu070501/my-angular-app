import axios from 'axios';
import { environment } from '../../environments/environment';

export class AxiosConfig {
  static readonly instance = axios.create({
    baseURL: environment.BASE_URL,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  static initialize() {
    this.instance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
}
