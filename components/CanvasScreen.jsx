import React from 'react';
import classes from './canvasScreen.module.css';
import lightImage from '../public/img/lightbg.png';
import Image from 'next/image';
import Button from './Button';
import { faBars, faVolumeHigh, faHouseChimneyCrack, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function CanvasScreen(props) {
    return (
        <div className={classes.backgroundDiv}>
            <div className={classes.canvasDiv}>
                <Image src={lightImage} alt="background image" />
                <div className={classes.leftButtonDiv}>
                    <Button href={"/"} icons={faHouseChimneyCrack} color="#413D3D" iconColor="white" text="Home" direction="left" />
                    <Button href={"/category"} icons={faBars} color="#413D3D" iconColor="white" text="Category" direction="left"/>
                    <Button href={"/category"} icons={faVolumeHigh} color="#413D3D" iconColor="white" text="Mute" direction="left"/>
                </div>

                <div className={classes.rightButtonDiv}>
                    <div><Button href={"/"} icons={faArrowUp} color="#413D3D" iconColor="white" text="previous" direction="right" /></div>
                    <div className={classes.checkCode}>
                        <h1>Want to check code</h1>
                    </div>
                    <Button href={"/category"} icons={faArrowDown} color="#413D3D" iconColor="white" text="next" direction="right" />
                </div>
            </div>
        </div>
    )
}
