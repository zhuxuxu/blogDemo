// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueResource)

//自定义全局指令
Vue.directive('theme',{
  bind(el,binding,vnode){
    if (binding.arg == 'column' ){
      //el.style.background = '#'+Math.random().toString(16).slice(2,8);
      el.style.padding = "20px";
    }
  }
})
//自定义全局过滤器
Vue.filter("to-uppercase",function(value){
  return value.toUpperCase();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
