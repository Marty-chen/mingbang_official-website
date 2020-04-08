<template>
  <footer>
    <div class="zerogrid">
      <div class="wrap-footer">
        <div class="row">
          <h3>CONTACT</h3>
          <div>PHONE / {{list.phone}}</div>
          <div>EMAIL / {{list.email}}</div>
          <div>{{list.address}}</div>
          <div>COPYRIGHT &copy; 2020 {{list.copyright}} All RIGHTS</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: ["list"]
}
</script>

<style scoped>
footer {
  background: #001e35;

  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.3);
  margin-top: 40px;
  text-align: center;
}

footer .wrap-footer {
  color: #fff;
  font-size: 18px;
  padding: 50px 0;
}

footer .wrap-footer h3 {
  margin-bottom: 40px;
  font-size: 48px;
}
footer .wrap-footer div {
  margin-top: 7px;
}
</style>