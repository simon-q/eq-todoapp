<template>
  <ul class="list-group">
    <li
      v-for="task in tasks.filter(task => done != null && task.done === done)"
      :key="task.id"
      class="list-group-item text-left"
    >
      <div class="v-align-row">

        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" :id="'check' + task.id" v-model="task.done" @click="onClickDone(task)">
          <label class="custom-control-label" :for="'check' + task.id"></label>
        </div>

        <div class="v-align-row wrap grow">
          <div>{{ task.text }}</div>
          <div class="v-align-row">
            <span v-if="task.person" class="badge badge-info">
              <IconPerson />
              {{ task.person.name }}
            </span>
            <span v-if="task.building" class="badge badge-info">
              <IconBuilding />
              {{ task.building.name }}
            </span>
          </div>
        </div>

        <div class="v-align-row wrap no-grow">
          <!-- <div @click="edit(task)">a1</div> -->
          <div @click="onClickDelete(task.id)">
            <IconDelete />
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Task } from "../../models/Task.interface";
import IconBuilding from "@/components/icon/Building.vue";
import IconPerson from "@/components/icon/Person.vue";
import IconDelete from "@/components/icon/Delete.vue";
import { mapState } from "vuex";

@Component({
  computed: mapState({
    tasks: (state: any) => state.task.all
  }),
  props: {
    done: {
      type: Boolean,
      default: null
    }
  },
  components: {
    IconBuilding,
    IconPerson,
    IconDelete,
  }
})
export default class TaskList extends Vue {

  onClickDone(task: Task) {
    this.$store.dispatch('task/setDone', {
      id: task.id,
      done: !task.done,
    });
  }

  onClickDelete(id: number) {
    this.$store.dispatch('task/delete', id);
  }
}
</script>