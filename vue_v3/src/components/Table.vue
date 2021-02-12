<template>
  <table class="table">
      <thead>
          <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">City</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="user in users" v-bind:key="user.id">
              <th scope="row">{{user.id}}</th>
              <td>{{user.name}}</td>
              <td>{{user.email}}</td>
              <td>{{user.address.city}}</td>
          </tr>
      </tbody>
  </table>
</template>

<script>
  import axios from "axios"

  export default {
    name: 'Table',
    data() {
        return { users: null };
    },
    created: function() {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.users = res.data;
            })
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

table { color: azure; }

</style>
