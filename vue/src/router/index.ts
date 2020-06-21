import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Tasks from "../views/Tasks.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Tasks",
    component: Tasks
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
