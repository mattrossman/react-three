import React, { ReactNode, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-three-fiber'
import { Group, Matrix4, Object3D } from 'three'

type Props = {
	container?: Object3D
	children?: ReactNode
}

interface State {
	activeContainer?: Object3D
	matrix: Matrix4
}

/**
 * Reparent children while keeping their world transforms
 * @param container Parent object
 */
export function SeamlessPortal({ container, children }: Props) {
	const defaultContainer = useRef()
	const portalChild = useRef<Group>()
	const [{ activeContainer, matrix }, setState] = useState<State>(() => ({
		activeContainer: undefined,
		matrix: new Matrix4(),
	}))
	useLayoutEffect(() => {
		const newContainer = container ?? defaultContainer.current
		if (portalChild.current && newContainer) {
			matrix.copy(newContainer.matrixWorld).invert()
			matrix.multiply(portalChild.current.matrixWorld)
		}
		setState({ activeContainer: newContainer, matrix: matrix })
	}, [container])
	return (
		<>
			<group ref={defaultContainer} />
			{activeContainer &&
				createPortal(
					<group ref={portalChild} matrixAutoUpdate={false} matrix={matrix}>
						{children}
					</group>,
					activeContainer
				)}
		</>
	)
}
