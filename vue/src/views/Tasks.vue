<template>
  <div class="about container">
    <div class="pb-3"></div>
    <TaskForm class="pb-3" />
    <TaskFilter />
    <TaskList v-if="tasks" :done="false" class="pb-1"/>
    <div v-if="toDoCount > 0" class="pb-3 pl-2 text-left" >{{ toDoCount }} {{ toDoCount === 1 ? 'task' : 'tasks' }} to do</div>
    <TaskList v-if="tasks" :done="true" class="pb-1"/>
    <div v-if="doneCount > 0" class="pb-3 pl-2 text-left">{{ doneCount }} {{ doneCount === 1 ? 'task' : 'tasks' }} done</div>
    <img v-if="!tasks || !tasks.length" class="empty-image" alt="empty list" src="../assets/empty.jpg" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TaskList from "@/components/task/List.vue";
import TaskFilter from "@/components/task/Filter.vue";
import TaskForm from "@/components/task/Form.vue";
import { Task } from '../models/Task.interface';
import { mapState } from "vuex";

@Component({
  components: {
    TaskList,
    TaskFilter,
    TaskForm
  },
  computed: mapState({
    tasks: (state: any) => state.task.all,
    toDoCount: (state: any) => state.task.all.filter((task: Task) => !task.done).length,
    doneCount: (state: any) => state.task.all.filter((task: Task) => task.done).length,
  }),
})
export default class Tasks extends Vue {
  name = "Tasks";
  created() {
    this.$store.dispatch('task/findAll');
    this.$store.dispatch('person/findAll');
    this.$store.dispatch('building/findAll');
  }
}
</script>

<style scoped>
.empty-image {
  width: 100%;
}
</style>
