import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
 // 需安装path模块 npm install --save-dev @types/node
 // 如果不行换这个 cnpm install --save-dev @types/node
import path from "path";

// https://www.cnblogs.com/zsg88/p/15652750.html
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
