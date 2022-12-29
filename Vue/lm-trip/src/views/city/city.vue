
<template>
  <div class="city top-page">
    <div class="top">
      <!-- 搜索框 -->
      <van-search
        v-model="searchValue"
        placeholder="城市/区域/位置"
        shape="round"
        show-action
        @cancel="cancelClick"
      />

      <!-- tab的切换 国内·港澳台 or 海外 -->
      <van-tabs v-model:active="tabActive" color="#ff9854" line-height="3">
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    
    <div class="content">
      <template v-for="(value, key, index) in allCities">
        <city-group v-show="tabActive === key" :group-data="value" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { storeToRefs } from "pinia";
// import { useRouter } from "vue-router";
import useCityStore from "@/stores/modules/city";
import CityGroup from "./components/city-group.vue";

// const router = useRouter();
// // 搜索框功能
const searchValue = ref("");
const cancelClick = () => {
  router.back();
};

// // tab切换
const tabActive = ref("");

// 从store中获取数据
const cityStore = useCityStore();
cityStore.fetchAllCitiesData();
const { allCities } = storeToRefs(cityStore);

// // 获取选中标签后的数据 computed 作用是响应式
// const currentGroup = computed(() => allCities.value[tabActive.value])

</script>

<style lang="less" scoped>

.top {
  position: relative;
  z-index: 9;
}

.banner {
  img {
    width: 100%;
  }
}

.content {
  height: calc(100vh - 98px);
  overflow-y: auto;
}
</style>
``