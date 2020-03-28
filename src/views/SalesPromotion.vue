<template>
   <div class="wrap-box">
            <!--Start Box-->
            <div class="zerogrid">
              <div class="header" style="margin: 70px 0 50px 0; font-size:48px">
                <h2>SALES PROMOTION</h2>
              </div>

              <div class="flex_waper">
                <div
                  v-for="(item) in 6"
                  :key="item"
                  class="t-center"
                  style="width:32%;margin-left: 1%;"
                >
                  <div class="promotion">
                    <div class="promotion_words">
                      <span>
                        2006 / 32,000 km / 250 HP / petrol /
                        automatic / Sports car/Coupe / Beige
                      </span>
                    </div>

                    <img src="../assets/images/car7.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
</template>

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
}
.promotion_words {
  position: absolute;
  bottom: 0;
  left: 0;
  /* right: 0; */
  width: 100%;
  height: 128px;
  line-height: 128px;
  background-color: rgba(45, 136, 207, 0.3);
  color: #fff;
  font-size: 12px;
}

</style>