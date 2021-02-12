import { useEffect, useRef } from 'react'
import { useFrame, useThree } from 'react-three-fiber'
import { Vector3 } from 'three'

// Scratch Variable
const vec = new Vector3()

// Reference to a set of active KeyboardEvent.code entries
const useCodes = () => {
  const codes = useRef(new Set())
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) =>  {
			codes.current.add(e.code)
			e.stopPropagation()
		}
    const onKeyUp = (e: KeyboardEvent) => {
			codes.current.delete(e.code)
			e.stopPropagation()
		}
		window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
    }
  }, [])
  return codes
}

/**
 * Control the default camera position with WASD keys.
 * Rotation logic from [`PointerLockControls`](three/examples/jsm/controls/PointerLockControls.js)
 */
export function WasdControls() {
  const { camera } = useThree()
  const code = useCodes()
  const moveForward = (distance: number) => {
    vec.setFromMatrixColumn(camera.matrix, 0)
    vec.crossVectors(camera.up, vec)
    camera.position.addScaledVector(vec, distance)
  }
  const moveRight = (distance: number) => {
    vec.setFromMatrixColumn(camera.matrix, 0)
    camera.position.addScaledVector(vec, distance)
  }
  useFrame((_, delta) => {
    const speed = code.current.has('ShiftLeft') ? 5 : 2
    if (code.current.has('KeyW')) moveForward(delta * speed)
    if (code.current.has('KeyA')) moveRight(-delta * speed)
    if (code.current.has('KeyS')) moveForward(-delta * speed)
    if (code.current.has('KeyD')) moveRight(delta * speed)
  })
  return null
}