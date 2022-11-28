import { createApp } from 'vue/dist/vue.esm-bundler'

import App from './components/App.vue'
import ProductItem from "./components/ProductItem.vue"

// createApp(App).mount('#app')

const app = createApp(App)

// 全局注册
// app.component("product-item", ProductItem)

app.mount("#app")