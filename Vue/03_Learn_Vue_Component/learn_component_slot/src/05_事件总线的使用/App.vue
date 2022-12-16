<template>
  <div class="app">
    <home></home>
    <h2>App: {{ message }}</h2>
    <button @click="isShowCategory = false">是否显示category</button>
    <category v-if="isShowCategory"></category>
  </div>
</template>

<script>
  import { computed } from 'vue'
  import Home from './Home.vue'
  import Category from './Category.vue'

  export default {
    components: {
      Home,
      Category
    },
    created() {

    },
    data() {
      return { 
        message: "hello app",
        isShowCategory: true
      }
    },
    created() {
      // fetch 

      // 事件监听
      eventBus.on("MJEvent", (name, age, height) => {
        console.log("MJEvent事件在app中监听", name, age, height)
        this.message = `name:${name}, age:${age}, height:${height}`
      })
    }
  }

</script>


<style scoped>

</style>