import Api from '../../services/Api';
import TaskStoreState from './TaskState.interface'
import { Task } from '../../models/Task.interface';
import { Commit, Dispatch } from 'vuex';
import StoreState from '../State.interface';

const state = (): TaskStoreState => ({
  all: []
})

const actions = {
  findAll(
    { commit, rootState }: { commit: Commit, rootState: StoreState },
  ) {
    Api.getTasks(rootState.taskFilter)
      .then(tasks => commit('setAll', tasks));
  },
  create(
    { dispatch }: { dispatch: Dispatch },
    payload: CreateActionPayload,
  ) {
    Api.createTask(payload)
      .then(() => dispatch('findAll'));
  },
  setDone(
    { dispatch, state }: { dispatch: Dispatch, state: TaskStoreState },
    payload: SetDoneActionPayload,
  ) {
    const task = state.all.find(item => item.id === payload.id);
    if (task) {
      Api.updateTask({
        ...task,
        done: payload.done
      })
        .then(() => dispatch('findAll'));
    }
  },
  delete(
    { dispatch }: { dispatch: Dispatch },
    id: number,
  ) {
    Api.deleteTask(id)
      .then(() => dispatch('findAll'));
  }
}

const mutations = {
  setAll(state: TaskStoreState, tasks: Task[]) {
    state.all = tasks;
  },
}

export interface FindAllActionPayload {
  personId?: number;
  buildingId?: number;
}

export interface CreateActionPayload {
  text: string;
  personId?: number;
  buildingId?: number;
}

export interface SetDoneActionPayload {
  id: number,
  done: boolean,
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}