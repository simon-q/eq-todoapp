import TaskFilterStoreState from './TaskFilterState.interface'
import { Commit } from 'vuex';

const state = (): TaskFilterStoreState => ({
  personId: null,
  buildingId: null
});

const actions = {
  set({ commit }: { commit: Commit }, payload: Partial<TaskFilterStoreState>) {
    commit('updateState', payload);
  }
}

const mutations = {
  updateState(state: TaskFilterStoreState, newState: Partial<TaskFilterStoreState> = {}) {
    Object.assign(state, newState);
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}