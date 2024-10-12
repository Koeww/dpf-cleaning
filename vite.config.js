import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  	base: process.env.NODE_ENV === 'production' ? '/' : '/',
	plugins: [
		react({
			babel: {
				plugins: ['styled-jsx/babel']
			}
		})
	]
})