import ReactDOM from 'react-dom'
import React, {MutableRefObject, useEffect, useRef} from 'react'
import { useFrame } from 'react-three-fiber'
import CameraDebugBlock from "../components/CameraDebugBlock"
import MeshDebugBlock from "../components/MeshDebugBlock"
import {Mesh, PerspectiveCamera} from "three"

type UseDebuggerProps = (
    obj: MutableRefObject<PerspectiveCamera | null> | MutableRefObject<Mesh | null> | null,
    config?: {
        rootID: string
    }
) => void

export const useDebugger: UseDebuggerProps = (obj, config = { rootID: 'root' }) => {
    const wrapperID = 'react-three-debugger'
    const {rootID} = config

    const rootDom = useRef(document.getElementById(rootID))
    const wrapperDom = useRef(document.getElementById(wrapperID))
    const debugDom = useRef<HTMLElement | null>(null)

    useEffect(() => {
        if (!obj?.current?.uuid) {
            return
        }

        const debuggerID = `debug-${obj?.current?.uuid}`

        //find the root to insert wrapper, if no root, append root to body
        if (!rootDom.current) {
            const rootNode = document.createElement('div')
            rootNode.id = rootID
            document.getElementsByTagName('body')[0].appendChild(rootNode)
            rootDom.current = document.getElementById(rootID)
        }

        //find the wrapper to insert item debug block, if no wrapper (1st debug item), append wrapper to root
        if (rootDom.current && !wrapperDom.current) {
            const wrapperNode = document.createElement('div')
            wrapperNode.id = wrapperID
            wrapperNode.style.position = 'absolute'
            wrapperNode.style.top = '4px'
            wrapperNode.style.left = '4px'
            rootDom.current.appendChild(wrapperNode)
            wrapperDom.current = document.getElementById(wrapperID)
        }

        debugDom.current = document.getElementById(debuggerID)
        if (wrapperDom.current && !debugDom.current) {
            const debugNode = document.createElement('div')
            debugNode.id = debuggerID
            debugNode.style.marginBottom = '2px'
            wrapperDom.current.appendChild(debugNode)
            debugDom.current = document.getElementById(debuggerID)
        }
    }, [obj?.current?.uuid])

    useFrame(() => {
        if (!obj?.current) return

        const BlockComp = obj?.current.type.includes('Camera') ? CameraDebugBlock : MeshDebugBlock

        if (debugDom.current) {
            ReactDOM.render(<BlockComp obj={obj} />, debugDom.current)
        }
    })
}

export default useDebugger
