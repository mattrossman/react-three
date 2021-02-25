const path = require('path')
const esbuild = require('esbuild')
const vite = require('vite')
const sharedConfig = require('./sharedConfig')

async function dev() {
	// Start esbuild in watch mode (rebuild on source change)
	await esbuild.build({
		...sharedConfig,
		define: { 'process.env.NODE_ENV': '"development"' },
		sourcemap: false,
		watch: true,
	})

	// Start Vite dev server from examples folder
	const server = await vite.createServer({
		root: path.join(__dirname, '../examples'),
		server: {
			port: 1234,
		},
	})
	await server.listen()
}

dev()
