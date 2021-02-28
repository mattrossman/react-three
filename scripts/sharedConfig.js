module.exports = {
	bundle: true,
	outdir: 'dist',
	format: 'esm',
	target: ['es2016'],
	entryPoints: ['src/core.ts', 'src/xr.ts'],
	external: [
		'react',
		'three',
		'react-three-fiber',
		'@react-three/drei',
		'@react-three/xr',
	],
}
