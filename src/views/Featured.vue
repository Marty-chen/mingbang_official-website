<template>
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
              <div @click="toGdsDetail(item.gdsId)" v-for="item in dataList" :key="item.gdsId" class="item t-center">
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
                  <h3 style="margin-bottom:10px;">${{item.price}}</h3>
                  <h5>{{item.name}}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="parm.current"
        :page-sizes="[9, 15, 20, 30]"
        :page-size="parm.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      dataList: [],
      parm: {
        current: 1,
        size: 9
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
}
.flex_waper .item {
  width: 32%;
  margin: 0 0 1% 1%;
}
.item img{
  width: 100%;
  height: 21vw;
  min-height: 200px;
}
</style>