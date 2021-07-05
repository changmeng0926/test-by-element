<template>
  <div class="login-container">
    <div class="content">
      <div class="login-title">登录页面</div>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="用户名称" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passWords">
          <el-input type="password" v-model="form.passWords" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div class="login-foot">
        <el-button type="primary" @click="login">提交</el-button>
        <el-link class="link" @click.prevent="touristLogin" type="info">游客登录</el-link>
      </div>
    </div>
  </div>
</template>

<script>
const validateName = (rule, value, callback) => {
  if (value !== '小碎月儿') {
    callback(new Error('该用户不存在!'));
  } else {
    callback();
  }
};
const validatePassWords = (rule, value, callback) => {
  if (value !== '127843') {
    callback(new Error('密码错误!'));
  } else {
    callback();
  }
};
export default {
  name: 'Login',
  data () {
    return {
      form: {
        name: '',
        passWords: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { validator: validateName, trigger: 'blur' }
        ],
        passWords: [
          { required: true, message: '请输入密码', },
          { validator: validatePassWords, trigger: 'blur' }
        ]
      },
    }
  },
  watch: {},
  computed: {},
  created () { },
  mounted () { },
  methods: {
    login () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$store.commit('SET_USER', { name: this.form.name, limit: 'supperAdmin' })
          this.$router.push({ path: '/home' })
        } else {
          return false
        }
      });
    },
    touristLogin () {
      console.log(this.$route);
      this.$store.commit('SET_TOURIST', { name: '游客', limit: 'tourist' })
      this.$router.push({ path: '/home' })
    },
  }
}
</script>

<style lang="less" scoped>
.login-container {
  width: 100%;
  height: 100%;
  background: #0091e6;
  position: relative;
}
.content {
  padding: 2.5rem;
  background: #fff;
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.login-title {
  font-size: 1.5em;
  padding-bottom: 28px;
  color: #0091e6;
  text-align: center;
}
.login-foot {
  position: relative;
  width: 70px;
  margin: auto;
  .link {
    position: absolute;
    right: -70px;
    transform: translate(0, -50%);
    top: 50%;
    font-size: 12px;
  }
}
</style>