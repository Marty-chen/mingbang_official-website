<template lang="">
<div>
  <section id="container">
    <div class="zerogrid">
      <div class="wrap-container clearfix">
        <div id="main-content">
          <div class="wrap-box">
            <!--Start Box-->
            <div class="header">
              <h1>Contact Us</h1>
              <p>
                Use the form below to get in touch with us. Share your specific requirements and we'll be happy to reply back shortly. You are also welcome to contact us via phone, emial or at our office during working hours.
              </p>
            </div>
            <div class="row">
              <div class='embed-container maps'>
                <div style="width:800px;height:600px;border:1px solid gray;margin:-5px auto" id="allmap"></div>
              </div>
              <div class="contact">
                <div class="contact-header">
                  <h5>Online Message</h5>
                </div>
                <div id="contact_form">

                  <el-form :rules="rules" label-width="150px" :model="message" ref="ruleForm">
                    <el-form-item label="HEADERLINE：">
                      <el-input v-model="message.headline" style="width: 600px;"/>
                    </el-form-item>
                    <el-form-item required label="NAME：" prop="name">
                      <el-input v-model="message.name" style="width: 600px;"/>
                    </el-form-item>
                    <el-form-item label="PHONE：">
                      <el-input v-model="message.phone" style="width: 600px;"/>
                    </el-form-item>
                    <el-form-item required label="E-MAIL：" prop="email">
                      <el-input v-model="message.email" style="width: 600px;"/>
                    </el-form-item>
                    <el-form-item required label="CONTENT：" prop="content">
                      <el-input v-model="message.content" style="width: 700px;" :autosize="{ minRows: 8, maxRows: 8}" type="textarea"></el-input>
                    </el-form-item>
                    <el-form-item >
                      <el-button class="submis_btn" type="primary">SUBMISSION</el-button>
                    </el-form-item>
                  </el-form>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  data() {
    return {
      message: {
        headline: "",
        name: "",
        phone: "",
        email: "",
        content: ""
      },
      rules: {
        name: [
          { required: true, message: "name is required", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "name must be between 3 and 10 characters",
            trigger: "blur"
          }
        ],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: "blur,change"
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
.header {
  padding: 0 100px;
}
.contact {
  width: 1200px;
  display: inline-block;
  margin-top: 100px;
}

#contact_form {
  text-align: left;
  font-size: 16px;
  color: #000;
}
.submis_btn {
  width: 160px;
  height: 60px;
  font-size: 18px;
  background-color: #2d88cf;
}
</style>
