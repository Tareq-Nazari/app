<template>
  <div>
    <router-view></router-view>
    <h1>contact page</h1>
    <label>name</label>
    <input type="text" v-model="user.name">
    <label>mail</label>
    <input type="text" v-model="user.mail">
    <button @click="send">submit</button>

  </div>

</template>

<script>
  import axios from 'axios';

    export default {
      data (){
        return {
          user: {
            name : '',
            mail: ''
          }
        }
      },

      methods: {
        send(){
            axios.post('https://vue-http-b106e.firebaseio.com/data.json',this.user)
          .then(res => console.log(res))
          .catch(err => console.log(err))
        }
      }

    }
</script>

<style scoped>

</style>
