import React, { Suspense, useEffect, useState } from 'react';
import classes from './canvasScreen.module.css';
import lightImage from '../public/img/lightbg.png';
import Image from 'next/image';
import Button from './Button';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faVolumeHigh, faHouseChimneyCrack, faArrowUp, faArrowDown, faBookOpen, faStar } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import DanceoffVro from "../components/Models/danceoff"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import EMode2 from "../components/Models/excercise2";
import { mousePositionX, mousePositionY, setMousePosition, currentDance, nextDance, previousDance, danceActions, colors, currentExercise, nextExercise, previousExercise, currentFunMoves, currentSquats, currentThriller, currentHipHop, previousFunMoves, nextFunMoves, previousHipHop, nextHipHop, previousSquats, previousThriller, nextSquats,  } from './store';
import HMoves from './Models/hipHop';
import Funmoves from './Models/funMoves';
import SModel from './Models/squats';
import TMoves from "./Models/thrillerMoves";

library.add(faBars, faVolumeHigh, faHouseChimneyCrack, faArrowUp, faArrowDown, faBookOpen);

export default function CanvasScreen(props) {

    const buttonEnter = () => setCursorVariant("button");
    const buttonLeave = () => setCursorVariant("default");
    const textEnter = () => setCursorVariant("text");
    const textLeave = () => setCursorVariant("default");
    
    const [danceIndex, setDanceIndex] = useState(currentDance);
    const [exerciseIndex, setExerciseIndex] = useState(currentExercise);
    const [funMovesIndex, setFunMovesIndex] = useState(currentFunMoves);
    const [hipHopIndex, setHipHopIndex] = useState(currentHipHop);
    const [squatsIndex, setSquatsIndex] = useState(currentSquats);
    const [thrillerIndex, setThrillerIndex] = useState(currentThriller);
    
    const canvasArray = [ <DanceoffVro action={danceActions[props.page][currentDance]} />,<EMode2 action={danceActions[props.page][currentExercise]}/>, <Funmoves action={danceActions[props.page][currentFunMoves]} />, <HMoves action={danceActions[props.page][currentHipHop]} />, <SModel action={danceActions[props.page][currentSquats]}/>, <TMoves action={danceActions[props.page][currentThriller]}/>  ]
    const indexArray =[currentDance,currentExercise, currentFunMoves, currentHipHop, currentSquats, currentThriller];


    const [currentCategory, setCursorCategory] =useState(props.id);
    const [currentColor,setCurrentColor] = useState(colors[indexArray[currentCategory]]);
    const [currentCount,setCurrentCount] = useState(currentCategory);

    const hoverSfx = '/sounds/hover.mp3';
    // const [hoverPlay, { hoverStop }] = useSound(hoverSfx);
    // const currentColors =()=>{
    //     return currentColor
    // }
    let num=indexArray[props.id];

    const handlePrevious = () => {

        if (props.page === "dance") {
            previousDance(danceIndex);
            setDanceIndex(currentDance);
            setCurrentColor(colors[danceIndex+1]);
            setCurrentCount(currentDance)
            num=currentDance;
        }

        if (props.page === "exercise") {
            previousExercise(exerciseIndex);
            setExerciseIndex(currentExercise);
            setCurrentColor(colors[exerciseIndex+1]);
            setCurrentCount(currentExercise)
            num=currentExercise;
        }
        if (props.page === "funMoves") {
            previousFunMoves(funMovesIndex);
            setFunMovesIndex(currentFunMoves);
            setCurrentColor(colors[funMovesIndex+1]);
            setCurrentCount(currentFunMoves)
            num=currentFunMoves;
        }

        if (props.page === "hipHop") {
            previousHipHop(hipHopIndex);
            setHipHopIndex(currentHipHop);
            setCurrentColor(colors[hipHopIndex+1]);
            setCurrentCount(currentHipHop)
            num=currentHipHop;
        }
        if (props.page === "squats") {
            previousSquats(squatsIndex);
            setSquatsIndex(currentSquats);
            setCurrentColor(colors[squatsIndex+1]);
            setCurrentCount(currentSquats)
            num=currentSquats;
        }

        if (props.page === "thriller") {
            previousThriller(thrillerIndex);
            setSquatsIndex(currentThriller);
            setCurrentColor(colors[thrillerIndex+1]);
            setCurrentCount(currentThriller)
            num=currentThriller;
        }
    }

    const handleNext = () => {
        if (props.page === "dance") {
            nextDance(danceIndex);
            setDanceIndex(currentDance);
            setCurrentColor(colors[danceIndex+1]);
            setCurrentCount(currentDance)
            num=currentDance;
        }
        if (props.page === "exercise") {
            nextExercise(exerciseIndex);
            setExerciseIndex(currentExercise);
            setCurrentColor(colors[exerciseIndex+1]);
            setCurrentCount(currentExercise)
            num=currentExercise;
        }
        if (props.page === "funMoves") {
            nextFunMoves(funMovesIndex);
            setFunMovesIndex(currentFunMoves);
            setCurrentColor(colors[funMovesIndex+1]);
            setCurrentCount(currentFunMoves)
            num=currentFunMoves;
        }
        if (props.page === "hipHop") {
            nextHipHop(hipHopIndex);
            setHipHopIndex(currentHipHop);
            setCurrentColor(colors[hipHopIndex+1]);
            setCurrentCount(currentHipHop)
            num=currentHipHop;
        }

        if (props.page === "squats") {
            nextSquats(squatsIndex);
            setSquatsIndex(currentSquats);
            setCurrentColor(colors[squatsIndex+1]);
            setCurrentCount(currentSquats)
            num=currentSquats;
        }
        if (props.page === "thriller") {
            nextThriller(thrillerIndex);
            setSquatsIndex(currentThriller);
            setCurrentColor(colors[thrillerIndex+1]);
            setCurrentCount(currentThriller)
            num=currentThriller;
        }
    }




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
            height: 100,
            width: 100,
            x: mousePosition.x - 50,
            y: mousePosition.y - 50,
            mixBlendMode: "difference",
            opacity: 1
        },
        button: {
            height: 80,
            width: 80,
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            backgroundColor: `${currentColor}`,
            mixBlendMode: "difference",
        },
        hover: {
            height: 80,
            width: 80,
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            backgroundColor: `${props.currentColor}`,
            mixBlendMode: "difference",
        }
    }

    

    return (
        <>

            <motion.div className="cursor" variants={variants} animate={cursorVariant}>
            </motion.div>

            <div className={classes.backgroundDiv}>
                <div className={classes.canvasDiv} style={{ backgroundColor: `${currentColor}` }} >
                    <Image src={lightImage} alt="background image" />
                    <div className={classes.leftButtonDiv}>
                        <div onMouseEnter={buttonEnter} onMouseLeave={buttonLeave} onClick={() => setMousePosition(mousePosition.x, mousePosition.y)}> <Button href={"/"} icons={faHouseChimneyCrack} color="#413D3D" iconColor="white" text="Home" direction="left" /></div>
                        <div onMouseEnter={buttonEnter} onMouseLeave={buttonLeave} onClick={() => setMousePosition(mousePosition.x, mousePosition.y)}><Button href={"/category"} icons={faBars} color="#413D3D" iconColor="white" text="Category" direction="left" /></div>
                        <div onMouseEnter={buttonEnter} onMouseLeave={buttonLeave} onClick={() => setMousePosition(mousePosition.x, mousePosition.y)}><Button href={"/category"} icons={faVolumeHigh} color="#413D3D" iconColor="white" text="Mute" direction="left" /></div>
                    </div>
                    <div className={classes.contentDiv} onMouseEnter={textEnter} onMouseLeave={textLeave}>
                        <div className={classes.category}>
                            <div style={{ textTransform: "uppercase" }}>
                                <h6>{props.page}</h6>
                            </div>
                            <div className={classes.count}>
                                <h1>{parseInt(currentCount) + 1}</h1>
                            </div>
                        </div>
                        <div className={classes.line} >

                        </div>
                        <div className={classes.title} style={{ textTransform: "uppercase" }}>
                            <h1 >{danceActions[props.page][indexArray[props.id]]}</h1>
                        </div>
                        <div className={classes.documentDiv}>
                            <Link href="/">
                                <div>
                                    <FontAwesomeIcon className={classes.icon} icon={faBookOpen} color={props.iconColor} size="2x" />
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className={classes.bottomLinks}>
                        <div onMouseEnter={buttonEnter} onMouseLeave={buttonLeave}><Link href="/creators" >ABOUT US</Link></div>
                        <div className={classes.line}></div>
                        <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>ALL COPYRIGHT RESERVED</h1>
                        <div className={classes.line}></div>
                        <div onMouseEnter={buttonEnter} onMouseLeave={buttonLeave}><Link href="/">SHARE </Link></div>
                    </div>
                    <div className={classes.outerDiv}>
                        <div>
                        </div>
                        <Canvas alpha={true}>
                            <ambientLight intensity={0.5} />
                            <pointLight intensity={2} position={[-1, 1, 3]} color="#A5C9CA" />
                            <pointLight intensity={2} position={[1, 1, 3]} color="#395B64" />
                            <pointLight intensity={2} position={[0, 3, -10]} color="#2C3639" />
                            <OrbitControls enableDamping={true} enableZoom={true} />
                            <Suspense fallback={null}>
                                {canvasArray[props.id]}
                            </Suspense>
                        </Canvas>
                    </div>
                    <div className={classes.rightButtonDiv}>
                        <div onClick={handlePrevious} onMouseEnter={buttonEnter} onMouseLeave={buttonLeave}><Button href={"xxx"} icons={faArrowUp} color="#413D3D" iconColor="white" text="previous" direction="right" /></div>
                        <div onMouseEnter={buttonEnter} onMouseLeave={buttonLeave}>
                            <a href="https://github.com/Sourabh-Bharale/Threecise" rel="noreferrer" target="_blank"><Button backgroundColor="#413D3D" href={"xxx"} icons={faStar} color="#413D3D" iconColor="yellow" text="Leave a star on Github" direction="right" /></a>
                        </div >
                        <div onMouseEnter={buttonEnter} onMouseLeave={buttonLeave} onClick={handleNext}><Button href={"xxx"} icons={faArrowDown} color="#413D3D" iconColor="white" text="next" direction="right" /></div>
                    </div>
                </div>
            </div>
        </>

    )
}
