<template lang="">
<div class="wrap_box">
  <div class="header">
    <h1>CONTACT US</h1>
    <p>
      {{"Use the form below to get in touch with us. Share your specific requirements and we'll be happy to reply back shortly. You are also welcome to contact us via phone, emial or at our office during working hours.".toUpperCase()}}
    </p>
  </div>
  <div class='maps'>
    <img :src="addressImg" />
  </div>
  <div class="from">
    <h1>ONLINE MESSAGE</h1>
    <div>
      <el-form :rules="rules" label-width="150px" :model="message" ref="ruleForm">
        <el-form-item label="HEADERLINE：">
          <el-input v-model="message.subject" style="width: 700px;" />
        </el-form-item>
        <el-form-item required label="NAME：" prop="name">
          <el-input v-model="message.name" style="width: 700px;" />
        </el-form-item>
        <el-form-item label="PHONE：">
          <el-input v-model="message.phone" style="width: 700px;" />
        </el-form-item>
        <el-form-item required label="E-MAIL：" prop="email">
          <el-input v-model="message.email" style="width: 700px;" />
        </el-form-item>
        <el-form-item required label="CONTENT：" prop="content">
          <el-input v-model="message.content" style="width: 960px;" :autosize="{ minRows: 8, maxRows: 8}" type="textarea"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="submis" class="submis_btn" type="primary">SUBMISSION</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      addressImg: "",
      message: {
        subject: "",
        name: "",
        phone: "",
        email: "",
        content: ""
      },
      rules: {
        name: [{
            required: true,
            message: "name is required",
            trigger: "blur"
          },
          {
            min: 3,
            max: 10,
            message: "name must be between 3 and 10 characters",
            trigger: "blur"
          }
        ],
        email: [{
            required: true,
            message: "Please enter your email",
            trigger: "blur"
          },
          {
            type: "email",
            message: "Please enter the correct email",
            trigger: "blur,change"
          }
        ]
      }
    };
  },
  methods: {
    submis() {
      this.$refs.ruleForm.validate(async v => {
        console.log(v);
        if (!v) return;
        const {
          data
        } = await this.$http.post(
          "/api/message/save.pub",
          this.message
        );
        console.log(data);
        if (data.code !== "0000") return this.$message.error("submit failure");
        this.$message.success("submit successfully");
        this.$refs.ruleForm.resetFields();
        this.message.subject = "";
        this.message.phone = "";
      });
    }
  },
  created() {
    this.addressImg = this.$route.query.addressImg;
  }
};
</script>

<style scoped>
.wrap_box {
  text-align: center;
}

.header {
  padding: 50px 0 0 0;
}

.header p {
  padding: 40px 150px;
  font-size: 18px;
  line-height: 40px;
}

.from {
  margin: 100px 0;
  text-align: start;
  display: inline-block;
}
.from h1 {
  text-align: center;
  margin: 80px 0;
  font-size: 36px;
}

.submis_btn {
  width: 160px;
  height: 50px;
  font-size: 18px;
  background-color: #2d88cf;
}

.maps {
  width: 100%;
  padding: 0 50px;
}
</style>
