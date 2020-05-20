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
    },
    beforeRouteEnter (to, from, next) {
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当守卫执行前，组件实例还没被创建
      console.log('----- beforeRouteEnter 路由进入，即将要请求当前的路由组件--------')
      next()
    },
    beforeRouteUpdate (to, from, next) {
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
      console.log('----- beforeRouteUpdate 路由参数发生变化的时候 --------')
      next()
    },
    beforeRouteLeave (to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
      console.log('----- beforeRouteLeave 离开当前路由，请求新的路由地址--------')
      next()

      // 女儿国： 国王
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
