<template>
  <div>
    <h2>Personal 组件</h2>
    <button @click='handleClick'>触发eventBus绑定的事件</button>
  </div>
</template>

<script>
  export default {
    mounted(){
    },
    methods: {
      handleClick(){
        this.$eventBus.$emit('myClick', {msg: '这是我自定义的对象'})

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
