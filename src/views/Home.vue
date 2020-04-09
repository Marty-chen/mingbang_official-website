<template>
  <div class="home">
    <el-carousel height="41vw" :interval="4000" arrow="hover" indicator-position="none">
      <el-carousel-item v-for="(item,index) in swiper" :key="index">
        <img :src="item.img" class="swiper_img" alt />
      </el-carousel-item>
    </el-carousel>

    <div class="bg-theme">
      <div class="filter zerogrid">
        <h2 class="t-center" style="margin: 70px 0 30px 0;">FIND MATERIAL THAT YOU LOVE</h2>
        <div class="searchBox">
          <el-cascader
            class="cascader"
            placeholder="please choose"
            clearable
            :options="cascaderList"
            :props="cascProps"
            @change="handleChange"
          ></el-cascader>

          <el-button @click="handleSearch" class="el-icon-search"></el-button>
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
                <h2>PRODUCT LIST</h2>
              </div>

              <div class="flex_waper">
                <div
                  @click="toGdsDetail(item.gdsId)"
                  v-for="item in featuredList"
                  :key="item.img"
                  class="item t-center"
                >
                  <div class="item-container">
                    <div class="item-caption">
                      <div class="item-caption-inner">
                        <div class="item-caption-inner1">
                          <span>{{item.gdsFeature}}</span>
                        </div>
                      </div>
                    </div>
                    <img :src="item.img" />
                  </div>
                  <div class="item-info">
                    <h5 style="margin-bottom: 10px">${{item.price}}</h5>
                    <h3>{{item.name}}</h3>
                  </div>
                </div>
                <div v-if="!featuredList[0]" class="searchNothing">
                  <h3>This category has Nothing!</h3>
                </div>
              </div>

              <div class="more">
                <router-link to="/Featured" target="a">
                  MORE
                  <i class="el-icon-d-arrow-right"></i>
                </router-link>
              </div>
            </div>
          </div>

          <!--工厂环境-->
          <div class="wrap-box t-center" style="background: #F7F7F7;">
            <div class="factory_environment t-center" style="background: #F7F7F7;">
              <el-carousel :interval="2000" arrow="never" indicator-position="none" type="card">
                <el-carousel-item v-for="(item,index) in factoryImg" :key="index">
                  <img :src="item" />
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>

          <div class="hot_sale">
            <div class="top_title">
              <h2>HOT SALE</h2>
            </div>
            <!-- <router-link to="/Product_detail" > -->
            <div class="flex_hot_waper">
              <div
                @click="toGdsDetail(item.gdsId)"
                v-for="item in hotSaleList"
                :key="item.img"
                class="item"
              >
                <div class="left_box item-container">
                  <div class="item-caption">
                    <div class="item-caption-inner">
                      <div class="item-caption-inner1">
                        <span>{{item.gdsFeature}}</span>
                      </div>
                    </div>
                  </div>
                  <img :src="item.img" />
                </div>
                <div class="right_box">
                  <div>
                    <div class="price">${{item.price}}</div>
                    <div class="title">{{item.name}}</div>
                  </div>
                  <!-- <div
                    class="worlds"
                  >{{item.gdsFeature}}</div>-->
                </div>
              </div>
            </div>
            <!-- </router-link> -->
            <div class="more">
              <router-link to="/HotSale" target="a">
                MORE
                <i class="el-icon-d-arrow-right"></i>
              </router-link>
            </div>
          </div>

          <div class="wrap-box">
            <div class="zerogrid">
              <div class="header" style="margin-bottom:  50px">
                <h2>SALES PROMOTION</h2>
              </div>

              <div class="flex_waper">
                <div
                  @click="toGdsDetail(item.gdsId)"
                  v-for="item in salesList"
                  :key="item.cateId"
                  class="t-center"
                  style="width:32%;margin-left: 1%;"
                >
                  <div class="promotion">
                    <div class="promotion_words">
                      <h3>${{item.price}}</h3>
                      <div>{{item.name}}</div>
                    </div>

                    <img :src="item.img" />
                  </div>
                </div>
              </div>

              <div class="more">
                <router-link to="/SalesPromotion" target="a">
                  MORE
                  <i class="el-icon-d-arrow-right"></i>
                </router-link>
              </div>
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
      cateId: "",
      cascaderList: [],
      cascProps: {
        expandTrigger: "hover",
        value: "cateId",
        label: "name",
        children: "children"
      },
      featuredList: [],
      hotSaleList: [],
      swiper: [],
      factoryImg: [],
      salesList: []
    };
  },
  methods: {
    //下啦选择
    handleChange(e) {
      // console.log(e);
      if (e.length < 2) {
        this.cateId = "";
        this.getFeatured();
        return;
      }
      this.cateId = e[1];
    },
    //搜索
    handleSearch() {
      if (!this.cateId) return this.$message.error("Please select category!");
      this.getFeatured();
    },
    //去详情页
    toGdsDetail(id) {
      this.$router.push({
        path: "/Product_detail",
        query: {
          gdsId: id
        }
      });
    },
    // 获取首页数据
    async getHomeList() {
      const { data } = await this.$http.post("/api/home/list.pub");
      if (data.code !== "0000") return this.$message.error("请求数据失败");
      this.swiper = data.data.bannerVOS;
      this.factoryImg = data.data.cor;
      this.hotSaleList = data.data.hot;
      this.salesList = data.data.sales;
    },
    //获取分类列表
    async getCascader() {
      const { data } = await this.$http.post("/api/home/cate.pub");
      if (data.code !== "0000") return this.$message.error("请求数据失败");
      this.cascaderList = data.data;
      this.cascaderList.forEach(item => {
        item.children.forEach(i => {
          delete i.children;
        });
      });
    },
    //获取FEATURED MATERIAL 数据
    async getFeatured() {
      const { data } = await this.$http.post(
        "/api/home/featured.pub",
        this.cateId
      );
      if (data.code !== "0000") return this.$message.error("请求数据失败");
      this.featuredList = data.data;
    }
  },
  created() {
    this.getHomeList();
    this.getCascader();
    this.getFeatured();
  }
};
</script>

