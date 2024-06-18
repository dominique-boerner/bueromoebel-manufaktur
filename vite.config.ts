import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  base: "/bueromoebel-manufaktur/",
  server: {
    host: '0.0.0.0', // Lauscht auf allen Netzwerkinterfaces
    port: 3000,      // Du kannst den Port ändern, wenn nötig
    strictPort: true, // Stellt sicher, dass der gewählte Port verwendet wird
    watch: {
      usePolling: true, // Optional, nützlich bei Problemen mit Dateisystemänderungen
    },
  },
  assetsInclude: ["**/*.docx"],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
