<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.row-gutter-condensed > [class*='col-']:first-child {
    padding-right: 5px;
}

.row-gutter-condensed > [class*='col-']:last-child {
    padding-left: 5px;
}

.row-gutter-condensed > [class*='col-']:not(:first-child):not(:last-child) {
    padding-right: 5px;
    padding-left: 5px;
}

.icon-lg {
  height: 22px;
  width: 22px;
}

.v-align-row {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.v-align-row > *:not(:last-child) {
  margin-right: 5px;
}

.space-between {
  justify-content: space-between;
}

.justify-center {
  justify-content: center;
}

.pointer {
  cursor: pointer;
}

.wrap {
  flex-wrap: wrap;
}

.grow {
  flex-grow: 1;
}

.no-grow {
  flex-grow: 0;
}

.badge.task-badge {
  font-size: 77%;
}

</style>
