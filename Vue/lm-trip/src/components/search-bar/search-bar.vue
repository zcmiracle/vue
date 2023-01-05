<template>
  <div class="search">
    <div class="select-time">
      <div class="item start">
        <div class="name">住</div>
        <div class="date">{{ startDateStr }}</div>
      </div>
      <div class="item end">
        <div class="name">离</div>
        <div class="date">{{  endDateStr }}</div>
      </div>
    </div>

    <div class="content">
      <div class="keyword">关键字/位置/民宿</div>
    </div>

    <div class="right">
      <i class="icon-search"></i>
    </div>
</div>
</template>

<script setup>
// import useMainStore from '@/stores/module/main'
import { formatMonthDay } from '@/utils/format_date'
// import { computed } from '@vue/reactivity'
// import { storeToRefs } from 'pinia';

</script>


<style lang="less" scoped>

</style>
