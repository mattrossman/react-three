import * as React from 'react'
import { Canvas } from 'react-three-fiber'
import { TorusKnot } from '@react-three/drei'
import { LookControls, WasdControls } from '../../dist/core'

function App() {
	return (
		<Canvas>
			<color attach="background" args={['black']} />
			<fog attach="fog" color="black" far={30} />
			<LookControls />
			<WasdControls />
			<gridHelper position-y={-1.6} args={[100, 100]} />
			<TorusKnot scale={[0.5, 0.5, 0.5]}>
				<meshNormalMaterial />
			</TorusKnot>
		</Canvas>
	)
}

export default App
