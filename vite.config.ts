import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/alishabani.resume/',  // 👈 همون اسم ریپوزیتوری GitHub
})
