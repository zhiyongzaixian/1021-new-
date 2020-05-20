<template>
	<div id="app">
		<h1>App - 动态组件</h1>
		<div class="tabs">
			<div class="tabItem" @click="changeTab('Home')">
				Home
			</div>
			<div class="tabItem" @click="changeTab('Personal')">
				Personal
			</div>
		</div>

		<keep-alive :exclude="['Personal']">
			<!-- 动态组件默认会销毁非当前加载的组件 -->
			<!--<component :is="comName"></component>-->
			<component :is="comName" msg="通过动态组件导入的数据" :getHomeData="getHomeData"></component>
		</keep-alive>

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
      changeTab(comName){
        this.comName = comName
			},
			getHomeData(msg){
        console.log('子传父的数据： ', msg);
			}
		},
		errorCaptured(errorObj, errorVM, errorMsg){
		  console.log('---- errorCaptured 捕获子孙组件的错误--------');
		  console.log(errorObj.message, errorVM, errorMsg);

      // Home组件实例.getHomeData(Home组件实例.msg1)
      errorVM.getHomeData(errorVM.msg1)
		  return false // 错误不会向上传播，默认再次解决完错误
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
