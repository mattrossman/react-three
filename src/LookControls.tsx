import { useEffect } from 'react'
import { useThree } from 'react-three-fiber'
import { Euler } from 'three'

// Scratch variables
const euler = new Euler(0, 0, 0, 'YXZ')

interface State {
	drag: boolean
	prev: {
		screenX: number
		screenY: number
	}
}

/**
 * Click and drag to rotate the default camera.
 */
export function LookControls() {
	const { gl, camera } = useThree()
	useEffect(() => {
		const state: State = {
			drag: false,
			prev: { screenX: 0, screenY: 0 },
		}
		gl.domElement.style.cursor = 'grab'
		const onPointerDown = (e: PointerEvent) => {
			state.drag = true
			gl.domElement.style.cursor = 'grabbing'
			gl.domElement.setPointerCapture(e.pointerId)
			state.prev.screenX = e.screenX
			state.prev.screenY = e.screenY
		}
		const onPointerUp = () => {
			state.drag = false
			gl.domElement.style.cursor = 'grab'
		}
		const onPointerMove = (e: PointerEvent) => {
			if (state.drag) {
				const dx = e.screenX - state.prev.screenX
				const dy = e.screenY - state.prev.screenY
				euler.setFromQuaternion(camera.quaternion)
				euler.y -= dx * 0.002
				euler.x -= dy * 0.002
				camera.quaternion.setFromEuler(euler)
			}
			state.prev.screenX = e.screenX
			state.prev.screenY = e.screenY
		}
		gl.domElement.addEventListener('pointermove', onPointerMove)
		gl.domElement.addEventListener('pointerdown', onPointerDown)
		gl.domElement.addEventListener('pointerup', onPointerUp)
		return () => {
			gl.domElement.removeEventListener('pointermove', onPointerMove)
			gl.domElement.removeEventListener('pointerdown', onPointerDown)
			gl.domElement.removeEventListener('pointerup', onPointerUp)
		}
	})
	return null
}
