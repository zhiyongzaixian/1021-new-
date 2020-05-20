<template>
	<div id="app">
		<h1 >App - 组件通信方式</h1>
    <p>App组件： {{}}</p>
    <Home>
      <template v-slot:default="slotPropsObj">
        <p>我是向home组件左left护法导入的标签数据</p>
        <p>{{slotPropsObj.person.age}} --- {{slotPropsObj.person.name}}</p>
      </template>

      <template v-slot:rightSlot>
        <p>我是向home组件右right护法导入的标签数据</p>
      </template>
    </Home>
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
