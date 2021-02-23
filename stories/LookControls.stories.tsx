import React, { useLayoutEffect, useRef } from 'react';
import { Meta } from '@storybook/react';
import { useThree } from 'react-three-fiber';
import { PerspectiveCamera } from 'three';

import { Setup } from './shared/Setup';
import { LookControls } from '../src/core';

export default {
	title: 'Components/LookControls',
	component: LookControls,
	decorators: [(Story) => <Setup><Story /></Setup>]
} as Meta

export const Default = () => {
	const { setDefaultCamera } = useThree()
	const camera = useRef<PerspectiveCamera>()
	useLayoutEffect(() => {
		setDefaultCamera(camera.current)
	}, [])
	return <>
		<LookControls />
		<perspectiveCamera ref={camera} position={[0, 1.6, 3]} fov={70} />
		<mesh position-y={1}>
			<boxBufferGeometry />
			<meshNormalMaterial />
		</mesh>
		<gridHelper />
	</>
}