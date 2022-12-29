<template>
  <div class="city-group">
    <!-- sticky 吸顶效果 -->
    <van-index-bar :sticky="false" :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="(city, index) in groupData.hotCities">
          <div class="city" @click="cityClick(city)">{{ city.cityName }}</div>
        </template>
      </div>

      <template v-for="(group, index) in groupData.cities" :key="index">
        <van-index-anchor :index="group.group" />
        <template v-for="(city, indexY) in group.cities" :key="indexY">
          <van-cell :title="city.cityName" @click="cityClick(city)" />
        </template>
      </template>
    </van-index-bar>

  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import useCityStore from "@/stores/modules/city"; // 绝了，stores

const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})

// 动态的索引
const indexList = computed(() => {
  const list = props.groupData.cities.map(item => item.group)
  list.unshift("#")
  return list
})

// 监听城市点击
const router = useRouter()
const cityStore = useCityStore()
const cityClick = (city) => {
  // 选中当前的城市
  cityStore.currentCity = city
  // 返回上一级
  router.back()
}

</script>

<style lang="less" scoped>

.list {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  // 控制每个元素的间距，上下左右
  gap: 4px; // 牛啊牛啊
  // justify-content: space-between;
  // padding: 10px;
  // padding-right: 25px;

  .city {
    width: 70px;
    height: 28px;
    border-radius: 14px;
    color: #000;
    font-size: 12px;
    text-align: center;
    line-height: 28px;
    background-color: #fff4ec;
    padding: 10px 0;
  }
}

</style>

