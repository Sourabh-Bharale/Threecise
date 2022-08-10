import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import DanceoffVro from "../components/Models/danceoff"
import CanvasScreen from '../components/CanvasScreen'
import classes from "./dance.module.css"

export default function Dance() {
    const actions = ["idle","Belly Dance","Shopping Cart","Break Dance1","Dance Tweark","Flair","Gagnam Style","House Dance","Silly","Soul Spin Combo"]
    const [action, setAction] = useState(actions[1]);
    
    return (
        <div>
            <div className={classes.outerDiv}>

                <Canvas alpha={true}>
                    <ambientLight intensity={0.5} />
                    <pointLight intensity={2} position={[-1, 1, 3]} color="#A5C9CA" />
                    <pointLight intensity={2} position={[1, 1, 3]} color="#395B64" />
                    <pointLight intensity={2} position={[0, 3, -10]} color="#2C3639" />
                    <OrbitControls enableDamping={true} enableZoom={true} />
                    <Suspense fallback={null}>
                        <DanceoffVro action={action} />
                    </Suspense>
                </Canvas>
            </div>
            <CanvasScreen />
            

        </div>
    )
}