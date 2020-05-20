## 1. DOM事件 VS vue自定义事件
### 标准DOM事件
- 事件绑定在html标签身上
- 事件名需要是js引擎提供的指定的事件： click,input, blur
- 事件由js引擎响应，由js引擎触发指定的回调
### vue自定义事件
- 事件绑定在组件标签身上
- 事件名可以自定义：click, xxx, myClick
- 事件需要我们主动触发，主动去调用指定的事件回调



## 2. 自定义事件
1. 绑定事件
  - 事件名
  - 事件的回调 
2. 触发事件
  - 事件名
  - 提供数据参数， 标准的DOM事件event， 自定义的参数可以自定义
  
## 3. 路由
### 核心概念
- 路由器： const router = new VueRouter()
- 路由：route: {path: '路由路径'， component: 路由组件}
- 路由链接： <router-link to='路由路径'/>
- 路由容器: router-view

### 路由模式
1. Hash路由
    - 路由地址前有一个#
    - # + 路由路径代表hash路由，hash路由值唯一的，通过路由地址的变化触发浏览器添加一条新的浏览历史记录
2. History路由
    - 路由地址前没有一个#
    - 底层是通过操作浏览器的history对象去控制浏览器的历史记录，并实现前进后退，history方法：push，back。。。
    
    
### $route VS $router
1. $route
    - 包含所有的路由相关信息： path， query， params等
    - 只是用于存储路由信心数据的
2. $router
    - 路由器对象
    - 包含当前应用中路由器相关信息
    - 更多去使用的是路由器方法： go, back等
