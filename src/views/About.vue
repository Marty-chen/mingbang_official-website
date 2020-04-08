<template>
  <div class="about">
    <div class="banner_img">
      <img :src="list.introductionImg" alt="">
    </div>
    <!-- <div class="title">{{list.name}}</div> -->

    <div class="ql-container ql-snow">
      <div class="ql-editor">
         <div v-html="list.introduction">{{list.introduction}}}</div>
     </div>
</div>

    <!-- <div class="company" v-html="list.introduction"></div> -->
  </div>
</template>

<script>
export default {
   data() {
    return {
      list: ''
    }
  },
   methods: {
    //获取关于我们数据
    async getHeaderFooter() {
     const { data } = await this.$http.post("/api/usr/cor/detail.pub");
     if(data.code !== "0000") return this.$message.error("请求数据失败")
     this.list = data.data;
    }
  },
  created() {
    this.getHeaderFooter()
  }
}
</script>

<style scoped>
  .title {
    font-size: 48px;
    font-weight: bold;
    text-align: center;
    margin: 80px;
  }
  .company {
    padding: 0 30px;
  }
  .banner_img img {
    width: 100%;
  }
  .ql-container.ql-snow {
    border: none;
    padding: 30px 80px;
  }
</style>