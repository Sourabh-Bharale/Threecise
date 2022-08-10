import React from 'react';
import classes from './canvasScreen.module.css';
import lightImage from '../public/img/lightbg.png';
import Image from 'next/image';
import Button from './Button';
import { faBars, faVolumeHigh, faHouseChimneyCrack, faArrowUp, faArrowDown, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function CanvasScreen(props) {
    return (
        <div className={classes.backgroundDiv}>
            <div className={classes.canvasDiv}>
                <Image src={lightImage} alt="background image" />
                <div className={classes.leftButtonDiv}>
                    <Button href={"/"} icons={faHouseChimneyCrack} color="#413D3D" iconColor="white" text="Home" direction="left" />
                    <Button href={"/category"} icons={faBars} color="#413D3D" iconColor="white" text="Category" direction="left" />
                    <Button href={"/category"} icons={faVolumeHigh} color="#413D3D" iconColor="white" text="Mute" direction="left" />
                </div>

                <div className={classes.rightButtonDiv}>
                    <div><Button href={"/"} icons={faArrowUp} color="#413D3D" iconColor="white" text="previous" direction="right" /></div>
                    <div className={classes.checkCode}>
                        <h1>Want to check code</h1>
                    </div>
                    <Button href={"/category"} icons={faArrowDown} color="#413D3D" iconColor="white" text="next" direction="right" />
                </div>

                <div className={classes.contentDiv}>
                    <div className={classes.category}>
                        <div style={{ textTransform: "uppercase" }}>
                            <h6>Dance</h6>
                        </div>
                        <div className={classes.count}>
                            <h1>3</h1>
                        </div>
                    </div>
                    <div className={classes.line} >

                    </div>
                    <div className={classes.title} style={{ textTransform: "uppercase" }}>
                        <h1>Belly dance</h1>
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
                    <Link href="/">ABOUT US</Link>
                    <div className={classes.line}></div>
                    <h1>ALL COPYRIGHT RESERVED</h1>
                    <div className={classes.line}></div>
                    <Link href="/">SHARE </Link>
                    <FontAwesomeIcon className={classes.icon} icon={faWhatsapp} color={props.iconColor} size="2x" />
                </div>
            </div>
        </div>
    )
}
