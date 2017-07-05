<template>
  <div id="app" class="grid-container">
    <div class="row" v-for="user in users"> 
      <div class="col-2" v-for="n in 6">
        <div v-if="user.stage + 1 === n"> 
          <img :src="imageId(user)" class="car"/> {{user.name}} 
          <img :src="checker" class="checker" v-if="user.stage === 5"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const io = require('socket.io-client')
require('./assets/css/app.css')
export default {
  name: 'app',
  data () {
    return {
      users: [],
      checker: require('./assets/images/checkflag.png')
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
    },
    imageId (user) {
      return require('./assets/images/car' + user.icon_id + '.png')
    }
  }
}
</script>

