<template>
<div>
  <div class="store-dsh-header">
    {{res}}
    <h5>تغییر نمایه هدر</h5>
    <input type="file" >
    <button type="submit" @click="update">تغییر</button>

  </div>
</div>
</template>

<script>
  import axios from 'axios';
    export default {
        name: "EditStore"
      ,
      data(){
          return {
            file : 'the',
            res : ''
          }
      },
      methods : {
          update(){
            axios.post('product')
            .then(res => console.log(res))
            .catch(error => console.log(error))
          }
      }
    }
</script>

<style scoped>
.store-dsh-header {
  height: 200px;
  width: 200px;
  border: solid 3px darkgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;
}
</style>
