<template>

  <div id="App">
    <img alt="Vue logo" src="./assets/logo.png">
    <Neon />
    <Table />
    <!--<HelloWorld />  -->
    
  </div>

</template>

<script>
import Table from './components/Table.vue'
import Neon from './components/Neon.vue'
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    Neon,
    Table,
 // HelloWorld
  }

  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
body {
  background-color: black;
  color: #ffffff;
  }
</style>
