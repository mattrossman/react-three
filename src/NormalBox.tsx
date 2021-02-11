import React, { FC } from "react";
import { MeshProps } from 'react-three-fiber'

/**
 * A box with a normal material
 */
export const NormalBox: FC<MeshProps> = (props) => {
	return <mesh {...props}>
		<boxBufferGeometry />
		<meshNormalMaterial />
	</mesh>
};
