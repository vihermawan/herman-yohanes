
import React, { Suspense, useRef, useState,useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import Model from './Model'

export default function Herman3D() {
    const ref = useRef()
    const [darkMode] = useState( localStorage.getItem("darkMode"))
    const [intensity, setIntensity] = useState(1)

    useEffect(()=> {
        if(darkMode === true){
            setIntensity(0.2)
        }else{
            setIntensity(1)
        }
    },[darkMode])

    return (
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
            <Suspense fallback={null}>
            <Stage controls={ref} preset="rembrandt" intensity={intensity}  environment="night">
                <Model />
            </Stage>
            </Suspense>
            <OrbitControls ref={ref} autoRotate />
        </Canvas>
    )
}