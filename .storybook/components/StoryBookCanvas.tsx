import React, {FC} from 'react'
import { Canvas } from 'react-three-fiber'

const StoryBookCanvas:FC = ({children}) => {
    return (
            <div style={{ width: '100%', height: 600 }}>
                <Canvas shadowMap pixelRatio={[1, 1.5]}>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    {children}
                </Canvas>
            </div>
    )
}

export default StoryBookCanvas
