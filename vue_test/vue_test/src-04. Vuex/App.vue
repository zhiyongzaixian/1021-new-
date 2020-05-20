<template>
	<div id="app">
		<h1 >App - 组件通信方式</h1>
    <Home></Home>
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
    mounted(){
		  setTimeout(() => {
		    let arr = [1,2,3,4,5,6]
        this.$store.commit('changeArr', arr)
      }, 4000)


      window.addEventListener('beforeunload', () => {
        console.log(this);
        sessionStorage.setItem('test', JSON.stringify(this.newArr))
      })
    },
    computed: {
      ...mapState({
        newArr: state => state.home.arr
      })
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
