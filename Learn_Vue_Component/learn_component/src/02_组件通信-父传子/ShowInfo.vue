<template>
  <div class="info">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>身高：{{ height }}</h2>

    <h2>Message: {{ showMessage }}</h2>
  </div>

  <div class="others" v-bind="$attrs"></div>
</template>


<script>
  export default {
    // inheritAttr: false,

    // 作用：接收父组件传递过来的属性
    // 1、props 数组语法
    // 弊端：1.不能对类型进行验证 2.没有默认值
    // props: ["name", "age", "height"]

    props: {
      name: {
        type: String,
        default: "我的默认的name-张三"
      },
      age: {
        type: Number,
        default: 0
      },
      height: {
        type: Number,
        default: 3
      },
      
      // 重要原则：
      // 对象类型写默认值时候，需要编写defalut的函数，函数返回默认值
      friend: {
        type: Object,
        default() {
          return { 
            name : "James" 
          }
        }
      },
      hobbies: {
        type: Array,
        default: () => ["篮球", "足球", "羽毛球"]
      },

      showMessage: {
        type: String,
        default: "我是showMessage"
      }

    }
  }
</script>


<style scoped>

</style>