const path = require('path')
const vite = require('vite')

// Export examples as static site in root "public" folder
vite.build({
	root: path.join(__dirname, '../examples'),
	build: {
		outDir: path.join(__dirname, '../public'),
	},
})
