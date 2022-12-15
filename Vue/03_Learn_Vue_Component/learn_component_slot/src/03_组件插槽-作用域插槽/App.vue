<template>
  <div class="app">
    <!-- 1.tab-control -->
    <tab-control :titles="['衣服', '鞋子', '裤子']"
                 @tab-item-click="tabItemClick"/>
    <!-- 2.展示内容 -->
    <h1>{{ pageContents[currentIndex] }}</h1>

    <!-- tab-control：button -->
    <tab-control :titles="['衣服', '鞋子', '裤子']" 
                 @tab-item-click="tabItemClick">
      <template v-slot:default="props">
        <button>{{ props.item }}</button>
      </template>
    </tab-control>

    <!-- tab-control：a元素 -->
    <tab-control :titles="['衣服1', '鞋子', '裤子']"
                 @tab-item-click="tabItemClick">
      <template #default="props">
        <a href="#">{{ props.item }}</a>
      </template>
    </tab-control>


    <!-- 独占默认插槽的简写 -->
    <tab-control :titles="['衣服', '鞋子', '裤子']"
                 @tab-item-click="tabItemClick">
      <template v-slot="props">
        <button>{{ props.item }}</button>
      </template>
    </tab-control>

    <!-- 只有一个插槽，那么template可以省略 -->
    <tab-control :titles="['衣服', '鞋子', '裤子']"
                 @tab-item-click="tabItemClick"
                 v-slot="props">
      <button>{{ props.item }}</button>
    </tab-control>

  </div>
</template>

<script>
  import TabControl from './TabControl.vue'

  export default {
    components: {
      TabControl
    },
    data() {
      return {
        pageContents: ["衣服list", "鞋子list", "裤子list"],
        currentIndex: 0
      }
    },
    methods: {
      tabItemClick(index) {
        console.log("app:", index);
        this.currentIndex = index
      }
    }
  }

</script>


<style scoped>

</style>
