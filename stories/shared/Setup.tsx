import { Canvas } from "react-three-fiber";
import './style.css';

export function Setup({ children }) {
	return <Canvas>
		<color attach="background" args={[0, 0, 0]} />
		<ambientLight intensity={0.6} />
		<pointLight position={[2, 2, 2]} />
		{children}
	</Canvas>
}