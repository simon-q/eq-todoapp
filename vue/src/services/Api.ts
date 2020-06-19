import axios, { AxiosInstance } from "axios";
import { Task } from '@/models/Task.interface';
import { Person } from '@/models/Person.interface';
import { Building } from '@/models/Building.interface';

class Api {

  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "http://localhost:8080/api/v1/",
    });
  }

  getTasks(params: { personId?: number, buildingId?: number }): Promise<Task[]> {
    return this.axiosInstance.get<Task[]>('tasks', { params })
      .then(response => response.data);
  }

  getPersons(): Promise<Person[]> {
    return this.axiosInstance.get<Person[]>('persons')
      .then(response => response.data);
  }

  getBuildings(): Promise<Building[]> {
    return this.axiosInstance.get<Building[]>('buildings')
      .then(response => response.data);
  }
}

const service = new Api();

export default service;
