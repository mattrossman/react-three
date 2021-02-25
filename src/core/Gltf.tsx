import * as React from 'react'
import { useGLTF } from '@react-three/drei'

type Props = JSX.IntrinsicElements['group'] & {
	path: string
}

/**
 * Display a complete glTF model, fallback to null
 * @param path Source URL for the model
 */
export const Gltf = React.forwardRef((props: Props, ref) => {
	return (
		<React.Suspense fallback={null}>
			<InnerGltf ref={ref} {...props} />
		</React.Suspense>
	)
})

const InnerGltf = React.forwardRef(({ path = '', ...props }: Props, ref) => {
	const { scene } = useGLTF(path)
	return <primitive ref={ref} object={scene} {...props} />
})
