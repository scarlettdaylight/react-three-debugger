import React, {FC, MutableRefObject} from 'react'
import {DEFAULT_STYLE, THEME_BLUE} from "./styles"
import { Mesh } from 'three'

const MESH_BLOCK_STYLE = {
    ...DEFAULT_STYLE,
    ...THEME_BLUE
}

type MeshDebugBlockProps = {
    obj: MutableRefObject<Mesh>
}

const MeshDebugBlock:FC<MeshDebugBlockProps> = ({ obj }) => {
    return (
        <div style={MESH_BLOCK_STYLE}>
            <div style={{fontSize: 16}}>Mesh:</div>
            <div style={{fontSize: 12}}>uuid: {obj.current.uuid}</div>
            <hr />
            <div>position.x: {obj.current.position.x.toFixed(5)}</div>
            <div>position.y: {obj.current.position.y.toFixed(5)}</div>
            <div>position.z: {obj.current.position.z.toFixed(5)}</div>
            <div>rotation.x: {obj.current.rotation.x.toFixed(5)}</div>
            <div>rotation.y: {obj.current.rotation.y.toFixed(5)}</div>
            <div>rotation.z: {obj.current.rotation.z.toFixed(5)}</div>
        </div>
    )
}

export default MeshDebugBlock
