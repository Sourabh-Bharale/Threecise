import Image from "next/image";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import HomePageMoves from "./Models/homePage";
import backima from '../public/img/bg.png';
import classes from './Landing1.module.css';

export default function Landing1({ index }) {
  
    const [action, setAction] = useState(1);

    const colors = ['#A500F2', '#FFCF23', '#64D6E2', '#EF9F64', '#9988CD', '#A500F2', '#FFCF23', '#64D6E2', '#EF9F64', '#9988CD', '#A500F2', '#FFCF23', '#FFCF23'];

    const [hoveredCircle, setHoveredCircle] = useState(1);

    const handleMouseEnter = (i) => {
        setHoveredCircle(i);
        setAction(i);
    };
    const handleMouseLeave = () => {
        setHoveredCircle(1);
        setAction(1);
    };

    return (
        <div className={classes.main} >
        
            <div className={classes.backgroundImageDiv}>
                <Image src={backima} alt="logo"></Image>
            </div>

            <div class={classes.circleContainer}>
                <Canvas alpha={false}>
                    <ambientLight intensity={0.5} />
                    <pointLight intensity={2} position={[-1, 1, 3]} color="#2C3333" />
                    <pointLight intensity={2} position={[1, 1, 3]} color="#395B64" />
                    <pointLight intensity={2} position={[0, 3, -10]} color="white" />
                    <OrbitControls enableDamping={true} enableZoom={true} />
                    <Suspense fallback={null}>
                        <HomePageMoves action={action} />
                    </Suspense>
                </Canvas>

                {Array(12).fill(1).map((el, i) =>
                    <li key={i} style={{ transform: `rotate(calc(360deg / 12 * ${i}))` }}>
                        {hoveredCircle == i ?
                            <div style={{ border: `2px solid ${colors[i]}`, }}
                                className={classes.outerCircle}
                                onMouseEnter={() => handleMouseEnter(i)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <span style={{
                                    backgroundColor: `${colors[i]}`, width: "15px", height: "15px"
                                }}
                                    className={classes.dot}></span>
                            </div> :
                            <div style={{ borderColor: `${colors[i]}` }}
                                className={classes.outerCircle}
                                onMouseEnter={() => handleMouseEnter(i)}
                                onMouseLeave={handleMouseLeave}>
                                <span style={{
                                    backgroundColor: "white"
                                }}
                                    className={classes.dot}></span>
                            </div>
                        }

                    </li>
                )}
            </div>
        </div>
    )
}
