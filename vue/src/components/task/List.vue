<template>
  <ul class="list-group">
    <li
      v-for="task in tasks.filter(task => done != null && task.done === done)"
      :key="task.id"
      class="list-group-item text-left"
    >
      <div v-if="taskToEditId !== task.id" class="v-align-row">

        <div class="custom-control custom-checkbox pull-left">
          <input type="checkbox" class="custom-control-input" :id="'check' + task.id" v-model="task.done" @click="onClickDone(task)">
          <label class="custom-control-label" :for="'check' + task.id"></label>
        </div>

        <div class="v-align-row wrap grow">
          <div>{{ task.text }}</div>
          <div class="v-align-row">
            <span v-if="task.person" class="badge task-badge badge-light border border-primary text-primary">
              <div class="v-align-row">
                <IconPerson />
                <span>{{ task.person.name }}</span>
              </div>
            </span>
            <span v-if="task.building" class="badge task-badge badge-light border border-primary text-primary">
              <div class="v-align-row">
                <IconBuilding />
                <span>{{ task.building.name }}</span>
              </div>
            </span>
          </div>
        </div>

        <div class="v-align-row no-grow">
          <div @click="onClickEdit(task.id)" class="action-icon pointer">
            <IconEdit />
          </div>
          <div @click="onClickDelete(task.id)" class="action-icon pointer pull-right">
            <IconDelete />
          </div>
        </div>
      </div>

      <TaskForm v-if="taskToEditId === task.id" :task="task" @close="onEditClose()" />
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Task } from "../../models/Task.interface";
import TaskForm from "@/components/task/Form.vue";
import IconBuilding from "@/components/icon/Building.vue";
import IconPerson from "@/components/icon/Person.vue";
import IconEdit from "@/components/icon/Edit.vue";
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
    TaskForm,
    IconBuilding,
    IconPerson,
    IconEdit,
    IconDelete,
  }
})
export default class TaskList extends Vue {

  private taskToEditId: number | null = null;

  onClickDone(task: Task) {
    this.$store.dispatch('task/setDone', {
      id: task.id,
      done: !task.done,
    });
  }

  onClickEdit(id: number) {
    this.taskToEditId = id;
  }

  onEditClose() {
    this.taskToEditId = null;
  }

  onClickDelete(id: number) {
    this.$store.dispatch('task/delete', id);
  }
}
</script>

<style scoped>
.action-icon {
  margin-left: 6px;
}

.pull-left {
  margin-left: -4px;
}

.pull-right {
  margin-right: -4px;
}
</style>
