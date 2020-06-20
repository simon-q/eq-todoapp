<template>
<div>
  <button v-if="!isFormOpen" @click="onClickOpenButton" type="button" class="btn btn-primary btn-block">
    <div class="v-align-row justify-center">
      <IconPlus />
      <span>Add New Task</span>
    </div>
  </button>
  <div v-if="isFormOpen">
    <div class="form-group text-left">
      <button @click="onClickClose()" type="button" class="btn btn-sm float-right close-button">
        <IconClose class="icon-lg"/>
      </button>
      <label for="text" class="v-align-row pl-2">
        <IconTask />
        <span v-if="!isEdit">New Task</span>
        <span v-if="isEdit">Edit Task</span>
      </label>
      <input v-model="text" type="text" class="form-control" id="task" placeholder="Describe your task ..." required>
    </div>
    <div class="row row-gutter-condensed pb-2">
      <div class="col-6">
        <div class="form-group text-left">
          <label for="person" class="v-align-row pl-2"><IconPerson /><span>Person</span></label>
          <select class="form-control" id="person" v-model="selectedPersonId">
            <option :value="null">None</option>
            <option v-for="person in persons" :key="'person'+person.id" v-bind:value="person.id">
              {{ person && person.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="col-6">
        <div class="form-group text-left">
          <label for="building" class="v-align-row pl-2"><IconBuilding /><span>Building</span></label>
          <select class="form-control" id="building" v-model="selectedBuildingId">
            <option :value="null">None</option>
            <option v-for="building in buildings" :key="'building'+building.id" v-bind:value="building.id">
              {{ building && building.name }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="row row-gutter-condensed pb-4">
      <div class="col-6">
      </div>
      <div class="col-6">
        <button
          @click="onClickSubmitButton"
          :disabled="!text || !text.trim()"
          type="button"
          class="btn btn-primary btn-block"
        >
          <span v-if="!isEdit">Add</span>
          <span v-if="isEdit">Save</span>
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Task } from "../../models/Task.interface";
import IconBuilding from "@/components/icon/Building.vue";
import IconPerson from "@/components/icon/Person.vue";
import IconTask from "@/components/icon/Task.vue";
import IconPlus from "@/components/icon/Plus.vue";
import IconClose from "@/components/icon/Close.vue";
import { mapState } from "vuex";
import { Person } from '../../models/Person.interface';
import { Building } from '../../models/Building.interface';

@Component({
  computed: mapState({
    persons: (state: any) => state.person.all,
    buildings: (state: any) => state.building.all
  }),
  props: {
    task: {
      type: Object
    }
  },
  components: {
    IconBuilding,
    IconPerson,
    IconTask,
    IconPlus,
    IconClose,
  }
})
export default class TaskForm extends Vue {
  private selectedPersonId: number|null = null;
  private selectedBuildingId: number|null = null;
  private isFormOpen = false;
  private isEdit = false;
  private text = '';

  onClickSubmitButton() {
    let action: string;
    let task: Partial<Task> = {
      text: this.text,
      person: {
        id: this.selectedPersonId
      } as Person,
      building: {
        id: this.selectedBuildingId
      } as Building
    };

    if (this.isEdit) {
      action = 'task/update';
      task = {
        ...this.$props.task,
        ...task
      };
    } else {
      action = 'task/create';
    }

    this.$store.dispatch(action, task)
      .then(() => {
        this.text = '';
        this.selectedPersonId = null;
        this.selectedBuildingId = null;
        this.close();
      });
  }

  onClickOpenButton() {
    this.isFormOpen = true;
  }

  onClickClose() {
    this.close();
  }

  private close() {
    this.isFormOpen = false;
    this.$emit('close');
  }

  created() {
    const { $props: { task } } = this;
    if (task) {
      this.isFormOpen = true;
      this.isEdit = true;
      this.text = task.text;
      this.selectedPersonId = task.person?.id || null;
      this.selectedBuildingId = task.building?.id || null;
    }
  }
}
</script>

<style scoped>
.close-button {
  margin-top: -6px;
}
</style>
