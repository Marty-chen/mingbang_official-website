<template>
  <div>
    <el-carousel height="41vw" :interval="4000" arrow="hover" indicator-position="none">
      <el-carousel-item v-for="(item,index) in swiper" :key="index">
        <img :src="item.img" class="swiper_img" alt />
      </el-carousel-item>
    </el-carousel>

    <div class="bg-theme">
      <div class="filter zerogrid">
        <h2 class="t-center" style="margin: 70px 0;">FIND MATERIAL THAT YOU LOVE</h2>
        <div class="row t-center">
          <div class="col-1-3 inb">
            <div class="wrap-col">
              <span>Categories :</span>
              <br />
              <select>
                <option>--ALL--</option>
                <option>Honda</option>
                <option>Infiniti</option>
                <option>Jeep</option>
                <option>Mercedes-Benz</option>
                <option>Volvo</option>
              </select>
            </div>
          </div>
          <div class="col-1-3 inb">
            <div class="wrap-col">
              <span>Texture :</span>
              <br />
              <select>
                <option>--ALL--</option>
                <option>Aston martin</option>
                <option>Audi</option>
                <option>Bentley</option>
                <option>Bmw</option>
                <option>Cadillac</option>
                <option>Chevrolet</option>
                <option>Citroen</option>
                <option>Dacia</option>
                <option>Dodge</option>
                <option>Ferrari</option>
                <option>Ford</option>
                <option>Gmc</option>
                <option>Hyundai</option>
                <option>Jaguar</option>
                <option>Lexus</option>
              </select>
            </div>
          </div>
          <!-- <div class="col-1-4">
            <div class="wrap-col">
              <span>Thickness :</span>
              <br />
              <select>
                <option>--ALL--</option>
                <option>0-1000</option>
                <option>1000-5000</option>
                <option>5000-10000</option>
              </select>
            </div>
          </div>-->
          <div class="col-1-6 inb">
            <div class="wrap-col">
              <br />
              <a href="#" class="button bt1">Search</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--////////////////////////////////////Container-->
    <section id="container" style="background-color:#fff;">
      <div class="wrap-container clearfix">
        <div id="main-content">
          <div class="wrap-box">
            <!--Start Box-->
            <div class="zerogrid">
              <div class="header" style="margin:30px 0">
                <h2>FEATURED MATERIAL</h2>
              </div>

              <div class="flex_waper">
                <div v-for="(item) in 6" :key="item" class="item t-center">
                  <div class="item-container">
                    <a href="single.html">
                      <div class="item-caption">
                        <div class="item-caption-inner">
                          <div class="item-caption-inner1">
                            <span>
                              2006 / 32,000 km / 250 HP / petrol / automatic /
                              Sports car/Coupe / Beige
                            </span>
                          </div>
                        </div>
                      </div>
                      <img src="../assets/images/car1.jpg" />
                    </a>
                  </div>
                  <div class="item-info">
                    <a href="single.html">
                      <h3>LAMBORGHINI GALLARDO</h3>
                    </a>
                    <p>32,000 km €78,400</p>
                  </div>
                </div>
              </div>

              <div class="more">MORE</div>
            </div>
          </div>

<!--工厂环境-->
          <div class="wrap-box t-center" style="background: #F7F7F7;">
            
            <div class="factory_environment t-center" style="background: #F7F7F7;">
              <el-carousel height="22vw" :interval="4000" arrow="never" type="card">
                <el-carousel-item v-for="(item,index) in factoryImg" :key="index">
                  <img :src="item.img" />
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>





     
          <div class="wrap-box">
            <!--Start Box-->
            <div class="zerogrid">
              <div class="header" style="margin:50px 0">
                <h2>HOT SALE</h2>
              </div>

              <div class="flex_waper">
                <div v-for="(item) in 4" :key="item" class="item t-center" style="width: 48%; height:360px; margin-bottom: 1%; overflow: hidden; background:#F7F7F7">
                  
                        <div class="col-2-3">
                          <div class="item-container">
                            <a href="single.html">
                              <div class="item-caption">
                                <div class="item-caption-inner">
                                  <div class="item-caption-inner1">
                                    <span>
                                      2006 / 32,000 km / 250 HP / petrol /
                                      automatic / Sports car/Coupe / Beige
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <img src="../assets/images/car7.jpg" />
                            </a>
                          </div>
                        </div>
                        <div class="col-1-3" style="background:#F7F7F7">
                          <div class="wrap-col">
                            <div class="item-info">
                              <a href="single.html">
                                <h3>LAMBORGHINI GALLARDO</h3>
                              </a>
                              <p>32,000 km €78,400</p>
                              <p>ABS, Leather seats, Power Assisted Steering, Electric heated seats, New HU and AU, Xenon headlights</p>
                            </div>
                          </div>
                        </div>
                        <div class="clear"></div>
                      
                  
                </div>
              </div>

              <div class="more">MORE</div>
            </div>
          </div>





          <div class="wrap-box">
            <!--Start Box-->
            <div class="zerogrid">
              <div class="header" style="margin-bottom:  50px">
                <h2>SALES PROMOTION</h2>
              </div>

              <div class="flex_waper">
                <div
                  v-for="(item) in 6"
                  :key="item"
                  class="t-center"
                  style="width:32%;margin-left: 1%;"
                >
                  <div class="promotion">
                    <div class="promotion_words">
                      <span>
                        2006 / 32,000 km / 250 HP / petrol /
                        automatic / Sports car/Coupe / Beige
                      </span>
                    </div>

                    <img src="../assets/images/car7.jpg" />
                  </div>
                </div>
              </div>

              <div class="more">MORE</div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  data() {
    return {
      swiper: [
        { img: require("../assets/images/slideshow-image1.jpg") },
        { img: require("../assets/images/slideshow-image2.jpg") },
        { img: require("../assets/images/slideshow-image3.jpg") }
      ],
      factoryImg: [
        { img: require("../assets/images/fat/f1.png") },
        { img: require("../assets/images/fat/f2.jpg") },
        { img: require("../assets/images/fat/f3.png") },
        { img: require("../assets/images/fat/f4.png") },
        { img: require("../assets/images/fat/f5.png") },
        { img: require("../assets/images/fat/f6.png") },
        { img: require("../assets/images/fat/f7.png") },
        { img: require("../assets/images/fat/f8.png") }
      ],
      preViewFactoryImg: []
    };
  }
};
</script>

<style scoped>
.swiper_img {
  width: 100vw;
  height: 41vw;
}

.row .inb {
  display: inline-block;
}
.flex_waper {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-around; */
  
}
.flex_waper .item {
  width: 32%;
  margin:0 0 1%  1%;
}
.more {
  width: 120px;
  height: 36px;
  line-height: 36px;
  background-color: #2d88cf;
  color: #fff;
  font-size: 16px;
  border-radius: 2px;
  margin: 30px auto 50px auto;
}

.factory_environment {
  width: 90%;
  display: inline-block;
}
.promotion {
  position: relative;
  /* width: 100%;
  overflow: hidden; */
  margin-bottom: 3%;
}
.promotion img {
  width: 100%;
}
.promotion_words {
  position: absolute;
  bottom: 0;
  left: 0;
  /* right: 0; */
  width: 100%;
  height: 128px;
  line-height: 128px;
  background-color: rgba(45,136,207,.3);
  color: #fff;
  font-size: 12px;
}
</style>
