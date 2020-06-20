import Vue from "vue";
import Vuex from "vuex";
import task from "./modules/task";
import person from "./modules/person";
import building from "./modules/building";
import taskFilter from "./modules/taskFilter";
import StoreState from './State.interface';

Vue.use(Vuex);

export default new Vuex.Store<StoreState>({
  modules: {
    task,
    person,
    building,
    taskFilter,
  },
});
