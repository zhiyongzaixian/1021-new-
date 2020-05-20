
import Home from '../components/Home'
import Personal from '../components/Personal'

export default [
  // {
  //   path: '/home/:id',
  //   component: Home,
  //   name: 'Home'
  // },
  
  {
    path: '/home/:id',
    component: Home,
    name: 'Home',
    // props: true // props为布尔组织true的时候，需要和params搭配使用，声明params参数导入至路由组件的props对象中
    // props: { // props为对象的时候声明直接向路由组件导入指定的数据
    //   a: 1,
    //   b: 2,
    //   msg: 'props为对象的模式'
    // }
    
    // 函数模式下，返回数据的小括号得加上
    // 函数模式的优点是： 可以获取到当前路由信息对象
    props: route => ({a: 123, path: route.path, params: route.params})
  }
  ,
  {
    path: '/personal',
    component: Personal,
    name: 'personal',
    // 元信息： 用来描述信息本身的信息
    meta: {
      isShowFooter: true
    }
  }
]
