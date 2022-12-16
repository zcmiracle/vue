<template>
  <div>
    <h2>Category</h2>  
  </div>
</template>

<script>
  import eventBus from './util/event-bus'

  export default {
    methods: {
      MJEventHandler() {
        console.log("MJEvent 在cateogory中监听")
      },
    },
    created() {
      eventBus.on("MJEvent", this.MJEventHandler)
    },
    unmounted() {
      console.log("category unmounted")
      eventBus.off("MJEvent", this.MJEventHandler)
    }
  }
</script>


<style scoped>

</style>