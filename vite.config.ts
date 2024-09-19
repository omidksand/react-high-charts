import { defineConfig } from 'vite'
// @ts-ignore
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			// @ts-ignore
			'@': path.resolve(__dirname, 'src'),
		},
	},
	build: {
		outDir: 'dist',
		emptyOutDir: true,
		minify: true,
		assetsDir: 'assets',
		cssCodeSplit: false,
		sourcemap: false,
		ssr: false,
		rollupOptions: {
			treeshake: true,
			output: {
				entryFileNames: `assets/index.js`,
				chunkFileNames: `assets/index-chunk.js`,
				assetFileNames: `assets/[name].[ext]`,
			},
		},
	},
	plugins: [react()],
})
