<template>
  <section id="container">
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
                <div class="wrap-col" style="margin-left: 40px">
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
              <div class="col-1-3">
                <div class="wrap-col" style="text-align: left; margin-left: 150px">
                  <p class="price">￥78,340</p>
                  <ul class="specs">
                    <li style="margin: 50px 0 20px 0">
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

    <div class="wrap-box" style="background: #fff; ">
      <!--Start Box-->
      <div class="zerogrid">
        <div class="row">
          <div class="col-2-3">
            <div class="wrap-col" style="margin-left: 40px">
              <div class="header">
                <h4>PRODUCT DETAILS</h4>
              </div>
              <div class="product_img">
                <img src="../assets/images/product-slide1.jpg" alt="">
                <img src="../assets/images/product-slide2.jpg" alt="">
              </div>
            </div>
          </div>
          <div class="col-1-3">
            <div class="wrap-col" style="text-align: center;">
              <div class="header" style="margin-top: 150px">
                <h5 style="color: #999">—— RECOMMENDATION ——</h5>
              </div>
              <div class="recommen">
                <!--  -->
                <div class="recommen_content" :style="'top:'+remcom_top+'px'">
                  <div v-for="item in 6" :key="item" class="recommen_item">
                  <img src="../assets/images/product-slide2.jpg" alt="">
                  <div class="recomment_msk">
                    $78,400
                  </div>
                </div>

               

                </div>
              </div>

              <div class="arow_icon">
                <el-button @click="handleNext" class="el-icon-arrow-down"></el-button>
                <el-button @click="handleBack" class="el-icon-arrow-up"></el-button>
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
      ],
      remcom_top: 0
    };
  },
  methods: {
    handleNext() {
      this.remcom_top -=280
    },
    handleBack() {
      this.remcom_top +=280
    }
  }
};
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
  margin-bottom: 7px;
}
.specs li span {
  text-align: center;
  margin-left: 50px;
}

.header {
  margin: 100px 0 30px 0;
}
.product_img {
  width: 100%;
}
.product_img img {
  width: 100%;
}

.recommen {
  width: 400px;
  height: 1100px;
  overflow: hidden;
  display: inline-block;
  position: relative;
}
.recommen_content {
  position: absolute;
  top: 0px;
  left: 0;
}
.recommen .recommen_item {
  width: 400px;
  overflow: hidden;
  position: relative;
 margin-bottom: 30px;
}
.recommen .recommen_item img {
  width: 100%;
  height: 250px;
}
.recomment_msk {
  width: 100%;
  height: 68px;
  line-height: 68px;
  font-size: 36px;
  font-weight: bold;
  color: #fff;
  background-color: rgba(45,136,207,.5);
  position: absolute;
  bottom: 0px;
  left: 0;
}

.arow_icon {
  font-size: 40px;
  color: #b7b4b8;
  margin-top: 30px;
  font-weight: bold;
  cursor: pointer;
}
.arow_icon el-button:first-child{
  margin-right: 70px;
}
</style>