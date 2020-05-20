<template>
  <div>
    <hr>
    <br>
    <br>
    <br>
    <br>

    <h2>Home组件</h2>
    <p>params参数： {{$route.params.id}}</p>
    <!--<p>props接收路由参数： {{id}}</p>-->
  </div>
</template>

<script>

  export default {
    // props: ['id'], 布尔值使用
    // props: ['a', 'b', 'msg'], // 对象模式
    props: ['a', 'path', 'params'], // 对象模式
    data(){
      return {

      }
    },
    mounted(){
      console.log(this.$router);
      console.log(this.$route);
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
