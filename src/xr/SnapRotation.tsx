import { useController, useXR } from '@react-three/xr'
import { useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import { XRHandedness } from 'three'

type Props = {
	hand: XRHandedness
	increment: number
	threshold: number
}

/**
 * Rotate player at fixed increments using an XR controller's joystick
 * @param hand Which hand will control rotation
 * @param increment How much to rotate per snap
 * @param threshold Joystick value at which to trigger a snap
 */
export function SnapRotation({
	hand = 'right',
	increment = Math.PI / 4,
	threshold = 0.6,
}: Props) {
	const controller = useController(hand)
	const { player } = useXR()
	const snapping = useRef(false)
	useFrame(() => {
		if (controller?.inputSource?.gamepad?.axes?.length > 0) {
			const [, , ax] = controller.inputSource.gamepad.axes
			if (Math.abs(ax) > threshold) {
				!snapping.current && player.rotateY(-increment * Math.sign(ax))
				snapping.current = true
			} else {
				snapping.current = false
			}
		}
	})
	return null
}
