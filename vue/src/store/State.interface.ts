import TaskStoreState from './modules/TaskState.interface';
import PersonStoreState from './modules/PersonState.interface';
import BuildingStoreState from './modules/BuildingState.interface';
import TaskFilterStoreState from './modules/TaskFilterState.interface';

export default interface StoreState {
  task: TaskStoreState;
  person: PersonStoreState;
  building: BuildingStoreState;
  taskFilter: TaskFilterStoreState;
}