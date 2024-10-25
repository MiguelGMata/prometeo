import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/translate': {
        target: 'https://libretranslate.de',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/translate/, '')
      }
    }
  }
});