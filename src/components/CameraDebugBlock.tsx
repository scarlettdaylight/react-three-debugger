import React, {FC, MutableRefObject} from 'react'
import {DEFAULT_STYLE} from "./styles"
import {PerspectiveCamera} from "three"

type CameraDebugBlockProps = {
    obj: MutableRefObject<PerspectiveCamera>
}

const CameraDebugBlock: FC<CameraDebugBlockProps> = ({ obj }) => {
    return (
        <div style={DEFAULT_STYLE}>
            <div>Camera:</div>
            <div style={{fontSize: 12}}>uuid: {obj.current.uuid}</div>
            <div>position.x: {obj.current.position.x.toFixed(5)}</div>
            <div>position.y: {obj.current.position.y.toFixed(5)}</div>
            <div>position.z: {obj.current.position.z.toFixed(5)}</div>
            <div>fov: {obj.current.fov}</div>
            <div>zoom: {obj.current.zoom}</div>
            <div>near: {obj.current.near}</div>
            <div>far: {obj.current.far}</div>
        </div>
    )
}

export default CameraDebugBlock
