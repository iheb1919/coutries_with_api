import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/coutries_with_api/',
  plugins: [
    tailwindcss(),
  ],
})