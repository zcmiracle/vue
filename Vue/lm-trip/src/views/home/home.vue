<template>
  <div class="home">
    <home-nav-bar/>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search-box/>
    <home-categories/>
    <!-- <div class="search-bar" v-if="isShowSearchBar">
      <search-bar :start-date="'01.13'" :end-date="'01.15'"/>
    </div> -->
  </div>
</template> 

<script setup>
import { ref, watch } from 'vue';
import useHomeStore from '@/stores/modules/home';
import HomeNavBar from './components/home-nav-bar.vue';
import HomeSearchBox from './components/home-search-box.vue';
import HomeCategories from './components/home-categories.vue'
// import SearchBar from '@/components/search-bar/search-bar.vue'

// 发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoriesData()
homeStore.fetchHouseListData()

// 搜索框显示的控制
// const isShowSearchBar = ref(false)
// watch(scrollTop, (newTop) => {
//   isShowSearchBar.value = newTop > 100
// })
// 定义可响应式数据，依赖另一个可响应式的数据，那么可使用计算函数(computed)
// const isShowSearchBar = computed(() => {
//   return scrollTo.value >= 360
// })

</script>

<style lang="less" scoped>
.home {
  padding-bottom: 100px;
}

.banner {
  img {
    width: 100%;
  }
}

.search-bar {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
}

</style>
