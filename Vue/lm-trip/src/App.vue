<template>
  <div class="app">
    <router-view/>
    <tab-bar/>
  </div>
</template>

<script setup>

import TabBar from "@/components/tab-bar/tab-bar.vue"
import { useRouter } from 'vue-router'

const router = useRouter()

</script>


<style scoped>

</style>
