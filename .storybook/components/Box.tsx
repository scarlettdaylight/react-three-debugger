import React, { useRef, useState, FC} from 'react'
import {  MeshProps, useFrame } from 'react-three-fiber'
import {Mesh} from 'three'
import { useDebugger } from "../../src"

interface BoxProps extends MeshProps {
    showDebug?: boolean
}

const Box:FC<BoxProps> = ({showDebug= true, ...props}) => {
    // This reference will give us direct access to the mesh
    const mesh = useRef<Mesh | null>(null)
    useDebugger(showDebug ? mesh : null)

    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
        if (mesh.current) mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
            onClick={(_event) => setActive(!active)}
            onPointerOver={(_event) => setHover(true)}
            onPointerOut={(_event) => setHover(false)}>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

export default Box
