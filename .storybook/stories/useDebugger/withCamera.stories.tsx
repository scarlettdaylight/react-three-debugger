import React from 'react';
import Box from "../../components/Box"
import Camera from "../../components/Camera"
import StoryBookCanvas from "../../components/StoryBookCanvas"

const DebuggerWithCameraScene = () => {
    return (
        <StoryBookCanvas>
            <Box showDebug={false}/>
            <Box showDebug={false} position={[1,1,1]} />
            <Camera position={[2,6,6]} />
        </StoryBookCanvas>
    )
}

export default {
    title: 'useDebugger/Camera',
    component: DebuggerWithCameraScene,
};

export const DebuggerWithCameraSt = () => <DebuggerWithCameraScene />

DebuggerWithCameraSt.story = {
    name: 'Default',
}
