<template>
<div class="collapsed">

  <!-- status -->
  <div class="text-left pb-2 v-align-row space-between">
    <div class="v-align-row">
      <IconFilter />
      <span class="font-weight-bold pointer" @click="onClickFilterToggle()">
        Filters
      </span>
      <span v-if="!personId && !buildingId" @click="onClickFilterToggle()" class="pointer">
        None
      </span>
      <span v-if="personId" class="badge task-badge badge-light border border-primary text-primary">
        <div class="v-align-row">
          <IconPerson />
          <span>{{ selectedPersonName }}</span>
        </div>
      </span>
      <span v-if="buildingId" class="badge task-badge badge-light border border-primary text-primary">
        <div class="v-align-row">
          <IconBuilding />
          <span>{{ selectedBuildingName }}</span>
        </div>
      </span>
      <span v-if="personId || buildingId" class="text-secondary pointer" @click="onClickClear()">
        Clear
      </span>
    </div>
    <button @click="onClickFilterToggle()" type="button" class="btn">
      <IconChevronUp class="float-right icon-lg pointer" v-if="isFilterOpen" />
      <IconChevronDown class="float-right icon-lg pointer" v-if="!isFilterOpen" />
    </button>

  </div>

  <!-- form -->
  <form v-show="isFilterOpen">
    <div class="row row-gutter-condensed">
      <div class="col-6">
        <div class="form-group text-left">
          <label for="person" class="v-align-row pl-2"><IconPerson /><span>Person</span></label>
          <select class="form-control" id="person" :value="personId" @change="onChangePerson($event)">
            <option :value="null">All</option>
            <option v-for="person in persons" :key="'person'+person.id" v-bind:value="person.id">
              {{ person && person.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="col-6">
        <div class="form-group text-left">
          <label for="building" class="v-align-row pl-2"><IconBuilding /><span>Building</span></label>
          <select class="form-control" id="building" :value="buildingId" @change="onChangeBuilding($event)">
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
import StoreState from "../../store/State.interface";
import TaskFilterStoreState from "../../store/modules/TaskFilterState.interface";

interface TaskFilterInterface extends Vue {
  persons: Person[],
  buildings: Building[],
  personId: number | null,
  buildingId: number | null,
}

@Component({
  computed: mapState({
    persons: (state: any) => state.person.all,
    buildings: (state: any) => state.building.all,
    personId: (state: any) => state.taskFilter.personId,
    buildingId: (state: any) => state.taskFilter.buildingId,
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
  private isFilterOpen = false;

  constructor() {
    super();
  }

  onClickFilterToggle() {
    this.isFilterOpen = !this.isFilterOpen;
  }

  onChangePerson(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.updateStore({
      personId: value ? parseInt(value, 10) : null,
    })
      .then(this.loadTasks);
  }

  onChangeBuilding(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.updateStore({
      buildingId: value ? parseInt(value, 10) : null,
    })
      .then(this.loadTasks);
  }

  onClickClear() {
    this.updateStore({
      personId: null,
      buildingId: null,
    })
      .then(this.loadTasks);
  }

  updateStore(values: Partial<TaskFilterStoreState>): Promise<void> {
    return this.$store.dispatch('taskFilter/set', values);
  }

  loadTasks = () => {
    this.$store.dispatch('task/findAll');
  }

  get selectedPersonName(): string {
    return this.persons?.find((person: Person) => person.id === this.personId)?.name || '';
  }

  get selectedBuildingName(): string {
    return this.buildings?.find((building: Building) => building.id === this.buildingId)?.name || '';
  }
}
</script>