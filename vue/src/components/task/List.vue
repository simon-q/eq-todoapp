<template>
  <ul class="list-group">
    <li
      v-for="task in tasks"
      :key="task.id"
      class="list-group-item v-align-row text-left"
    >
      {{ task.text }}
      <span v-if="task.person" class="badge badge-info">
        <IconPerson />
        {{ task.person.name }}
      </span>
      &nbsp;
      <span v-if="task.building" class="badge badge-info">
        <IconBuilding />
        {{ task.building.name }}
      </span>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Task } from "../../models/Task.interface";
import IconBuilding from "@/components/icon/Building.vue";
import IconPerson from "@/components/icon/Person.vue";
import { mapState } from "vuex";

@Component({
  computed: mapState({
    tasks: (state: any) => state.task.all
  }),
  components: {
    IconBuilding,
    IconPerson,
  }
})
export default class TaskList extends Vue {}
</script>