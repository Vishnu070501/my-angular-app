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
        const url = config.url || '';
        if (!url.includes('sign-in') && !url.includes('sign-up')) {
          const token = localStorage.getItem('access_token');
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
        }
        
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
}
