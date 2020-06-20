import { Person } from './Person.interface';
import { Building } from './Building.interface';
export interface Task {
  id: number;
  text: string;
  done: boolean;
  person: Person;
  building: Building;
}