import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://komlev1257.github.io/React_website/', 
  build: {
    outDir: 'builds',
  }
})