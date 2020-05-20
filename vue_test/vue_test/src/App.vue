<template>
	<div id="app">
		<h1 >App - 组件通信方式</h1>
    <p>{{num}}</p>
    <p>{{person.name}}</p>

    <br>
    <br>
    <!-- 静态路由 请求方式-->
    <Home :num="num"  :person="person"></Home>
    <Personal></Personal>
	</div>
</template>

<script>
  import {mapState} from 'vuex'
	import Home from  './components/Home'
	import Personal from  './components/Personal'
	export default {
		components: {
      Home, Personal
		},
    data(){
		  return {
		    num: 123,
        person: {
		      name: 'curry',
          age: 32
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
