<template>
	<div id="app">
    <!-- 标准的DOM事件 -->
    <!-- $event 是Vue自定义的event事件对象，  event是js引擎提供的事件对象-->
		<h1 @click="handleClick($event)">App - 组件通信方式</h1>

    <!-- -->
    <Home @click="handleHomeClick" :getHomeData="getHomeData"></Home>
    <Personal></Personal>
	</div>
</template>

<script>
	import Home from  './components/Home'
	import Personal from  './components/Personal'
	export default {
		components: {
      Home, Personal
		},
		data(){
		  return {
		    comName: 'Home'
			}
		},
		methods: {
		  getHomeData(data){
		    console.log('子组件传递过来的数据： ', data);
      },
      // handleClick(){
		  //   console.log('标准DOM事件： click');
		  //   console.log(event); // 直接打印，访问的全局的变量
      // },
      handleClick(event){
        console.log('标准DOM事件： click');
        console.log(event); // js引擎给事件回调传入的参数对象
      },
      handleHomeClick(){
        console.log('自定义事件: click');
      }
    },
    mounted(){
    }
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
	*
		margin 0
		padding 0
		.tabs
			width 100%
			height 40px
			display flex
			.tabItem
				width 50%
				height 40px
				line-height 40px
				text-align center
				border 1px solid #999
</style>
