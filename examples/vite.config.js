import path from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import twindJsx from '@twind/vite-plugin-jsx'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [reactRefresh(), twindJsx()],
	resolve: {
		alias: {
			'react-three': path.resolve(__dirname, '../dist'),
		},
	},
	server: {
		https: true,
	},
})
