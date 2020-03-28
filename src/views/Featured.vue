<template>
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

              
            </div>
          </div>
          
        </div>
      </div>
    </section>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.flex_waper {
  display: flex;
  flex-wrap: wrap;
}
.flex_waper .item {
  width: 32%;
  margin:0 0 1%  1%;
}
  
</style>