<template>
  <div class="app">
    <home></home>
    <h2>App: {{ message }}</h2>
    <button @click="message = 'hello world'">修改message</button>
  </div>
</template>

<script>
  import { computed } from 'vue'
  import Home from './Home.vue'

  export default {
    components: {
      Home,
    },
    created() {

    },
    data() {
      return { 
        message: "hello app"
      }
    },
    provide() {
      return {
        name: "James",
        age: 38,
        message: computed(() => this.message)
      }
    }
  }

</script>


<style scoped>

</style>