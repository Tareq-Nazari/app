<template>
  <div>
    <div style="margin-bottom: 10px;padding-left: 10px;padding-right: 10px;height: 50px;background-color: #d0d4d3;display: flex;justify-content: space-between;align-items: center">
      <h2>فروشگاه ویمانا</h2>
      <button v-on:click="logoutw" class="exit-btn">خروج</button>
    </div>

<router-view></router-view>
  </div>

</template>

<script >
  import {logout} from '../../../services/auth_service';

  export default {
    data(){
      return {
        login : ''

      }
    },
    methods : {
      name: "newStore",
      logoutw(){
        try{
          logout()
         this.$router.push('/login')

        }catch (e) {
          alert(e)
        }

      }
    }
  }
</script>
