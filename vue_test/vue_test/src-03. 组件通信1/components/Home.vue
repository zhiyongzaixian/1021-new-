<template>
  <div>
    <h2>Home组件</h2>
    <button @click="handleClick">触发自定义事件的</button>
  </div>
</template>

<script>
  export default {
    props: ['getHomeData'],
    data(){
      return {
        msg: 'home组件的数据'
      }
    },
    mounted(){
      this.getHomeData(this.msg)
      // 绑定事件
      this.$eventBus.$on('myClick', (event) => {
        console.log('eventBus绑定的事件');
        console.log(event);
      })
    },
    methods: {
      handleClick(){
        this.$emit('click')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
