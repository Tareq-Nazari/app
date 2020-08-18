<template>
    <div style="background-color: #F5F5F5;width: 100%;min-height: 670px;overflow: auto">
      <div  style="background-color: #FFFFFF;min-height: 163px;width:55%;margin-top: 50px;margin-left: auto;margin-right: auto;">
     <div id="1" v-for="i in 2" style="display: flex;margin: 10px;position: relative;border-bottom: 1px solid #d0d4d3">
       <img style="border-radius: 5px" src="src/img/tshirt.jpg" height="150" width="150">
       <div style="margin-right: 10px" >
        <h3>xxxxxxxxxxxx</h3>
         <h5>xxxxxxxxxxxx</h5>
         <h5>xxxxxxxxxxxx</h5>

       </div>
       <font-awesome-icon v-on:click="deletes(1)" :icon="['fas' , 'trash']" style="color: red ; position: absolute;top: 0;left: 0"></font-awesome-icon>
       <div style="position: absolute;left: 0;bottom: 0">قیمت : 127000</div>
     </div>

      </div>
      <div style="width: 53%;height: 20%;background-color: #FFFFFF;margin-top: 10px;padding: 16px;margin-right: auto;margin-left: auto;display: flex;flex-direction: column;">
        <div style="border-bottom: 1px solid #d0d4d3"><p style="float: left">100000</p><p style="float: right">تخفیف کالا ها : </p></div>
        <div style="border-bottom: 1px solid #d0d4d3"><p style="float: left">100000</p><p style="float: right">جمع : </p></div>
        <div style="border-bottom: 1px solid #d0d4d3"><p style="float: left">100000</p><p style="float: right">قابل پرداخت : </p></div>
        <button style="margin-top: 5px;height: 36px;width: 80%;border: none;color: white;background-color: #EF394E;margin-left: auto;margin-right: auto;outline: none;border-radius: 5px">پرداخت</button>
      </div>

    </div>
</template>

<script>
    export default {
        name: "ShoppingCart",
      data(){
          return {
            show : true,
          }
      },
      methods : {
         deletes(id){
            let v = document.getElementById(id);
            v.remove();

        }
      }
    }
</script>

<style scoped>

</style>
