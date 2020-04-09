<template>
  <div class="wrap-box">
    <!--Start Box-->
    <div class="zerogrid">
      <div class="header" style="margin: 70px 0 50px 0; font-size:48px">
        <h2>SALES PROMOTION</h2>
      </div>

      <div class="flex_waper">
        <!-- <div
          v-for="(item) in dataList"
          :key="item.gdsId"
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
        </div>-->
        <div
          @click="toGdsDetail(item.gdsId)"
          v-for="item in dataList"
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
        type: 1
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
    /***********分页 */
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
      console.log(id);
      this.$router.push({
        path: "/Product_detail",
        query: {
          gdsId: id
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
.flex_waper {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-around; */
}
.flex_waper .item {
  width: 32%;
  margin: 0 0 1% 1%;
}
.promotion {
  position: relative;
  margin-bottom: 3%;
}
.promotion img {
  width: 100%;
  /* height: 350px; */
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

</style>