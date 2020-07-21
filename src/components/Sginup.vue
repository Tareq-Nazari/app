<template>
  <div>
    <h2>register</h2>
    <label>name : </label>
    <input name="name">
    <label>pass : </label>
    <input name="pass">
    <button @click="send">sunmit</button>
  </div>


</template>

<script>
  import axios from 'axios'
    export default {
        name: "Sginup",
      data(){
          return {
            username : '',
            pass : ''
          }
      },
      methods : {
          send(){
            axios.post()

          }
      }
    }
</script>

<style scoped>

</style>
