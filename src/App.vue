<template>
  <div id="App">
    <Neon />
    <Bitcoin />
    <!--<Table />
    <HelloWorld />  -->
    <template>
      <img class="w-8" alt="Vue logo" src="./assets/logo.png" />
      <p class="text-xs">v2</p>
      <p class="text-xs">build - 00001</p>
    </template>
  </div>
</template>

<script>
//import Table from './components/Table.vue'
import Neon from "./components/Neon.vue";
import Bitcoin from "./components/Bitcoin.vue";
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components: {
    Neon,
    //Table,
    Bitcoin,
    // HelloWorld
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
body {
  background-color: black;
  color: #ffffff;
}
</style>
