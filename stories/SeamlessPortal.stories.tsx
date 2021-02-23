import React, { useReducer, useRef, useState } from 'react'
import { Meta } from '@storybook/react'
import { Html, Icosahedron } from '@react-three/drei'
import { useFrame } from 'react-three-fiber'
import { Object3D } from 'three'

import { Setup } from './shared/Setup'
import { SeamlessPortal } from '../src/core'

export default {
	title: 'Components/SeamlessPortal',
	component: SeamlessPortal,
	decorators: [
		Story => (
			<Setup>
				<Story />
			</Setup>
		),
	],
} as Meta

export const Default = () => {
	const [spinner1, ref1] = useState<Object3D>(null)
	const [spinner2, ref2] = useState<Object3D>(null)
	const [bool, toggle] = useReducer(x => !x, false)
	return (
		<>
			<Html center position-y={2}>
				<button onClick={toggle}>Toggle parent</button>
			</Html>
			<Spinner
				innerRef={ref1}
				color={bool ? 'gold' : 'white'}
				speed={0.05}
				position-x={-2}
			/>
			<Spinner
				innerRef={ref2}
				color={!bool ? 'gold' : 'white'}
				speed={-0.05}
				position-x={2}
			/>
			<SeamlessPortal container={bool ? spinner1 : spinner2}>
				<Icosahedron scale={[0.5, 0.5, 0.5]}>
					<meshStandardMaterial color="red" />
				</Icosahedron>
			</SeamlessPortal>
		</>
	)
}

function Spinner({ innerRef, color, speed, ...props }) {
	const ref = useRef<Object3D>(null)
	useFrame(() => {
		ref.current.rotation.z += speed
	})
	return (
		<group ref={ref} {...props}>
			<Icosahedron ref={innerRef}>
				<meshStandardMaterial color={color} />
			</Icosahedron>
		</group>
	)
}
