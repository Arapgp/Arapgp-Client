<template>
  <div class="login-container">
    <div class="login-box">
      <div class="avatar_box">
        <img src="../assets/logo.png">
        <h1>AraPGP</h1>
      </div>
      <el-form ref="loginForm" :model="loginForm" :rules="loginFormRules" class="login-form">
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="el-icon-user-solid"
            placeholder="username"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="el-icon-lock"
            type="password"
            placeholder="password"
          />
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="primary" @click="goSignUp">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginFormRules: {
        username: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 5, max: 15, message: '长度在 5 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    async login () {
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          try {
            await this.$store.dispatch('login', {
              username: this.loginForm.username,
              password: this.loginForm.password
            })
            this.$notify({
              message: this.$createElement(
                'i',
                { style: 'color: teal;' },
                '登陆成功'
              ),
              duration: 800
            })
            this.$router.push({ name: 'PGP' })
          } catch (e) {
            this.$notify({
              title: 'Error!',
              message: this.$createElement(
                'i',
                { style: 'color: red;' },
                e.toString()
              )
            })
          }
        }
      })
    },
    async goSignUp () {
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          try {
            await this.$store.dispatch('signup', {
              username: this.loginForm.username,
              password: this.loginForm.password
            })
            this.$notify({
              message: this.$createElement(
                'i',
                { style: 'color: teal;' },
                '注册成功'
              ),
              duration: 1000
            })
          } catch (e) {
            this.$notify({
              title: 'Error!',
              message: this.$createElement(
                'i',
                { style: 'color: red;' },
                e.toString()
              )
            })
          }
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login-container{
  background-color: #CEE7E9;
  height: 100%;
}
.login-box{
  width: 600px;
  height: 400px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .avatar_box{
  height: 120px;
  width: 120px;
  border: 5px solid #fff;
  border-radius: 50%;
  padding: 2px;
  box-shadow: 0 0 10px #fff;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #fff;
  }
  }
}
.login-form {
  position: absolute;
  bottom: 20%;
  width: 100%;
  padding: 0 60px;
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
