import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['styled-jsx/babel']
      }
    })
  ],
  server: {
    host: '0.0.0.0',  // This allows access from any IP on your local network
    port: 5174,       // Or whatever port Vite is using
  }
})
