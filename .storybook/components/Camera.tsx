import React, {FC, useEffect, useRef} from 'react'
import {useThree, useFrame, PerspectiveCameraProps, extend, Object3DNode, MeshProps} from 'react-three-fiber'
import { PerspectiveCamera } from 'three'
import { useDebugger } from "../../src"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            orbitControls: Object3DNode<OrbitControls, typeof OrbitControls>
        }
    }
}

extend({ OrbitControls });

interface CameraProps extends PerspectiveCameraProps {
    showDebug?: boolean
}

const Camera:FC<CameraProps> = ({showDebug= true, ...props}) => {
    const ref = useRef<PerspectiveCamera | null>(null)
    const controls = useRef<OrbitControls| null>(null)

    const { camera, setDefaultCamera, gl } = useThree()
    useDebugger(showDebug ? ref : null)

    // Make the camera known to the system
    useEffect(() => {
        if (ref.current) setDefaultCamera(ref.current)
    }, [setDefaultCamera])

    // Update it every frame
    useFrame(() => {
        if (ref.current) ref.current.updateMatrixWorld()
        if (controls.current) controls.current.update()
    })
    return (
        <>
            <perspectiveCamera ref={ref} {...props} />
            <orbitControls ref={controls} args={[camera, gl.domElement]} />
        </>
    )
}

export default Camera
