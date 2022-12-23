import { createRouter, createWebHashHistory } from "vue-router";

// 引入 router 命令： npm install vue-router@next --save
const router = createRouter({
  history: createWebHashHistory(),
  // 映射关系：path -> component
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: () => import("@/views/home/home.vue"),
    },
    {
      path: "/favor",
      component: () => import("@/views/favor/favor.vue"),
    },
    {
      path: "/order",
      component: () => import("@/views/order/order.vue"),
    },
    {
      path: "/message",
      component: () => import("@/views/message/message.vue"),
    },
    {
      path: "/city",
      component: () => import("@/views/city/city.vue"),
    },
  ],
});

export default router;
