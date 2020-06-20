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

  private taskToRequestPayload = (task: Partial<Task>): TaskRequestPayload => {
    return {
      id: task.id,
      done: task.done,
      text: task.text,
      personId: task.person?.id,
      buildingId: task.building?.id
    };
  }

  getTasks(params: { personId?: number | null, buildingId?: number | null } = {}): Promise<Task[]> {
    return this.axiosInstance.get<Task[]>('tasks', { params })
      .then(response => response.data);
  }

  createTask(task: Partial<Task>): Promise<Task> {
    return this.axiosInstance.post('tasks', this.taskToRequestPayload(task));
  }

  updateTask(task: Partial<Task>): Promise<void> {
    return this.axiosInstance.put('tasks/' + task.id, this.taskToRequestPayload(task));
  }

  deleteTask(id: number): Promise<void> {
    return this.axiosInstance.delete('tasks/' + id);
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

export interface TaskRequestPayload {
  id?: number;
  text?: string;
  done?: boolean;
  personId?: number;
  buildingId?: number;
}

const service = new Api();

export default service;
