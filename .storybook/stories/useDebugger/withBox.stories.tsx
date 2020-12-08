import React from 'react';
import Box from "../../components/Box"
import StoryBookCanvas from "../../components/StoryBookCanvas"

const DebuggerWithMeshScene = () => {
    return (
        <StoryBookCanvas>
            <Box />
            <Box position={[1,1,1]} />
        </StoryBookCanvas>
    )
}

export default {
    title: 'useDebugger/Mesh',
    component: DebuggerWithMeshScene,
};

export const DebuggerWithMeshSt = () => <DebuggerWithMeshScene />

DebuggerWithMeshSt.story = {
    name: 'Default',
}
