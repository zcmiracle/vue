<template>
  <h2>{{ title }}</h2>
  <div class="content">
    <slot>
      <p>我是默认的内容，哈哈哈</p>
    </slot>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: "我是默认的title，James"
      }
    }
  }
</script>

<style scope>
</style>