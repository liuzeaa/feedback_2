<template>
  <div>
    <el-button type="primary" @click="logout">退出</el-button>
  </div>
</template>

<script>

  export default {
    name:'home',
    data(){
      return {

      }
    },
    methods:{
      logout(){
        this.$cookie.delete('userInfo');
        this.$router.push('/');
      }
    },
    mounted(){
      var userInfo = JSON.parse(this.$cookie.get('userInfo'));
      console.log(userInfo)
    }
  }
</script>
