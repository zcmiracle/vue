<template>
 <view class="activity theme">
  
  <view class="activity-item" v-for="item in list" :key="item.id" @click="cliclActivity(item)">
    <view class="activity-item_time"> {{ item.updated_at }} </view>
    <view class="activity-item_card">
      <image class="cover" :src="item.cover_url" mode="aspectFill"></image>
      <view class="title"> {{ item.name }} </view>
      <view class="desc"> {{ item.desc }} </view>
      <view class="detail"> 查看详情 </view>
    </view>
  </view>

  <!-- 公共组件 -->
  <LoadingMore :status="list.length >= total ? 'noMore' : 'loading'" />
  <TabBar :active="4" />
 </view>
</template>

<script>
  import LoadingMore from '@/components/BasisLayout/LoadingMore.vue'
  import TabBar from '@/components/BasisLayout/TabBar.vue'
 
export default {
  components: {
   LoadingMore,
   TabBar
  },
  data() {
   return {
    list: [],
    total: 0,
    page: 1,
    page_size: 10
   }
  },
  onShow() {
   // #ifndef MP
   uni.startPullDownRefresh();
   // #endif
  },
  methods: {
   getList() {
    this.$api.activity.list({
     page: this.page,
     page_size: this.page_size
    }).then(res => {
     let { data, total } = res;
     this.list = this.page === 1 ? data : this.list.concat(data);
     this.total = total;
    }).finally(() => {
     uni.stopPullDownRefresh();
    })
   },
   cliclActivity(item) {
    let { m_url, mini_program_id, mini_program_page } = item;
    // 跳转 打开网页
    if(m_url) {
     this.$jump.webview(m_url);
     return;
    }
   }
  },
  onPullDownRefresh() {
   this.page = 1;
   this.getList();
  },
  onReachBottom() {
   if(this.list.length >= this.total) return;
   this.page ++;
   this.getList();
  }
 }
</script>

<style lang="scss" scoped>
 @import "./styles/index.scss"
</style>