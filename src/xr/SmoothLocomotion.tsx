import { useController, useXR } from '@react-three/xr'
import { useFrame } from 'react-three-fiber'
import { Vector2, Vector3, XRHandedness } from 'three'

const controllerDir = new Vector2()
const controllerDir3 = new Vector3()
const joystickDir = new Vector2()

type Props = {
	hand: XRHandedness
	speed: number
}

/**
 * Navigate smoothly using an XR controller's joystick
 * @param hand Which hand will control locomotion
 */
export function SmoothLocomotion({ hand = 'left', speed = 1 }: Props) {
	const { player } = useXR()
	const controller = useController(hand)
	useFrame((_, delta) => {
		if (controller?.inputSource?.gamepad?.axes?.length > 0) {
			const [, , ax, ay] = controller.inputSource.gamepad.axes
			joystickDir.set(ax, ay)
			controller.controller.getWorldDirection(controllerDir3)
			controllerDir.set(controllerDir3.x, -controllerDir3.z).normalize()

			player.position.x += controllerDir.cross(joystickDir) * delta * speed
			player.position.z -= controllerDir.dot(joystickDir) * delta * speed
		}
	})
	return null
}
