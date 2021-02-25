const esbuild = require('esbuild')
const sharedConfig = require('./sharedConfig')

esbuild.buildSync({
	...sharedConfig,
	define: { 'process.env.NODE_ENV': '"production"' },
	minify: true,
})
