<template>
  <div class="nav clearfix">
    <div class="menu">
      <ul>
        <li>
          <router-link to="/home">HOME</router-link>
        </li>
        <li class="products">
          <router-link to="/Featured">PRODUCTS</router-link>
          <ul class="pro-classify">
            <li>
              <router-link to="/Featured" target="a">PRODUCT LIST</router-link>
            </li>
            <li>
              <router-link to="/HotSale" target="a">HOT SALE</router-link>
            </li>
            <li>
              <router-link to="/SalesPromotion" target="a">SALES PROMOTION</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/About">ABOUT</router-link>
        </li>
        <li>
          <router-link :to="{path:'/contact',query:{addressImg:list.addressImg}}">CONTACT</router-link>
        </li>
      </ul>
    </div>
    <div class="logo" style="float:left;margin-left: 40px;">
      <img :src="list.logo" style="vertical-align: middle;" />

      <span
        style="vertical-align: middle;margin-left:20px;color:#fff;font-size:24px;"
      >{{list.abbreviation}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["list"]
};
</script>

<style scoped>
.nav {
  background-color: #2d88cf;
}
.menu {
  float: right;
  margin-right: 30px;
  height: 100%;
}

.menu ul li {
  float: left;
  height: 70px;
  line-height: 70px;

  padding: 0 20px;
}
.menu ul li:hover {
  background-color: #001e35;
}
.menu ul li a {
  color: #fff;
  text-decoration: none;
}

.logo img {
  display: inline-block;
  padding: 10px;
  height: 70px;
}
.products {
  position: relative;
}
.products .pro-classify {
  background-color: #001e35;
  font-size: 12px;
  width: 210px;
  position: absolute;
  left: 0;
  top: 70px;
  z-index: 1000;
  display: none;
}
.products:hover .pro-classify {
  display: block;
}
</style>