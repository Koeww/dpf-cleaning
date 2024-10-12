import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	base: '/dpf-cleaning/',
	plugins: [
		react({
			babel: {
				plugins: ['styled-jsx/babel']
			}
		})
	]
})
