import React, { useEffect, useState } from 'react';
import classes from './canvasScreen.module.css';
import lightImage from '../public/img/lightbg.png';
import Image from 'next/image';
import Button from './Button';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faVolumeHigh, faHouseChimneyCrack, faArrowUp, faArrowDown, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

library.add(faBars, faVolumeHigh, faHouseChimneyCrack, faArrowUp, faArrowDown, faBookOpen);

export default function CanvasScreen(props) {

    const [mousePosition, setMousePosition] = useState({
        x: -10,
        y: -10,
    });

    const [cursorVariant, setCursorVariant] = useState("default")

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
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
        circle: {
            height: 80,
            width: 80,
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            backgroundColor: "red",
            mixBlaendMode: "difference",
            opacity: 1,

        }
    }

    const circleEnter = () => setCursorVariant("circle");
    const circleLeave = () => setCursorVariant("default");




    return (
        <div className={classes.backgroundDiv} >
            <motion.div className="cursor" variants={variants} animate={cursorVariant}>
            </motion.div>
            <div className={classes.canvasDiv} style={{ backgroundColor: `${props.backgroundColor}` }} >
                <Image src={lightImage} alt="background image" />
                <div className={classes.leftButtonDiv}>
                    <Button href={"/"} icons={faHouseChimneyCrack} color="#413D3D" iconColor="white" text="Home" direction="left" />
                    <Button href={"/category"} icons={faBars} color="#413D3D" iconColor="white" text="Category" direction="left" />
                    <Button href={"/category"} icons={faVolumeHigh} color="#413D3D" iconColor="white" text="Mute" direction="left" />
                </div>
                <div className={classes.contentDiv} >
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
                    <Link href="/creators">ABOUT US</Link>
                    <div className={classes.line}></div>
                    <h1>ALL COPYRIGHT RESERVED</h1>
                    <div className={classes.line}></div>
                    <Link href="/">SHARE </Link>
                </div>
            </div>
        </div>
    )
}
