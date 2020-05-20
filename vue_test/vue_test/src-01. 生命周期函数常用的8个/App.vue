<template>
	<div id="app">
		<h1>App 组件</h1>
    <p>{{num}}</p>
	</div>
</template>

<script>

	export default {
	  data(){
	    return {
	      msg: '组件初始化的测试数据',
        num: 1
      }
    },
    beforeCreate(){
      console.log('------- beforeCreate 初始化了事件和生命周期函数 --------');
      // 产生了实例对象，初始化了事件和生命周期函数
      // 没有实现数据劫持/代理

      // console.log(this.msg); // undefined
      console.log(this.$options.data().msg); // 可以数据的
      // $el什么时候可见???
      console.log(this.$el);
    },
    created(){
      console.log('------- created 实现了数据劫持/代理--------');
      // 已经实现了数据劫持/代理
      console.log(this.msg);
      console.log(this.$el);
      // aysnc + await + promise解决异步的问题，异步变同步
    },
    beforeMount(){
      console.log('------- beforeMount 组件即将挂载--------');
      console.log(this.$el);
      // 发送请求场景： 1. 数据量较小， 2. 要求页面渲染的时候就要显示数据给用户

    },
    mounted(){
      console.log('------- mounted 组件挂载完毕--------');
      // $el 代表（Vue应用 || 当前组件）根据虚拟DOM对象编译完的真实DOM对象片段
      console.log(this.$el);


      this.intervalId = setInterval(() => {
        console.log('定时器执行了。。。');
        this.num++
      }, 1000)

      setTimeout(() => {
        // 销毁组件实例对象
        // 切断了组件实例和页面的管理，数据绑定，都没有了。。。
        this.$destroy()

      }, 3000)
    },
    beforeUpdate(){
      console.log('------- beforeUpdate 组件即将要更新--------');
    },
    updated(){
      console.log('------- updated 组件更新完毕--------');
    },
    beforeDestroy(){
      console.log('------- beforeDestroy 组件即将被销毁--------');
      // 关闭定时器，释放内存。。。
      clearInterval(this.intervalId)

      console.log(this.num);
    },
    destroyed(){
      console.log('------- destroyed 组件销毁了--------');
      console.log(this.num);

    },
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" >

</style>
