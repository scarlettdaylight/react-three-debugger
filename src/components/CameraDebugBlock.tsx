import React, {FC, MutableRefObject} from 'react'
import {DEFAULT_STYLE, THEME_GREEN} from "./styles"
import {PerspectiveCamera} from "three"

const CAMERA_BLOCK_STYLE = {
    ...DEFAULT_STYLE,
    ...THEME_GREEN
}

type CameraDebugBlockProps = {
    obj: MutableRefObject<PerspectiveCamera>
}

const CameraDebugBlock: FC<CameraDebugBlockProps> = ({ obj }) => {
    return (
        <div style={CAMERA_BLOCK_STYLE}>
            <div>Camera:</div>
            <div style={{fontSize: 12}}>uuid: {obj.current.uuid}</div>
            <hr />
            <div>position.x: {obj.current.position.x.toFixed(5)}</div>
            <div>position.y: {obj.current.position.y.toFixed(5)}</div>
            <div>position.z: {obj.current.position.z.toFixed(5)}</div>
            <hr />
            <div>fov: {obj.current.fov}</div>
            <div>zoom: {obj.current.zoom}</div>
            <div>near: {obj.current.near}</div>
            <div>far: {obj.current.far}</div>
        </div>
    )
}

export default CameraDebugBlock
