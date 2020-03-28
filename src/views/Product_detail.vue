<template>
  <section id="container">
    <div class>
      <div class="wrap-container clearfix">
        <div id="main-content">
          <div
            class="wrap-box"
            style="background: #fff; box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.3);"
          >
            <!--Start Box-->
            <div class="zerogrid">
              <div class="header">
                <h1>FERRARI CALIFORNIA</h1>
              </div>
              <div class="row">
                <div class="col-2-3">
                  <div class="wrap-col" style="margin-left: 10px">
                    <el-carousel
                      height="700px"
                      :interval="4000"
                      arrow="hover"
                      indicator-position="none"
                    >
                      <el-carousel-item v-for="(item,index) in swiper" :key="index">
                        <img :src="item.img" class="swiper_img" alt />
                      </el-carousel-item>
                    </el-carousel>
                  </div>
                </div>
                <div class="col-1-3" >
                  <div class="wrap-col" style="text-align: left; margin-left: 150px">
                    <p class="price">￥78,340</p>
                    <ul class="specs" >
                      <li style="margin: 80px 0 30px 0">
                        <strong style="font-size:24px;font-weight: bold;">CATEGORIES</strong>
                        <span style="font-size:24px;font-weight: bold;margin: 0">PARAMETER</span>
                      </li>
                      <li>
                        <strong>Model Number</strong>
                        <span>12</span>
                      </li>
                      <li>
                        <strong>Texture</strong>
                        <span>12</span>
                      </li>
                      <li>
                        <strong>Thickness</strong>
                        <span>12</span>
                      </li>
                      <li>
                        <strong>Width</strong>
                        <span>12</span>
                      </li>
                      <li>
                        <strong>Color</strong>
                        <span>12</span>
                      </li>
                      <li>
                        <strong>Feature</strong>
                        <span>12</span>
                      </li>
                      <li>
                        <strong>Backing</strong>
                        <span>12</span>
                      </li>
                      <li>
                        <strong>Composition</strong>
                        <span>12</span>
                      </li>
                      <li>
                        <strong>Weight</strong>
                        <span>12</span>
                      </li>
                      <li>
                        <strong>MOQ</strong>
                        <span>12</span>
                      </li>
                      <li>
                        <strong>Use</strong>
                        <span>12</span>
                      </li>
                      <li>
                        <strong>Packing</strong>
                        <span>12</span>
                      </li>
                      <li>
                        <strong>Port</strong>
                        <span>12</span>
                      </li>
                      <li>
                        <strong>Delivery time</strong>
                        <span>12</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      swiper: [
        { img: require("../assets/images/product-slide1.jpg") },
        { img: require("../assets/images/product-slide2.jpg") },
        { img: require("../assets/images/slideshow-image3.jpg") }
      ]
    }
  }
}
</script>


<style scoped>
#container {
  min-width: 1400px;
}
  .swiper_img {
  width: 100%;
  height: 700px;
}
.specs li {
  margin-bottom: 10px;
  
}
.specs li span {
  text-align: center;
  margin-left: 50px;
}
</style>