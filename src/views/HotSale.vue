<template>
  <div class="hot_sale">
    <div class="top_title">HOT SALE</div>
    <div class="flex_hot_waper">
      <div @click="toGdsDetail(item.gdsId)" v-for="item in dataList" :key="item.gdsId" class="item">
        <div class="left_box item-container">
          <div class="item-caption">
            <div class="item-caption-inner">
              <div class="item-caption-inner1">
                <span>{{item.gdsFeature}}</span>
              </div>
            </div>
          </div>
          <img :src="item.img" alt />
        </div>
        <div class="right_box">
          <div>
            <div class="price">${{item.price}}</div>
            <div class="title">{{item.name}}</div>
          </div>
          <!-- <div
            class="worlds"
          >ABS, Auxiliary heating, Central locking, Cruise control, Electric heated</div>-->
        </div>
      </div>
    </div>
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="parm.current"
        :page-sizes="[8, 10, 20, 30]"
        :page-size="parm.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: [],
      parm: {
        current: 1,
        size: 8,
        type: 0
      },
      total: 0
    };
  },
  methods: {
    //获取顶部和底部数据
    async getDataList() {
      const { data } = await this.$http.post("/api/gds/list.pub", this.parm);
      if (data.code !== "0000") return this.$message.error("请求数据失败");
      this.dataList = data.data.records;
      this.total = +data.data.total;
    },
    handleSizeChange(e) {
      this.parm.size = e;
      this.getDataList();
    },
    handleCurrentChange(e) {
      this.parm.current = e;
      this.getDataList();
    },
    //去详情页
    toGdsDetail(id) {
      this.$router.push({
        path: "/Product_detail",
        query: {
          gdsId: id,
          tt: Date.parse(new Date())
        }
      });
    }
  },
  created() {
    this.getDataList();
  }
};
</script>

<style scoped>

.hot_sale {
  width: 100%;
  min-width: 900px;
  
}
.top_title {
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  margin: 100px 0 50px;
}
.hot_sale .flex_hot_waper {
  display: flex;
  flex-wrap: wrap;
}
.hot_sale .flex_hot_waper .item {
  width: 47%;
  
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
  height: 16.66vw;
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
  padding: 5px;
}
.right_box .title {
  font-size: 18px;
  font-weight: bold;
}
.right_box .price {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}
.right_box .worlds {
  font-size: 14px;
  color: #666;
  padding: 0 20px;
}
/* img{
  width: 100%;
  height: 300px;
} */
</style>