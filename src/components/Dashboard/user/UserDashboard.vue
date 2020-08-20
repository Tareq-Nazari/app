<template>
<div class="usr-dsh-container">
  <div style="border-radius: 5px;width: 268px;height: 350px;background-color: #e11d20;position: sticky;top: 50px;padding: 10px">
    <div @click="show.profile=true,show.history=false,show.fav=false"  style="cursor: pointer;border-bottom: #c3c7c6 solid 1px;font-size: 24px;color: #e1d4de;text-align: center;margin-top: 30px"><font-awesome-icon :icon="['fas' , 'user-circle']" style="color: #e1d4de"></font-awesome-icon>&nbsp;پروفایل</div>
    <div  @click="show.profile=false,show.history=true,show.fav=false" style="border-bottom: #c3c7c6 solid 1px;font-size: 24px;color: white;text-align: center;margin-top: 30px"><font-awesome-icon :icon="['fas' , 'shopping-cart']" style="color: #e1d4de"></font-awesome-icon>&nbsp;تاریخچه سفارشات</div>
    <div @click="show.profile=false,show.history=false,show.fav=true" style="border-bottom: #c3c7c6 solid 1px;font-size: 24px;color: white;text-align: center;margin-top: 30px"><font-awesome-icon :icon="['fas' , 'star']" style="color: #e1d4de"></font-awesome-icon>&nbsp;موردعلاقه ها</div>

  </div>
  <div style="width: 1080px;height: auto;">
    <div v-if="show.profile" style="width: 100%;height: 100%;display: flex;flex-direction: column;justify-content: space-between">
      <label> نام و نام خانوادگی :
      <input type="text" style="height: 30px;width: 200px;background-color: #d0d4d3;padding: 2px;border: none;border-radius: 5px;outline: none"></label>
      <label>شماره همراه :
        <input type="text" style="height: 30px;width: 150px;background-color: #d0d4d3;padding: 2px;border: none;border-radius: 5px;outline: none"></label>
      <label>ایمیل :
        <input type="text" style="height: 30px;width: 150px;background-color: #d0d4d3;padding: 2px;border: none;border-radius: 5px;outline: none"></label>
      <label for="addr"> آدرس :
        <textarea id="addr" style="height: 145px;width: 215px;background-color: #d0d4d3;padding: 2px;border: none;border-radius: 5px;outline: none"></textarea></label>
      <label>کدپستی :
        <input type="text" style="height: 30px;width: 100px;background-color: #d0d4d3;padding: 2px;border: none;border-radius: 5px;outline: none"></label>
      <button style="height: 50px;width: 100px;border: none;outline: none;background-color: #4a61d3;color: white;align-self: center">بروزرسانی</button>

    </div>
    <div  class="usr-dsh-order-history-container" v-else-if="show.history">
      <div v-for="i in 10" class="usr-dsh-order-history" style="">
        <img src="../../../img/tshirt.jpg" style="height: 90%;width: 80px;border-radius: 5px" >
        <h6>نام محصول : </h6>
        <h6>کد سفارش : </h6>
        <h6>کد محصول : </h6>
        <h6>قیمت : </h6>
        <h6>تاریخ :  </h6>
        <h6>وضعیت سفارش : </h6>
      </div>
    </div>
    <div v-else-if="show.fav" style="width: 100%;height: 100%;display: flex;flex-wrap: wrap;justify-content: space-evenly;background-color: #d0d4d3">
      <div v-for="i in 10" dir="rtl" class="store-product-card" >

        <img src="../../../img/tshirt.jpg" style="margin-right: 1%;margin-top: 1%;border-radius: 2%" height="65%" width="98%">
        <p  style="font-size: 20px;">تیشرت گوچی</p>
        <p class="p">127000 تومان</p>
        <font-awesome-icon @click="fav" :icon="['fas','star']" style="color: #f6f000;font-size: 2em;position: absolute;top: 3px;left: 3px;z-index: 2"></font-awesome-icon>

      </div>
    </div>

  </div>
</div>
</template>

<script>
  import "../../../assets/css/style.css"
    export default {
        name: "UserDashboard",
      data(){
          return {
            show : {
              profile : false,
              history : true,
              fav: false,

            }
          }
      }
    }
</script>

<style scoped>
.usr-dsh-container {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 30px;
  height: auto;



}

  .usr-dsh-order-history-container {

    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start
      }
    .usr-dsh-order-history {
      height: auto;
      width: 100%;
      background-color: #f0f0f0;
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      align-items: center
    }
</style>
