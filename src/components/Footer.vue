<template>

  <div class="footer-container">

    <div class="footer-subcribe">
      <div></div>
      <div style="text-align: center">

        <p style="font-family: vasir">ایمیل خود را ثبت کنید تا پیشنهاد های ویژه را برای شما بفرستیم</p>
        <form>
          <div class="x">
            <div></div>
            <input class="submit" type="button" value="ثبت">
            <input class="text-area" placeholder="Email" type="text">
          </div>
        </form>

      </div>

    </div>

    <div class="footer-links">
      <div></div>
      <div>mix store
        <p>
          ایلام 22بهمن پلاک 123
        </p>
        <p>
          09184536983
        </p>
        <p>
          help@mixstore.com
        </p>
        <div class="social-media">

          <div>
            <a   href="#">
            <font-awesome-icon :icon="['fab','facebook']"/>
            </a>
          </div>
          <div>
            <a href="#">
            <font-awesome-icon :icon="['fab','youtube']"/>
            </a>
          </div>
          <div>
            <a href="#">
            <font-awesome-icon :icon="['fab','instagram']"/>
            </a>
          </div>
          <div>
            <a href="#">
            <font-awesome-icon :icon="['fab','twitter']"/>
            </a>
          </div>

        </div>
      </div>
      <div>
        اطلاعات
        <a href="#">
          <p>شرکت</p>
        </a>
        <a href="#">
          <p>فروشگاه</p>
        </a>
        <a href="#">
          <p>محصولات</p>
        </a>
        <a href="#">
          <p>صفحات</p>
        </a>
        <a href="#">
          <p>وبلاگ</p>
        </a>
        <a href="#">
          <p>قوانین</p>
        </a>

      </div>
      <div>
        محصولات
        <a href="#">
          <p>محصولات جدید</p>
        </a>
        <a href="#">
          <p>لباس </p>
        </a>
        <a href="#">
          <p>تجهیزات جانبی</p>
        </a>
        <a href="#">
          <p>جواهرفروشی</p>
        </a>
        <a href="#">
          <p>کفش </p>
        </a>
        <a href="#">
          <p>ساعت</p>
        </a>
      </div>


      <div>خدمات پس از فروش

        <a href="#">
          <p>خدمات مشتریان</p>
        </a>
        <a href="#">
          <p>وضعیت سفارش</p>
        </a>
        <a href="#">
          <p>حمل</p>
        </a>
        <a href="#">
          <p>برگشت و تعویض</p>
        </a>
        <a href="#">
          <p> ادرس فروشگاه</p>
        </a>
        <a href="#">
          <p>اپلیکیشن موبایل</p>
        </a>

      </div>
      <div>حساب کاربری
        <a href="#">
          <p>ورود/ ثبت نام </p>

        </a>
        <a href="#">
          <p>لیست علاقه مندی ها</p>
        </a>
        <a href="#">
          <p>تاریخچه سفارشات</p>
        </a>
        <a href="#">
          <p>پیگیری سفارش</p>
        </a>
        <a href="#">
          <p> کارت هدیه</p>
        </a>
      </div>

      <div></div>


    </div>

  </div>

</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>
  .footer-container {
    display: grid;
    grid-template-columns: 1fr;
    background-color: black;
    color: #888888;
    padding-top: 144px;
    border-top: 1px solid #e8e8e8;
    padding-bottom: 40px;
    row-gap: 300px;

  }

  .footer-subcribe {
    display: grid;
    grid-template-columns: 2fr 4fr 2fr;
  }

  .x {
    display: grid;
    align-content: center;
    grid-template-columns: 160px 100px 320px;
    grid-template-rows: 30px;
  }

  .text-area {
    text-align: left;
    box-sizing: border-box;
    border: 1px solid #2f2f2f;
    height: 41px;
    background-color: transparent;
    font-size: 17px;
    padding-left: 8px;
    color: white;


  }


  .submit {
    text-align: center;
    box-sizing: border-box;
    border: 1px solid transparent;
    background-color: #222222;
    height: 41px;
    text-transform: uppercase;
    color: #ffffff;
    font-size: 17px;
    font-family: vasir;
  }


  .footer-links {
    text-align: right;
    display: grid;
    grid-template-columns: 1.5fr 2fr 1fr 1.5fr 1.5fr 1fr 1fr;
    grid-template-rows: auto;
    font-family: vasir;

  }

  .footer-links > div {
    color: #ffffff;
  }
  .footer-links > div>p {
    color: #888888;
  }

  .footer-links > div > a {
    color: #888888;

  }

  a:link {
    text-decoration: none;
  }

  a > p:hover {
    color: #ffffff;
  }
  .social-media{
    display: grid;
    grid-template-columns: 0.2fr 0.2fr 0.2fr 0.2fr  1fr;

  }
  .social-media>div>a{
    color: #888888;
  }
</style>
