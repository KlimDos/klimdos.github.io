<template>
  <div id="App">
    <Neon />
    <Bitcoin />
    <!--<Table />
    <HelloWorld />  -->
    <template>
      <img alt="Vue logo" src="./assets/logo.png" />
      <p>v2</p>
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
