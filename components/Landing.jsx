import Image from "next/image";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import HomePageMoves from "./Models/homePage";
import backima from '../public/img/bg.png';
import classes from './Landing.module.css';
import Button from "./Button";
import { faBars, faFaceGrinBeam } from '@fortawesome/free-solid-svg-icons';
import triangle1 from '../public/img/triangle1.png'
import triangle2 from '../public/img/triangle2.png'
import triangle3 from '../public/img/triangle3.png'
import triangle4 from '../public/img/triangle4.png'
import triangle5 from '../public/img/triangle5.png'
import Link from "next/link";
import useSound from 'use-sound';
import { welcome, changeWelcome, colors, dances, pages, backgroundCircles, c1, c2, c3, opac, mousePositionX, mousePositionY, setMousePosition } from "./store";
import { motion } from "framer-motion";

export default function Landing1() {

    const triangles = [triangle1, triangle2, triangle3, triangle4, triangle5];
    const [myWelcome, setMyWelcome] = useState(welcome)
    const [action, setAction] = useState(10);
    const [hoveredCircle, setHoveredCircle] = useState(6);
    const [currentDance, setCurrentDance] = useState(6);
    const [currentColor, setCurrentColor] = useState(6);

    const [mousePosition, setMouse] = useState({
        x: mousePositionX,
        y: mousePositionY,
    });


    const [cursorVariant, setCursorVariant] = useState("default")

    useEffect(() => {

        const mouseMove = (e) => {
            // setMousePosition(e.clientX,e.clientY)
            setMouse({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener('mousemove', mouseMove);
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])


    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
        },
        text: {
            height: 80,
            width: 80,
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            backgroundColor: "white",
            mixBlendMode: "difference",
            opacity: 1
        },
        button: {
            height: 80,
            width: 80,
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            backgroundColor: "red",
            mixBlendMode: "difference",
            opacity: 1
        },
        hover: {
            height: 80,
            width: 80,
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            backgroundColor: `${colors[hoveredCircle]}`,
            mixBlendMode: "difference",
            opacity: 1
        }
    }

    const buttonEnter = () => setCursorVariant("button");
    const buttonLeave = () => setCursorVariant("default");
    const textEnter = () => setCursorVariant("text");
    const textLeave = () => setCursorVariant("default");
    const hoverEnter = () => setCursorVariant("hover");
    const hoverLeave = () => setCursorVariant("default");


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

    return (
        <>
            <motion.div className="cursor" variants={variants} animate={cursorVariant}>

            </motion.div>
            {
                myWelcome ?
                    <div className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
                        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                            <video className="min-w-full min-h-full absolute object-cover" src="/background.mp4" type="video/mp4" autoPlay muted loop></video>
                        </div>
                        <div className="welcomeDiv video-content">
                            <motion.h1 initial={{ y: -10, opacity: 0, scale: 0.5 }}
                                animate={{ x: 0, y: 0, opacity: 1, scale: 1 }} transition={{ delay: 1 }} onMouseEnter={textEnter} onMouseLeave={textLeave}>Let&apos;s get started</motion.h1>
                            <motion.div initial={{ y: -10, opacity: 0, scale: 0.5 }}
                                animate={{ x: 0, y: 0, opacity: 1, scale: 1 }} transition={{ delay: 1.2 }} onClick={() => { changeWelcome(); setMyWelcome(false); buttonLeave() }} onMouseEnter={buttonEnter} onMouseLeave={buttonLeave}>EXPLORE</motion.div>
                        </div>
                    </div>


                    :
                    <div className={classes.main} >

                        <div className={classes.buttonDiv}>
                            <motion.div initial={{ y: 0, opacity: 0, scale: 0.5 }}
                                animate={{ x: 0, y: 0, opacity: 1, scale: 1 }} transition={{ delay: 4 }}  onClick={() => setMousePosition(mousePosition.x, mousePosition.y)} onMouseEnter={buttonEnter} onMouseLeave={buttonLeave}>
                                <Button href={"/category"} icons={faBars} color="red" iconColor="white" text="Category" direction="left" />

                            </motion.div>
                            <motion.div initial={{ y: 0, opacity: 0, scale: 0.5 }}
                                animate={{ x: 0, y: 0, opacity: 1, scale: 1 }} transition={{ delay: 4 }}  onClick={() => setMousePosition(mousePosition.x, mousePosition.y)} onMouseEnter={buttonEnter} onMouseLeave={buttonLeave}>

                                <Button href={"/creators"} icons={faFaceGrinBeam} color="red" iconColor="white" text="About creators" direction="left" />
                            </motion.div>
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
                            const returnClassName = (index) => {
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

                                <div className={returnClassName(index)} key={index} style={{ height: `${diameter}px`, width: `${diameter}px` }}>
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

                            <motion.div initial={{ y: 0, opacity: 0, scale: 0.5 }}
                                animate={{ x: 0, y: 0, opacity: 1, scale: 1 }} transition={{ delay: 1.5 }} className={classes.contentDiv} onMouseEnter={textEnter} onMouseLeave={textLeave}>
                                <h1 style={{ color: `${colors[currentColor]}` }}>
                                    {dances[currentDance]}
                                </h1>
                                {/* <h4>
                                become proficient in <span style={{ color: "white" }} >{dances[currentDance]}</span>
                            </h4> */}
                            </motion.div>

                            {Array(13).fill(1).map((el, i) =>

                                <li key={i} style={{ transform: `rotate(calc(360deg / 12 * ${i}))` }} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
                                    <Link href={`${pages[i]}`} >

                                        {hoveredCircle == i ?
                                            <motion.div initial={{ y: 0, opacity: 0, scale: 0.5 }}
                                                animate={{ x: 0, y: 0, opacity: 1, scale: 1 }} transition={{ delay: `1.${i}` }} style={{ border: `2px solid ${colors[i]}`, }}
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
                                            </motion.div> :
                                            <motion.div initial={{ y: 0, opacity: 0, scale: 0.5 }}
                                                animate={{ x: 0, y: 0, opacity: 1, scale: 1 }} transition={{ delay: `1.${i}` }} style={{ borderColor: `${colors[i]}` }}
                                                className={classes.outerCircle}
                                                onMouseEnter={() => handleMouseEnter(i)}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                <span style={{
                                                    backgroundColor: "white"
                                                }}
                                                    className={classes.dot}></span>
                                            </motion.div>
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
