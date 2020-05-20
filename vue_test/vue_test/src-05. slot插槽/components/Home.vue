<template>
  <div>
    <hr>
    <br>
    <br>
    <br>
    <br>

    <h2>Home组件</h2>
    <slot  :person="person">
      home组件： {{person.name}}
    </slot>
    <br>
    <p>slot插槽</p>
    <br>
    <slot name="rightSlot"></slot>



  </div>
</template>

<script>

  export default {
    data(){
      return {
        person: {
          name: 'curry',
          age: 32
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
