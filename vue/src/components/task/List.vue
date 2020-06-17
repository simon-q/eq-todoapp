<template>
  <ul class="list-group">
    <li
      v-for="task in tasks"
      :key="task.id"
      class="list-group-item"
    >
      {{ task.text }}
      <span v-if="task.person" class="badge badge-secondary">{{ task.person.name }}</span>
      &nbsp;
      <span v-if="task.building" class="badge badge-secondary">{{ task.building.name }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Task } from "../../models/Task.interface";

@Component
export default class TaskList extends Vue {
  @Prop() private tasks!: Task[];
}
</script>