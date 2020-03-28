<template>
  <header class="bg-theme">
    <div class="wrap-header zerogrid">
      <div class="row">
        <div id="cssmenu">
          <ul>
            <li class="active">
              <router-link to="/home" target="a">Home</router-link>
            </li>
            <li>
              <router-link to="/Featured" target="a">Products</router-link>
            </li>
            <li>
              <router-link to="/About" target="a">About</router-link>
            </li>
            <li>
              <router-link to="/contact" target="a">contact</router-link>
            </li>
          </ul>
        </div>
        <div class="logo" style="float:left;margin-left: 40px;">
          
            <img src="../assets/images/logo.png" style="vertical-align: middle;"/>
          
          <span style="vertical-align: middle;margin-left:20px;color:#fff;font-size:24px;">名邦贸易</span>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {};
</script>

<style scoped>
header .logo {
  white-space: nowrap;
}
header .logo img {
    display: inline-block;
    margin: auto;
    padding: 10px;
    max-width: 130px;
}

@media all and (max-width: 768px) {
    
    /* header .logo img {
        display: block;
    } */
}
</style>