import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.config.errorHandler = function (err, vm, info) {
  console.log('全局错误捕获');
  console.log(err, vm, info);
}

new Vue({
  render: h => h(App),
}).$mount('#app')
