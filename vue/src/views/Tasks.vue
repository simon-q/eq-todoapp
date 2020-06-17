<template>
  <div class="about container">
    <h1>Tasks</h1>
    <!-- todo: filter -->
    <!-- todo: add form -->
    <TaskList v-if="tasks" />
    <img v-if="!tasks || !tasks.length" class="empty-image" alt="empty list" src="../assets/empty.jpg" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TaskList from "@/components/task/List.vue";
import { Task } from '../models/Task.interface';
import { mapState } from "vuex";

@Component({
  components: {
    TaskList
  },
  computed: mapState({
    tasks: (state: any) => state.task.all
  }),
})
export default class Tasks extends Vue {
  name = "Tasks";
  created() {
    this.$store.dispatch('task/findAll');
  }
}
</script>

<style scoped>
.empty-image {
  width: 100%;
}
</style>
