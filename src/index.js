import io from 'socket.io-client';
import Vue from 'vue';

new Vue({
  el:"body",
  created(){
    console.log("Created called")
    const socket = io("http://localhost:3000");
  }
})
