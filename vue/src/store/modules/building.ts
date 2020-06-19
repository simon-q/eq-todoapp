import Api from '../../services/Api';
import BuildingStoreState from './BuildingState.interface'
import { Building } from '../../models/Building.interface';
import { Commit } from 'vuex';

const state = (): BuildingStoreState => ({
  all: []
})

const actions = {
  findAll({ commit }: { commit: Commit }) {
    Api.getBuildings().then(buildings => commit('setAll', buildings))
  }
}

const mutations = {
  setAll(state: BuildingStoreState, buildings: Building[]) {
    state.all = buildings;
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}