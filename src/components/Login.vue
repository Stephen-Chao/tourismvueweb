<template>
  <div>
    <div class="outer_label">
      <img class="inner_label login_logo" src="../assets/logo.png" >
    </div>
    <div class="login_form">
      <input type="text"  class="qxs-ic_user qxs-icon"  placeholder="Username" v-model="userName">
      <input type="password"  class="qxs-ic_password qxs-icon"  placeholder="Password" v-model="password">
      <!--<button class="login_btn el-button el-button&#45;&#45;primary is-round" type="primary" round>登录</button>-->
      <b-nav-item to ="/#"><el-button class="login_btn" @click.native="login" type="primary" round :loading="isBtnLoading">Login</el-button></b-nav-item>>
      <div style="margin-top: 10px">
        <b-nav-item to ="/loginwithemail"><span style="float: left;color: #000099;" @click="login">Login with Email</span></b-nav-item><span style="float: right;color: #A9A9AB">Forget Password</span>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import LoginService from '@/service/userservice'
import Vue from 'vue'
export default {
  data () {
    return {
      userName: '',
      password: '',
      isBtnLoading: false
    }
  },
  created () {
    if (JSON.parse( localStorage.getItem('user')) && JSON.parse( localStorage.getItem('user')).userName){
      this.userName = JSON.parse( localStorage.getItem('user')).userName;
      this.password = JSON.parse( localStorage.getItem('user')).password;
    }
  },
  computed: {
    btnText () {
      if (this.isBtnLoading) return '登录中...';
      return '登录';
    }
  },
  methods: {
    login () {
      if (!this.userName) {
        this.$message.error('Please enter username');
        return;
      }
      if (!this.password) {
        this.$message.error('Please enter password');
        return;
      }
      this.$http.post('/login/username', {username: this.username, password: this.password })
        .then(res => {
          console.log(res)
          if (!res.data.success) {
            this.message = res.data.message
          } else {
            bus.$emit('login', { data: res.data.user })
            this.$router.push('/')
          }
        })
    }
  }
}
</script>
<style>
  .login_form {
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
  }
  .qxs-ic_user {
    background: url("../assets/login/ic_user.png") no-repeat;
    background-size: 13px 15px;
    background-position: 3%;
  }
  .qxs-ic_password {
    background: url("../assets/login/ic_password.png") no-repeat;
    background-size: 13px 15px;
    background-position: 3%;
    margin-bottom: 20px;
  }
  .login_logo {
    height: 100%;
  }
  .login_btn {
    width: 40%;
    font-size: 16px;
    background: -webkit-linear-gradient(left, #0d6f99, #04996f); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right,#0d6f99, #04996f); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right,#0d6f99,#04996f); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right,#0d6f99, #04996f); /* 标准的语法 */
    filter: brightness(1.2);
  }
</style>
