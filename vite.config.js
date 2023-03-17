
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //配置跨域信息
  server: {
    port: 8080,
    host: '0.0.0.0',
    hot: true,
    open: true,
    proxy: {
      '/api': {
        target: 'http://58.210.32.10:9020/KSYH/dataService/Logical.svc',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }

  }



})
