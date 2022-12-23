<template>
  <div class="tab-bar">
    <div class="tab-bar-item" @click="itemClick('/home')">
      <img src="@/assets/img/tabBar/tab_home.png" alt="">
      <span class="text">首页</span>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/img/tabBar/tab_favor.png" alt="">
      <span class="text">收藏</span>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/img/tabBar/tab_order.png" alt="">
      <span class="text">收藏</span>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/img/tabBar/tab_message.png" alt="">
      <span class="text">收藏</span>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.tab-bar {
  // 这个很关键
  position: fixed; 
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  
  border-top: 1px solid #f3f3f3;

  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;

    img {
      width: 36px;
    }

    .text {
      font-size: 14px;
      margin-top: 2px;
    }
  }  
}

</style>
