import { Person } from './Person.interface';
import { Building } from './Building.interface';
export interface Task {
  id: number;
  text: string;
  person: Person;
  building: Building;
}