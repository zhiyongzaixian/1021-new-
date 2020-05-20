import Vue from 'vue'
import router from './router'
import App from './App.vue'
Vue.config.productionTip = false

Vue.config.errorHandler = function (err, vm, info) {
  console.log('全局错误捕获');
  console.log(err, vm, info);
}

Vue.prototype.$eventBus = new Vue()

const vm = new Vue({
  render: h => h(App),
  router
}).$mount('#app')

// 组件的实例对象的原型对象是vm
// 组件实例(this).__proto__ == vm
// vm.__proto__ = Vue.prototype
// 组件实例(this).__proto__.__proto__  === Vue.prototype
// console.log(vm.$eventBus);
