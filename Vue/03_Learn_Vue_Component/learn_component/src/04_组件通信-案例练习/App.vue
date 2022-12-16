<template>
  <div class="app"> 
    <!-- 1.tab-control -->
    <tab-control :titles="['衣服', '鞋子', '裤子']"
                 @tab-item-click="tabItemClick"/>
    <!-- 2.展示内容 -->
    <h1>{{ pageContents[currentIndex] }}</h1>
  </div>
</template>

<script>
  import TabControl from './TabControl.vue'

  export default {
    components: {
      TabControl
    },
    data() {
      return {
        pageContents: ["衣服list", "鞋子list", "裤子list"],
        currentIndex: 0
      }
    },
    methods: {
      tabItemClick(index) {
        console.log("app:", index);
        this.currentIndex = index
      }
    }
  }

</script>



<style scoped>

</style>
