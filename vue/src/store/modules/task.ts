import Api from '../../services/Api';
import TaskStoreState from './TaskState.interface'
import { Task } from '../../models/Task.interface';
import { Commit } from 'vuex';

const state = (): TaskStoreState => ({
  all: []
})

const actions = {
  findAll(
    { commit }: { commit: Commit },
    payload: FindAllActionPayload,
  ) {
    Api.getTasks(payload).then(tasks => commit('setAll', tasks))
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

export default {
  namespaced: true,
  state,
  actions,
  mutations
}