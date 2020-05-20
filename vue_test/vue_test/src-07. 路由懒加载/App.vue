<template>
	<div id="app">
		<h1 >App - 组件通信方式</h1>
    <!-- 静态路由 请求方式-->
    <!--<router-link :to="`/home/${shopItem.id}`">home链接</router-link>&nbsp;-->
    <!--<router-link to="/personal?a=1">personal链接</router-link>-->


    <router-link :to="{name: 'Home', params: {id: 123, a: 123}}">home链接</router-link>&nbsp;
    <!--params 不能和path搭配使用-->
    <!--<router-link :to="{path: '/home', params: {id: 123}}">home链接2</router-link>&nbsp;-->
    <router-link :to="{path: '/personal', query: {a: 1,b: 2}}">personal链接</router-link>
    <br>
    <br>
    <br>
    <!-- 路由容器，声明接收路由组件-->
    <router-view></router-view>
	</div>
</template>

<script>
  import {mapState} from 'vuex'
	// import Home from  './components/Home'
	// import Personal from  './components/Personal'
	export default {
		// components: {
    //   Home, Personal
		// },
    data(){
		  return {
		    shopItem: {
		      id: 123
        }
      }
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