<style scoped>
.home {
  width: 100%;
}
.swiper_img {
  width: 100vw;
  height: 41vw;
  font-weight: bold;
}

.row .inb {
  display: inline-block;
}
.flex_waper {
  display: flex;
  flex-wrap: wrap;
}
.flex_waper .item {
  width: 32%;
  margin: 0 0 1% 1%;
}
.more {
  text-align: center;
  width: 120px;
  height: 36px;
  line-height: 36px;
  background-color: #2d88cf;
  color: #fff;
  font-size: 16px;
  border-radius: 2px;
  margin: 30px auto 50px auto;
  cursor: pointer;
}
.more a {
  color: #fff;
  text-decoration: none;
}
.factory_environment {
  width: 90%;
  display: inline-block;
}
.promotion {
  position: relative;
  margin-bottom: 3%;
}
.promotion img {
  width: 100%;
}
.promotion_words {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 128px;
  background-color: rgba(45, 136, 207, 0.3);
  color: #fff;
  font-size: 12px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
}
.promotion_words h3 {
  margin-bottom: 10px;
}

.top_title {
  text-align: center;

  margin: 100px 0 50px;
}

.hot_sale .flex_hot_waper {
  display: flex;
  flex-wrap: wrap;
}
.hot_sale .flex_hot_waper .item {
  width: 47%;
  /* height: 18.75vw; */
  margin: 0 0 1.5% 1.5%;
  background-color: #f7f7f7;
}

.hot_sale .flex_hot_waper .item .left_box {
  display: inline-block;
  width: 65%;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  position: relative;
  overflow: hidden;
  display: inline-block;
  text-align: center;
  vertical-align: top;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.hot_sale .flex_hot_waper .item .left_box img {
  width: 100%;
  height: 20vw;
  min-height: 200px;
}

.hot_sale .flex_hot_waper .item .item-container .item-caption {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  padding: 10px;
  background: none;
  width: 100%;
  height: 100%;
  -webkit-transition: all 0.5s ease;
  /* Safari and
Chrome */
  -moz-transition: all 0.5s ease;
  /* Firefox */
  -ms-transition: all 0.5s ease;
  /* IE 9 */
  -o-transition: all 0.5s ease;
  /* Opera */
  transition: all 0.5s ease;
}

.item .item-caption-inner {
  display: table;
  width: 100%;
  height: 100%;
}

.item .item-caption-inner1 {
  display: table-cell;
  width: 100%;
  height: 100%;
  vertical-align: middle;
}

.item-container .item-caption h3,
.item-container .item-caption span {
  display: block;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  display: none;
}

.item-container .item-caption h3 {
  font-size: 23px;
  letter-spacing: 2px;
  margin-bottom: 12px;
}

.item-container .item-caption span {
  font-style: italic;
  font-size: 12px;
}

.item .item-container:before {
  content: "";
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(32, 152, 209, 0.7);
  -webkit-transform: scaleY(0);
  transform: scaleY(0);
  -webkit-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}

.item:hover {
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.3);
}

.item:hover .item-container:before {
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
}

.item:hover .item-container .item-caption span {
  display: block;
}

.right_box {
  width: 35%;
  height: 100%;
  display: inline-flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-around;
}
.right_box .title {
  font-size: 18px;
  font-weight: bold;
}
.right_box .price {
  font-size: 24px;
  color: #333;
  margin-bottom: 30px;
}
.right_box .worlds {
  font-size: 14px;
  color: #666;
  padding: 0 20px;
}
.searchBox {
  /* float: right;
  margin: 20px 50px 30px 0; */
  padding: 10px 0 40px 0;
}
.cascader {
  width: 400px;
  margin-right: 10px;
}
.el-icon-search {
  width: 80px;
  color: #fff;
  background-color: #da0505;
  font-size: 16px;
  font-weight: bold;
  border: none;
}
.searchNothing {
  text-align: center;
  width: 100%;
  margin: 100px;
  color: #999;
}
</style>
