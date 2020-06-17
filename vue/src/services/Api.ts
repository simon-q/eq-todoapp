import axios, { AxiosInstance } from "axios";
import { Task } from '@/models/Task.interface';

class Api {

  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "http://localhost:8080/api/v1/",
    });
  }

  getTasks(): Promise<Task[]> {
    return this.axiosInstance.get<Task[]>('tasks')
      .then(response => response.data);
  }
}

const service = new Api();

export default service;
