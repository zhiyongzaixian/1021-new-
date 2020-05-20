import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)

// 1. 生成路由器
const router = new VueRouter({
 //  mode: 'history' 设置路由模式
  routes
})


router.beforeEach((to, from, next) => {
  console.log('----- beforeEach 全局前置守卫--------')
  console.log(to);
  console.log(from);
  console.log(next);
  // 西游记： 贫僧从东土大唐而来(from), 要去西天取经(to), 途径贵宝地，忘发放通关文牒(next)
  // if(用户登录){
  //   跳转至主页
  // }else{
  //   跳转至登录页面
  // }
  // let isLogin = false;
  // if(!isLogin && to.path !== '/personal'){
  //   next('/personal');
  // }else {
  //   next();
  // }
  
  next();
  
  
})

router.beforeResolve((to, from, next) => {
  console.log('----- beforeResolve 全局解析守卫--------');
  next();
})

router.afterEach((to, from) => {
  console.log('----- afterEach 全局后置钩子--------');
  
})


export default router
