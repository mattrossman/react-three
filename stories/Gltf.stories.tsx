import React from 'react'
import { Meta } from '@storybook/react'

import { Setup } from './shared/Setup'
import { Gltf } from '../src/core'
import { OrbitControls } from '@react-three/drei'

const duckGlb =
	'https://rawcdn.githack.com/KhronosGroup/glTF-Sample-Models/2279f7a96e64f76c8bfb306b3b8fd666b2bb93bf/2.0/Duck/glTF-Binary/Duck.glb'

export default {
	title: 'Components/Gltf',
	component: Gltf,
	decorators: [
		Story => (
			<Setup>
				<Story />
			</Setup>
		),
	],
} as Meta

export const Default = () => {
	return (
		<>
			<OrbitControls autoRotate autoRotateSpeed={-7} />
			<Gltf path={duckGlb} position-y={-0.5} />
		</>
	)
}
