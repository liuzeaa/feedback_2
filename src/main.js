// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import VueCookie from 'vue-cookie';
Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VueCookie);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  methods:{
    checkLogin(){
      if(this.$cookie.get('userInfo')==''|| this.$cookie.get('userInfo')==undefined){
        this.$router.push('/');
      }
    }
  },
  mounted(){
    this.checkLogin();
  }
})
