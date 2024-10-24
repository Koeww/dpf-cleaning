import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  	base: process.env.NODE_ENV === 'production' ? '/dpf-cleaning/' : '/',
	plugins: [
		react({
			babel: {
				plugins: ['styled-jsx/babel']
			}
		})
	],
	server: {
		port: 8081,
		strictPort: true
	}
})