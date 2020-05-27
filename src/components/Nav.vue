<template>

  <div class="nav">
    <div class="main">


      <div class="row">
        <a style="text-decoration: none    " href="#">

          <img style="padding-right: 15px; width: 20px;height: 20px; position: absolute;top: 47px;right: 214px"
               class="icon"
               src="src/img/logo.svg">
          سايت
        </a>


      </div>
      <div>
        <a style="margin-left:50px "> درباره سايت</a>

      </div>
      <div>
        <a>تماس باما</a>

      </div>
      <div>
        <a>نقد فيلم</a>

      </div>
      <div style="position: absolute ; left: 300px" class="ad">

        <a class="c">ورود / </a>
        <a class="c"> ثبت نام</a>
      </div>

    </div>
  </div>


</template>
<script>


  export default {
    name: "Nav"

  }
</script>
<style>

  @font-face {

    font-family: “yekan”;

    src: url('/src/fonts/Yekan.eot');
    src: url('/src/fonts/Yekan.eot?#iefix') format('embedded-opentype'),
    url('/src/fonts/Yekan.woff') format('woff'),
    url('/src/fonts/Yekan.ttf') format('truetype'),
    url('/src/fonts/Yekan.svg#BYekan') format('svg');

    font-weight: normal;

    font-style: normal

  }

  .nav {
    display: grid;
    background-color: #333333;

  }

  .main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 83px;
    transition: 0.5s;
    margin-right: 250px;
    margin-left: 100px;

  }

  .main > div {
    padding-top: 31px;
  }

  .main > div > a {
    cursor: pointer;
    color: #e50914;
    font-size: 18px;
    font-family: '“yekan”';

  }

  .main > div > a:hover {
    color: coral;

  }

</style>
