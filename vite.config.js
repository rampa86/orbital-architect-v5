import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ruben/', // CRITICAL: This ensures assets load correctly on shared hosting (SiteGround)
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
})