<template>
  <div>
    <h2>Personal 组件</h2>
  </div>
</template>

<script>
  export default {
    mounted(){
      console.log('personal mounted()');
    },
    activated(){
      console.log('---------- activated 组件被激活------- ');
      // 如果当前组件对数据的实时性要求比较高的话，就不能在mounted发送了， 比如： 炒股软件
      // 用来取代之前mounted的工作， 发送ajax请求，开启定时器等工作
    },
    deactivated(){
      console.log('---------- deactivated 组件被缓存------- ');
      // 用来取代destoryed，用于做收尾工作，清除定时器等
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
