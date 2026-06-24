import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'




// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  preview: {
    allowedHosts: ['chronicle-of-a-death-foretold-production.up.railway.app'],
  },
  build: {
    rollupOptions: {
      input: {
        // main: 'index.html',
        // story: 'build_1/story.html',
        index: 'build_2/html/index.html',
        // wallet: 'build_1/wallet.html',
      },
    },
  },
})
