<template>
  <div id="app">
    <ul>
      <li v-for="user in users"> <img src="./assets/car1.png"/> {{user.icon_id}} </li>
    </ul>
  </div>
</template>

<script>
const io = require('socket.io-client')
export default {
  name: 'app',
  data () {
    return {
      users: []
    }
  },
  created () {
    let socket = io('http://localhost:3000')
    socket.on('user update', this.setUsers)
  },
  methods: {
    setUsers (users) {
      this.users = users.map(user => {
        user.icon_id = user.userId.charCodeAt(1) % 8 + 1
        return user
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color:#E7E7E7;
}
</style>
