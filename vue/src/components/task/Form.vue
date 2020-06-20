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
      <label for="text" class="v-align-row"><IconTask /><span>New Task</span></label>
      <input v-model="text" type="text" class="form-control" id="task" placeholder="Describe your task ..." required>
    </div>
    <div class="row row-gutter-condensed pb-2">
      <div class="col-6">
        <div class="form-group text-left">
          <label for="person" class="v-align-row"><IconPerson /><span>Person</span></label>
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
          <label for="building" class="v-align-row"><IconBuilding /><span>Building</span></label>
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
        <button
          @click="onClickAddButton"
          :disabled="!text || !text.trim()"
          type="button"
          class="btn btn-primary btn-block"
        >
          Add
        </button>
      </div>
      <div class="col-6 text-right">
        <button  @click="onClickClose()" type="button" class="btn">
          Close
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
import { mapState } from "vuex";

@Component({
  computed: mapState({
    persons: (state: any) => state.person.all,
    buildings: (state: any) => state.building.all
  }),
  components: {
    IconBuilding,
    IconPerson,
    IconTask,
    IconPlus,
  }
})
export default class TaskForm extends Vue {
  private selectedPersonId: number|null = null;
  private selectedBuildingId: number|null = null;
  private isFormOpen = false;
  private text = "";

  onClickAddButton() {
    this.$store.dispatch('task/create', {
      text: this.text,
      personId: this.selectedPersonId,
      buildingId: this.selectedBuildingId
    });
  }

  onClickOpenButton() {
    this.isFormOpen = true;
  }

  onClickClose() {
    this.isFormOpen = false;
  }
}
</script>