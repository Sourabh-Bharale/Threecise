import React, { useEffect, useState } from 'react';
import classes from './canvasScreen.module.css';
import lightImage from '../public/img/lightbg.png';
import Image from 'next/image';
import Button from './Button';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faVolumeHigh, faHouseChimneyCrack, faArrowUp, faArrowDown, faBookOpen, faStar } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { mousePositionX, mousePositionY, setMousePosition,currentDance,nextDance, previousDance } from './store';

library.add(faBars, faVolumeHigh, faHouseChimneyCrack, faArrowUp, faArrowDown, faBookOpen);

export default function CanvasScreen(props) {



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
            backgroundColor: `${props.backgroundColor}`,
            mixBlendMode: "difference",
        },
        hover: {
            height: 80,
            width: 80,
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            backgroundColor: `${props.backgroundColor}`,
            mixBlendMode: "difference",
        }
    }

    const buttonEnter = () => setCursorVariant("button");
    const buttonLeave = () => setCursorVariant("default");
    const textEnter = () => setCursorVariant("text");
    const textLeave = () => setCursorVariant("default");
    const hoverEnter = () => setCursorVariant("hover");
    const hoverLeave = () => setCursorVariant("default");



    const actions = ["idle", "Belly Dance", "Shopping Cart ", "Break Dance1", "Dance Tweark", "Flair", "Gagnam Style", "House Dance", "Silly", "Soul Spin Combo"]
 
    const [action, setAction] = useState(actions[currentDance]);
    const [index, setIndex] = useState(currentDance);

    const hoverSfx = '/sounds/hover.mp3';
    // const [hoverPlay, { hoverStop }] = useSound(hoverSfx);
    const handlePrevious = () => {
        previousDance(index);
        console.log("pichu");
        console.log(currentDance);
        console.log(action);
        
    }
    const handleNext = () => {
        nextDance(index);
        console.log("agla");
        console.log(currentDance);
        console.log(action);
    }




    return (
        <>
            <motion.div className="cursor" variants={variants} animate={cursorVariant}>
            </motion.div>
            <div className={classes.backgroundDiv} >
                {/* <motion.div className="cursor" variants={variants} animate={cursorVariant}>
            </motion.div> */}
                <div className={classes.canvasDiv} style={{ backgroundColor: `${props.backgroundColor}` }} >
                    <Image src={lightImage} alt="background image" />
                    <div className={classes.leftButtonDiv}>
                        <div onMouseEnter={buttonEnter} onMouseLeave={buttonLeave} onClick={()=>setMousePosition(mousePosition.x, mousePosition.y)}> <Button href={"/"} icons={faHouseChimneyCrack} color="#413D3D" iconColor="white" text="Home" direction="left" /></div>
                        <div onMouseEnter={buttonEnter} onMouseLeave={buttonLeave} onClick={()=>setMousePosition(mousePosition.x, mousePosition.y)}><Button href={"/category"} icons={faBars} color="#413D3D" iconColor="white" text="Category" direction="left" /></div>
                        <div onMouseEnter={buttonEnter} onMouseLeave={buttonLeave} onClick={()=>setMousePosition(mousePosition.x, mousePosition.y)}><Button href={"/category"} icons={faVolumeHigh} color="#413D3D" iconColor="white" text="Mute" direction="left" /></div>
                    </div>
                    <div className={classes.contentDiv} onMouseEnter={textEnter} onMouseLeave={textLeave}>
                        <div className={classes.category}>
                            <div style={{ textTransform: "uppercase" }}>
                                <h6>{props.category}</h6>
                            </div>
                            <div className={classes.count}>
                                <h1>{props.index}</h1>
                            </div>
                        </div>
                        <div className={classes.line} >

                        </div>
                        <div className={classes.title} style={{ textTransform: "uppercase" }}>
                            <h1 >{props.titleName}</h1>
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
