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
import useSound from 'use-sound';
import { welcome, changeWelcome, colors, dances, pages , backgroundCircles ,c1,c2,c3,opac } from "../pages/store";

export default function Landing1() {

    const [myWelcome, setMyWelcome] = useState(welcome)

    const [action, setAction] = useState(10);



    const triangles = [triangle1, triangle2, triangle3, triangle4, triangle5];


    const [hoveredCircle, setHoveredCircle] = useState(6);
    const [currentDance, setCurrentDance] = useState(6);
    const [currentColor, setCurrentColor] = useState(6);


    const handleMouseEnter = (i) => {
        hoverPlay()
        setHoveredCircle(i);
        setAction(i);
        setCurrentDance(i);
        setCurrentColor(i);
    };
    const handleMouseLeave = () => {
        // hoverStop()
        setHoveredCircle(6);
        setAction(6);
        setCurrentDance(6);
        setCurrentColor(6);
    };


    // soundeffects
    const hoverSfx = '/sounds/hover.mp3';
    const [hoverPlay, { hoverStop }] = useSound(hoverSfx);

    const pageChangeSFX = '/sounds/pageLoad.mp3'
    const [pageChange] = useSound(pageChangeSFX)

    const Welcome = () => {
        return (
            <div className="welcomeDiv">
                <h1 >Let's get started</h1>
                <div onClick={() => { changeWelcome(); setMyWelcome(false) }} >EXPLORE</div>
                <h1>{welcome}</h1>
            </div>
        )
    }


    return (
        <>
            {myWelcome ? <Welcome /> :
                <div className={classes.main} >

                    <div className={classes.buttonDiv}>
                        <Button href={"/category"} icons={faBars} color="red" iconColor="white" text="Category" direction="left" />
                        <Button href={"/creators"} icons={faFaceGrinBeam} color="red" iconColor="white" text="About creators" direction="left" />
                    </div>

                    <div className={classes.backgroundImageDiv}>
                        <Image src={backima} alt="logo"></Image>
                    </div>

                    {backgroundCircles.map((circleIndex, index) => {
                        const returnArray = (index) => {
                            if (index === 1) {
                                return c1
                            }
                            else if (index === 2) {
                                return c2
                            }
                            else {
                                return c3
                            }
                        }
                        const nums = circleIndex.numberOfItems;
                        const diameter = circleIndex.height;
                        const origin = diameter / 2;
                        const returnClassName=(index)=>{
                            if (index === 1) {
                                return classes.xxx
                            }
                            else if (index === 2) {
                                return classes.yyy
                            }
                            else {
                                return classes.zzz
                            }
                        }
                        return (

                            <div className={returnClassName(index)} style={{ height: `${diameter}px`, width: `${diameter}px` }}>
                                {Array(nums).fill(1).map((el, i) =>
                                    <>
                                        <li className={classes.backgroundTriangles} key={i} style={{ transform: `rotate(calc(360deg / ${nums} * ${i}))`, transformOrigin: `${origin}px`, opacity: `${opac[i]}` }}>
                                            <Image key={i} src={triangles[returnArray(index)[i] - 1]} alt="triangle"></Image>
                                        </li>
                                    </>
                                )}
                            </div>
                        )
                    })}



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
                            <h1 style={{ color: `${colors[currentColor]}` }}>
                                {dances[currentDance]}
                            </h1>
                            <h4>
                                become proficient in <span style={{ color: "white" }} >{dances[currentDance]}</span>
                            </h4>
                        </div>

                        {Array(13).fill(1).map((el, i) =>

                            <li key={i} style={{ transform: `rotate(calc(360deg / 12 * ${i}))` }}>
                                <Link href={`${pages[i]}`} >

                                    {hoveredCircle == i ?
                                        <div style={{ border: `2px solid ${colors[i]}`, }}
                                            className={classes.outerCircle}
                                            onMouseEnter={() => {
                                                handleMouseEnter(i)

                                            }}
                                            onMouseLeave={() => {
                                                handleMouseLeave
                                            }}

                                        >
                                            <span style={{
                                                backgroundColor: `${colors[i]}`, width: "15px", height: "15px"
                                            }}
                                                className={classes.dot} ></span>
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
            }
        </>
    )
}
