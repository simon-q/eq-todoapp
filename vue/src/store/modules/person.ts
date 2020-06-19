import Api from '../../services/Api';
import PersonStoreState from './PersonState.interface'
import { Person } from '../../models/Person.interface';
import { Commit } from 'vuex';

const state = (): PersonStoreState => ({
  all: []
})

const actions = {
  findAll({ commit }: { commit: Commit }) {
    Api.getPersons().then(persons => commit('setAll', persons))
  }
}

const mutations = {
  setAll(state: PersonStoreState, persons: Person[]) {
    state.all = persons;
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}