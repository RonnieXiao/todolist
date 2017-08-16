<template>
<div class="dialog">
  <div class="loginPage">
    <h1>登录</h1>
    <el-form>
      <el-form-item label="user">
        <el-input type="text" id="user" v-model="formName.user" @blur="inputBlur('user',formName.user)"></el-input>
        <p>{{formName.userError}}</p>
      </el-form-item>

      <el-form-item label="password">
        <el-input type="password" id="password" v-model="formName.password" @blur="inputBlur('password',formName.password)"></el-input>
        <p>{{formName.passwordError}}</p>
      </el-form-item>
      <el-button type="primary" @click="submitForm('formName')" v-bind:disabled="formName.beDisabled">提交</el-button>
      <el-button @click="resetForm">重置</el-button>
    </el-form>
  </div>
</div>
</template>
<style scoped>
  html,body{
    margin: 0;
    padding: 0;
    position: relative;
  }
  .dialog{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.8);
  }
  .loginPage{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -150px;
    margin-left: -175px;
    width: 350px;
    min-height: 300px;
    padding: 30px 20px 20px;
    border-radius: 8px;
    box-sizing: border-box;
    background-color: #fff;
  }
  .loginPage p{
    color: red;
    text-align: left;
  }
</style>
<script>
//  import Axios from 'axios'
  export default {
    name: '',
    data () {
      return {
        formName: {
          user: '',
          userError: '',
          password: '',
          passwordError: '',
          beDisabled: true
        },
        beshow: false
      }
    },
    methods: {
      resetForm: function () {
        this.formName.user = ''
        this.formName.userError = ''
        this.formName.password = ''
        this.formName.passwordError = ''
      },
      submitForm: function (formName) {
        var user = this.formName.user
        var password = this.formName.password
        console.log(user, password)
        if (user !== '123') {
          this.formName.userError = '用户名错误'
        } else if (password !== '123') {
          this.formName.passwordError = '密码错误'
        } else if (user === '123' && password === '123') {
          this.$router.push({path: 'index/hey'})
        }
      },
      inputBlur: function (errorItem, inputContent) {
        if (errorItem === 'user') {
          if (inputContent === '') {
            this.formName.userError = '用户名不能为空'
          } else {
            this.formName.userError = ''
          }
        } else if (errorItem === 'password') {
          if (inputContent === '') {
            this.formName.passwordError = '密码不能为空'
          } else {
            this.formName.passwordError = ''
          }
        }
        if (this.formName.user !== '' && this.formName.password !== '') {
          this.formName.beDisabled = false
        } else {
          this.formName.beDisabled = true
        }
      }
    }
  }
</script>
