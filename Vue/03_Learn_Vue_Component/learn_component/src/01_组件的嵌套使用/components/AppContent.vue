<template>
  <div class="content">
    <div class="banner">banner</div>
    <app-content-list></app-content-list>
  </div>
</template>


<script>
  import AppContentList from './AppContentList.vue';
  
  export default {
    components: {
      AppContentList
    }
  }
</script>


<style>
  .content {
    background-color: blue;
    color: white
  }
</style>