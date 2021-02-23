import React, { forwardRef, Suspense } from 'react'
import { useGLTF } from '@react-three/drei'

type Props = JSX.IntrinsicElements['group'] & {
	path: string
}

/**
 * Display a complete glTF model, fallback to null
 * @param path Source URL for the model
 */
export const Gltf = forwardRef((props: Props, ref) => {
	return (
		<Suspense fallback={null}>
			<InnerGltf ref={ref} {...props} />
		</Suspense>
	)
})

const InnerGltf = forwardRef(({ path = '', ...props }: Props, ref) => {
	const { scene } = useGLTF(path)
	return <primitive ref={ref} object={scene} {...props} />
})
