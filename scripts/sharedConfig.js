module.exports = {
	bundle: true,
	outdir: 'dist',
	format: 'esm',
	entryPoints: ['src/core.ts', 'src/xr.ts'],
	external: [
		'react',
		'three',
		'react-three-fiber',
		'@react-three/drei',
		'@react-three/xr',
	],
}
