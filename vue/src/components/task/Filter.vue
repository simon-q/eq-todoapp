<template>
<div class="collapsed">

  <!-- status -->
  <div class="text-left pb-2 v-align-row space-between" @click="onClickFilterToggle()">
    <div class="v-align-row">
      <IconFilter />
      <span class="font-weight-bold">
        Filters
      </span>
      <span v-if="!selectedPersonId && !selectedBuildingId">
        -&nbsp;None
      </span>
      <span v-if="selectedPersonId" class="badge badge-info">
        <IconPerson />
        {{ selectedPersonName }}
      </span>
      <span v-if="selectedBuildingId" class="badge badge-info">
        <IconBuilding />
        {{ selectedBuildingName }}
      </span>
      <span v-if="selectedPersonId || selectedBuildingId" class="text-secondary" @click="onClickClear()">
        Clear
      </span>
    </div>
    <IconChevronUp class="float-right icon-lg" v-if="isFilterOpen" />
    <IconChevronDown class="float-right icon-lg" v-if="!isFilterOpen" />
  </div>

  <!-- form -->
  <form v-show="isFilterOpen">
    <div class="row row-gutter-condensed">
      <div class="col-6">
        <div class="form-group text-left">
          <label for="person" class="v-align-row"><IconPerson /><span>Person</span></label>
          <select class="form-control" id="person" v-model="selectedPersonId" @change="onChangeFilter()">
            <option :value="null">All</option>
            <option v-for="person in persons" :key="'person'+person.id" v-bind:value="person.id">
              {{ person && person.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="col-6">
        <div class="form-group text-left">
          <label for="building" class="v-align-row"><IconBuilding /><span>Building</span></label>
          <select class="form-control" id="building" v-model="selectedBuildingId" @change="onChangeFilter()">
            <option :value="null">All</option>
            <option v-for="building in buildings" :key="'building'+building.id" v-bind:value="building.id">
              {{ building && building.name }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </form>
</div>

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Person } from "../../models/Person.interface";
import { Building } from "../../models/Building.interface";
import IconFilter from "@/components/icon/Filter.vue";
import IconBuilding from "@/components/icon/Building.vue";
import IconPerson from "@/components/icon/Person.vue";
import IconChevronUp from "@/components/icon/ChevronUp.vue";
import IconChevronDown from "@/components/icon/ChevronDown.vue";
import { mapState } from "vuex";

interface TaskFilterInterface extends Vue {
  persons: Person[],
  buildings: Building[],
}

@Component({
  computed: mapState({
    persons: (state: any) => state.person.all,
    buildings: (state: any) => state.building.all
  }),
  components: {
    IconFilter,
    IconBuilding,
    IconPerson,
    IconChevronUp,
    IconChevronDown
  }
})
export default class TaskFilter extends Vue<TaskFilterInterface> {
  private selectedPersonId: number|null = null;
  private selectedBuildingId: number|null = null;
  private isFilterOpen = false;

  constructor() {
    super();
  }

  onClickFilterToggle() {
    this.isFilterOpen = !this.isFilterOpen;
  }

  onChangeFilter() {
    this.loadTasks();
  }

  onClickClear() {
    this.selectedPersonId = null;
    this.selectedBuildingId = null;
    this.loadTasks();
  }

  loadTasks() {
    this.$store.dispatch('task/findAll', {
      personId: this.selectedPersonId,
      buildingId: this.selectedBuildingId
    });
  }

  get selectedPersonName(): string {
    return this.persons?.find((person: Person) => person.id === this.selectedPersonId)?.name || '';
  }

  get selectedBuildingName(): string {
    return this.buildings?.find((building: Building) => building.id === this.selectedBuildingId)?.name || '';
  }
}
</script>