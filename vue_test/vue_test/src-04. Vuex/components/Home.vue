<template>
  <div>
    <h2>Home组件</h2>
    <ul>
      <li v-for="item in newArr" :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState({
        newArr: state => state.home.arr
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
