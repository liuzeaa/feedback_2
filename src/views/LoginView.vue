<template>
  <el-form :model="loginForm" ref="loginForm"  class="demo-ruleForm">
    <el-form-item
      prop="username"
      :rules="[
      { required: true, message: '用户名不能为空'},
    ]">
      <el-input type="text" v-model.number="loginForm.username" complete="off"></el-input>
    </el-form-item>
    <el-form-item prop="password"
    :rules="[
        { required: true, message: '密码不能为空'},
      ]">
      <el-input type="password" v-model.number="loginForm.password" complete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('loginForm')" style="width:100%;">登录</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  import axios from 'axios'
  import {host} from '../config'
  export default {
    name:'LoginView',
    data(){
      return {
        loginForm: {
          username: '',
          password:''
        }
      }
    },
    methods:{
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            axios.post(host+'/users/login',{
              LoginName:this.loginForm.username,
              Password:this.loginForm.password,
            }).then((json)=>{

              this.$cookie.set('userInfo',JSON.stringify(json.data.result))
              this.$router.push('home');
            })
          } else {
            return false;
          }
      });
      }
    },
    mounted(){}

  }
</script>
