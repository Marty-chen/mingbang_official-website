<template>
  <div id="app">
    <Header :list="headerFooterList" />
    <router-view/>
    <Footer :list="headerFooterList"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: "Home",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      headerFooterList: ''
    }
  },
   methods: {
    //获取顶部和底部数据
     getHeaderFooter() {
      this.$http.post("/api/usr/cor/detail.pub").then(data=>{
       if(data.data.code !== "0000") return this.$message.error("请求数据失败")
     this.headerFooterList = data.data.data
     })
     
    }
  },
  created() {
    this.getHeaderFooter()
  }
};
</script>

<style>
html::-webkit-scrollbar {
  display: none;
}

</style>
