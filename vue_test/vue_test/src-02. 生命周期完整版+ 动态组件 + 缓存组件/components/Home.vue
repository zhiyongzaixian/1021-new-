<template>
  <div>
    <h2>Home组件</h2>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        msg1: '子组件的数据msg1'
      }
    },
    props: ['msg', 'getHomeData'],
    mounted(){
      console.log(aaa);
      this.getHomeData(this.msg1)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
