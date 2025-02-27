import { Injectable } from '@angular/core';
import { AxiosConfig } from '../config/axios-config';
import { AxiosResponse } from 'axios';

interface ApiResponse<T> {
  success: boolean;
  status: number;
  data: T;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  async postData<T>(url: string, data: any): Promise<ApiResponse<T>> {
    const response: AxiosResponse<ApiResponse<T>> = await AxiosConfig.instance.post(url, data);
    return response.data;
  }

  async getData<T>(url: string): Promise<ApiResponse<T>> {
    const response: AxiosResponse<ApiResponse<T>> = await AxiosConfig.instance.get(url);
    return response.data;
  }

  async putData<T>(url: string, data: any): Promise<ApiResponse<T>> {
    const response: AxiosResponse<ApiResponse<T>> = await AxiosConfig.instance.put(url, data);
    return response.data;
  }

  async deleteData<T>(url: string): Promise<ApiResponse<T>> {
    const response: AxiosResponse<ApiResponse<T>> = await AxiosConfig.instance.delete(url);
    return response.data;
  }
}
