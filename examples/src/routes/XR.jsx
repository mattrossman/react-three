import * as React from 'react'
import { VRCanvas, DefaultXRControllers } from '@react-three/xr'
import { TorusKnot } from '@react-three/drei'
import { SmoothLocomotion, SnapRotation } from 'react-three/xr'

export default function XR() {
	return (
		<VRCanvas>
			<color attach="background" args={['black']} />
			<fog attach="fog" color="black" far={30} />
			<SmoothLocomotion />
			<SnapRotation />
			<DefaultXRControllers />
			<gridHelper args={[100, 100]} />
			<TorusKnot scale={[0.5, 0.5, 0.5]}>
				<meshNormalMaterial />
			</TorusKnot>
		</VRCanvas>
	)
}
