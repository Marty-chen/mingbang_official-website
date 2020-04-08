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
              <h1>{{goodsVO.name}}</h1>
            </div>
            <div class="row">
              <div class="col-2-3">
                <div class="wrap-col" style="margin-left: 40px">
                  <img :src="goodsVO.img" alt />
                </div>
              </div>
              <div class="col-1-3">
                <div class="wrap-col" style="text-align: left; margin-left: 150px">
                  <p class="price">$ {{goodsVO.price}}</p>
                  <ul class="specs">
                    <li style="margin: 50px 0 20px 0">
                      <strong style="font-size:24px;font-weight: bold;">CATEGORIES</strong>
                      <span style="font-size:24px;font-weight: bold;margin: 0">PARAMETER</span>
                    </li>
                    <li>
                      <strong>Model Number</strong>
                      <span>{{goodsVO.modelNumber}}</span>
                    </li>
                    <li>
                      <strong>Texture</strong>
                      <span>{{goodsVO.texture}}</span>
                    </li>
                    <li>
                      <strong>Thickness</strong>
                      <span>{{goodsVO.thickness}}</span>
                    </li>
                    <li>
                      <strong>Width</strong>
                      <span>{{goodsVO.width}}</span>
                    </li>
                    <li>
                      <strong>Color</strong>
                      <span>{{goodsVO.color}}</span>
                    </li>
                    <li>
                      <strong>Feature</strong>
                      <span>{{goodsVO.feature}}</span>
                    </li>
                    <li>
                      <strong>Backing</strong>
                      <span>{{goodsVO.backing}}</span>
                    </li>
                    <li>
                      <strong>Composition</strong>
                      <span>{{goodsVO.composition}}</span>
                    </li>
                    <li>
                      <strong>Weight</strong>
                      <span>{{goodsVO.weight}}</span>
                    </li>
                    <li>
                      <strong>MOQ</strong>
                      <span>{{goodsVO.moq}}</span>
                    </li>
                    <li>
                      <strong>Use</strong>
                      <span>{{goodsVO.purpose}}</span>
                    </li>
                    <li>
                      <strong>Packing</strong>
                      <span>{{goodsVO.packing}}</span>
                    </li>
                    <li>
                      <strong>Port</strong>
                      <span>{{goodsVO.port}}</span>
                    </li>
                    <li>
                      <strong>Delivery time</strong>
                      <span>{{goodsVO.deliveryTime}}</span>
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
                <img v-for="item in detailImgs" :key="item.img" :src="item" alt />
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
                  <div
                    @click="handleToDetai(item.gdsId)"
                    v-for="item in goodsVOS"
                    :key="item.img"
                    class="recommen_item"
                  >
                    <img :src="item.img" alt />
                    <div class="recomment_msk">$ {{item.price}}</div>
                  </div>
                </div>
              </div>

              <div v-if="goodsVOS.length>5" class="arow_icon">
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
      gdsId: "",
      goodsVO: "",
      detailImgs: "",
      goodsVOS: "", //推荐商品
      remcom_top: 0
    };
  },
  methods: {
    handleNext() {
      let len = this.goodsVOS.length;
      if (this.remcom_top < (len - 5) * -260) return;
      this.remcom_top -= 260;
    },
    handleBack() {
      if (this.remcom_top == 0) return;
      this.remcom_top += 260;
    },
    handleToDetai(id) {
      this.gdsId = id;
      this.detailList();
      window.scrollTo(0, 0);
      
    },
    //获取关于我们数据
    async detailList() {
      const { data } = await this.$http.post("/api/gds/detail.pub", this.gdsId);
      if (data.code !== "0000") return this.$message.error("请求数据失败");
      this.goodsVO = data.data.goodsVO;
      this.detailImgs = data.data.files;
      this.goodsVOS = data.data.goodsVOS;
    }
  },
  created() {
    // console.log("接收过来的值为：" + this.$route.query.gdsId);
    this.gdsId = this.$route.query.gdsId;
    this.detailList();
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
  height: 1040px;
  overflow: hidden;
  display: inline-block;
  position: relative;
  margin-top: 50px;
  /* overflow-y:scroll; */
}
.recommen_content {
  position: absolute;
  top: 0px;
  left: 0;
}
.recommen .recommen_item {
  width: 400px;
  height: 250px;
  overflow: hidden;
  position: relative;
  margin-bottom: 10px;
  cursor: pointer;
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
  background-color: rgba(45, 136, 207, 0.5);
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
.arow_icon el-button:first-child {
  margin-right: 70px;
}
</style>