const sharedConfig = require('./sharedConfig')

require('esbuild').buildSync({
	...sharedConfig,
	define: { 'process.env.NODE_ENV': '"production"' },
	minify: true,
})
