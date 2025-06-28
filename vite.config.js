import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    // This helps with client-side routing during development
    historyApiFallback: true
  },
  build: {
    outDir: 'dist',
    minify: 'esbuild',
    sourcemap: false
  },
  base: '/'
})
