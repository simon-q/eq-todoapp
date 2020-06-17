import Vue from "vue";
import Vuex from "vuex";
import task from "./modules/task";
import StoreState from './State.interface';

Vue.use(Vuex);

export default new Vuex.Store<StoreState>({
  modules: {
    task,
  },
});
