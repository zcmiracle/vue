<template>
  <div class="city-group">
    <van-index-bar :sticky="false" :index-list="indexList">

    </van-index-bar>
  </div>
</template>


<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router';
import useCityStore from '@/store/modules/city'

const props = definePropsO({
  groupData: {
    type: Object,
    default: () => {
     return {}
    }
  }
})
</script>


<style lang="less" scoped>

</style>
