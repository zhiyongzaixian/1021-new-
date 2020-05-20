<template>
  <div>
    <hr>
    <br>
    <br>
    <br>
    <br>

    <h2>Home组件</h2>
    <p>{{num}}</p>
    <p>{{person.name}}</p>

  </div>
</template>

<script>

//  let props = {}
//  props.num = num // 值传递
//  props.person = person // 引用数据类型， 引用传递

  export default {



    props: ['num', 'person'],
    data(){
      return {

      }
    },

    mounted(){

      // this.num = 234
      this.person.name = 'kobe'
      // console.log(this.num);
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
