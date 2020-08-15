<template>
  <div class="container">
    <input type="text" placeholder="نام کاربری...">
    <input type="password" placeholder="رمزعبور..">

    <button style="height: 30px;width: 100px;background-color: dodgerblue;font-family: vasir;color: white;border: 0;border-radius:  50% 50% 0 0" >ورود </button>
    <div>
      <h4 style="display: inline-block ;margin-left: 5px" >ثبت نام نکرده اید؟</h4>
      <router-link to="/shopregister"> ثبت نام</router-link>
    </div>
  </div>
</template>
<script>

</script>
<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #d0d4d3;
    height: 300px;
    border-radius: 5%;
    box-shadow: #888888 5px 5px;
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    font-family: vasir;


  }
  .container input{
    font-family: vasir;
    padding: 5px;
    height: 40px;
    width: 200px;
    border-radius: 10px;
    background-color: white;
    border: none;
    outline: none;


  }
  div > a {
    text-decoration: none;


  }

</style>
