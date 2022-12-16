<template>

  <show-info name="James" :age="38" :height="203" address="克利夫兰" class="active">
  </show-info>

  <show-info name="MJ" :age="50" :height="198">
  </show-info>

  <show-info :age="100" show-message="哈哈哈哈">
  </show-info>

</template>


<script>
  import ShowInfo from './ShowInfo.vue'
  export default {
    components: {
      ShowInfo
    }
  }
</script>


<style scoped>
</style>