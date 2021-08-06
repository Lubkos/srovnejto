<template lang="pug">
  div
    p(class="text-white text-center") ERROR
</template>

<script>
  export default {
    props: [
      'error'
    ],
    layout: 'subpage',
    head(){
      return{
        title: 'Chyba -'
      }
    },
  }
</script>

<style lang="scss">
  .s-error{
    margin: 160px 0;
  }
</style>
