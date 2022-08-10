import Image from "next/image";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import HomePageMoves from "./Models/homePage";
import backima from '../public/img/bg.png';
import classes from './Landing1.module.css';
import Button from "./Button";
import { faBars, faFaceGrinBeam } from '@fortawesome/free-solid-svg-icons';
import triangle1 from '../public/img/triangle1.png'
import triangle2 from '../public/img/triangle2.png'
import triangle3 from '../public/img/triangle3.png'
import triangle4 from '../public/img/triangle4.png'
import triangle5 from '../public/img/triangle5.png'
import './Landing1.module.css';
import Link from "next/link";

export default function Landing1({ index }) {

    const [action, setAction] = useState(10);
    const [c1, setC1] = useState([1, 2, 3, 4, 5, 1, 2, 3, 4, 5])
    const [c2, setC2] = useState([2, 3, 1, 5, 4, 4, 5, 3, 2, 1])
    const [c3, setC3] = useState([5, 4, 2, 3, 1, 1, 3, 4, 2, 2])
    const [opac, setOpac] = useState([0.5, 0.4, 1, 0.3, 0.1, 0.1, 0.3, 0.4, 1, 0.2])

    const colors = ['#A500F2', '#FFCF23', '#64D6E2', '#EF9F64', '#9988CD', '#A500F2', '#FFCF23', '#64D6E2', '#EF9F64', '#9988CD', '#A500F2', '#FFCF23', '#FFCF23'];
    const triangles = [triangle1, triangle2, triangle3, triangle4, triangle5];
    const dances = ["Dance", "Karate", "Excercise", "yoga", "Dance", "Excercise", "Excercise", "yoga", "Dance", "Dance", "Karate", "Excercise", "yoga"];

    const [hoveredCircle, setHoveredCircle] = useState(6);
    const [currentDance, setCurrentDance] = useState(6);
    const [currentColor, setCurrentColor] =useState(6);

    // const giveRandom = () => {
    //     return Math.floor(Math.random() * 5);
    // }

    const handleMouseEnter = (i) => {
        setHoveredCircle(i);
        setAction(i);
        setCurrentDance(i);
        setCurrentColor(i);
    };
    const handleMouseLeave = () => {
        setHoveredCircle(6);
        setAction(6);
        setCurrentDance(6);
        setCurrentColor(6);
    };

    return (
        <div className={classes.main} >

            <div className={classes.buttonDiv}>
                <Button href={"/category"} icons={faBars} color="red" iconColor="white" text="Category" />
                <Button href={"/creators"} icons={faFaceGrinBeam} color="red" iconColor="white" text="About creators" />
            </div>

            <div className={classes.backgroundImageDiv}>
                <Image src={backima} alt="logo"></Image>
            </div>

            <div className={classes.xxx} style={{ height: '800px', width: '800px' }}>
                {Array(5).fill(1).map((el, i) =>
                    <>
                        <li className={classes.backgroundTriangles} key={i} style={{ transform: `rotate(calc(360deg / 5 * ${i}))`, transformOrigin: "400px", opacity: `${opac[i]}` }}>
                            <Image key={i} src={triangles[c1[i] - 1]} ></Image>
                        </li>
                    </>
                )}
            </div>
            <div className={classes.yyy} style={{ height: '900px', width: '900px' }}>
                {Array(7).fill(1).map((el, i) =>
                    <>
                        <li className={classes.backgroundTriangles} key={i} style={{ transform: `rotate(calc(360deg / 7 * ${i}))`, transformOrigin: "450px", opacity: `${opac[i]}` }}>
                            <Image key={i} src={triangles[c2[i] - 1]} ></Image>
                        </li>
                    </>
                )}
            </div>
            <div className={classes.zzz} style={{ height: '860px', width: '860px' }}>
                {Array(8).fill(1).map((el, i) =>
                    <>
                        <li className={classes.backgroundTriangles} key={i} style={{ transform: `rotate(calc(360deg / 8 * ${i}))`, transformOrigin: "430px", opacity: `${opac[i]}` }}>
                            <Image key={i} src={triangles[c3[i] - 1]} ></Image>
                        </li>
                    </>
                )}
            </div>

            <div className={classes.circleContainer}>
                
                <div className={classes.canvasDiv}>
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
                </div>
                <div className={classes.contentDiv}>
                    <h1 style={{color:`${colors[currentColor]}`}}>
                        {dances[currentDance]}
                    </h1>
                    <h4>
                        become proficient in <span style={{color:"white"}}>{dances[currentDance]}</span>
                    </h4>
                </div>

                {Array(13).fill(1).map((el, i) =>
                
                    <li key={i} style={{ transform: `rotate(calc(360deg / 12 * ${i}))` }}>
                        <Link href="/dance">
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
                                onMouseLeave={handleMouseLeave}
                            >
                                <span style={{
                                    backgroundColor: "white"
                                }}
                                    className={classes.dot}></span>
                            </div>
                        }
                        </Link>
                    </li>
                )}
                
            </div>
        </div>
    )
}
