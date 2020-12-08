import React, {FC, MutableRefObject} from 'react'
import {DEFAULT_STYLE} from "./styles"
import { Mesh } from 'three'

type MeshDebugBlockProps = {
    obj: MutableRefObject<Mesh>
}

const MeshDebugBlock:FC<MeshDebugBlockProps> = ({ obj }) => {
    return (
        <div style={DEFAULT_STYLE}>
            <div>Mesh:</div>
            <div style={{fontSize: 12}}>uuid: {obj.current.uuid}</div>
            <div>position.x: {obj.current.position.x.toFixed(5)}</div>
            <div>position.y: {obj.current.position.y.toFixed(5)}</div>
            <div>position.z: {obj.current.position.z.toFixed(5)}</div>
            <div>rotation.x: {obj.current.rotation.x.toFixed(5)}</div>
        </div>
    )
}

export default MeshDebugBlock
