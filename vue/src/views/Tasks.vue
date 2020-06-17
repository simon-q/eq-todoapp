<template>
  <div class="about container">
    <h1>Tasks</h1>
    <!-- todo: filter -->
    <!-- todo: add form -->
    <TaskList v-if="tasks" :tasks="tasks" />
    <img v-if="!tasks || !tasks.length" class="empty-image" alt="empty list" src="../assets/empty.jpg" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TaskList from "@/components/task/List.vue";
import { Task } from '../models/Task.interface';
import axios from "axios";

@Component({
  components: {
    TaskList
  }
})
export default class Tasks extends Vue {
  name = "Tasks";
  tasks: Task[] = [];
  created() {
    axios.get<Task[]>("http://localhost:8080/api/v1/tasks")
      .then(response => this.tasks = response.data);
  }
}
</script>

<style scoped>
.empty-image {
  width: 100%;
}
</style>
