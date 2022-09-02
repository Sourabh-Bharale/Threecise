import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import EMode2 from "../components/Models/excercise2";
import CanvasScreen from '../components/CanvasScreen'
import classes from "./dance.module.css"
import Button from "../components/Button";
import { faArrowUp, faArrowDown, faStar } from '@fortawesome/free-solid-svg-icons';
import useSound from 'use-sound';
import { colors } from "../components/store";
export default function Excercises() {
    const actions = ["idle", "Bicycle Crunch", "Burpee", "Cartwheel", "Jump Pushup", "Pike Walk", "Piston", "Pushup", "Quick Steps", "Situps", "Snatch", "Sumo High Pull"]

    const [action, setAction] = useState(actions[0]);
    const [index, setIndex] = useState(0);

    const hoverSfx = '/sounds/hover.mp3';
    const [hoverPlay, { hoverStop }] = useSound(hoverSfx);

    const handlePrevious = () => {
        var l = index - 1;
        if (l == -1) {
            setAction(actions[11]);
            setIndex(11);
            hoverPlay();
        }
        else {
            setAction(actions[l]);
            setIndex(l);
            hoverPlay();

        }
    }
    const handleNext = () => {
        var l = index + 1;
        if (l == 12) {
            setAction(actions[0]);
            setIndex(0);
            hoverPlay();
        }
        else {
            setAction(actions[l]);
            setIndex(l);
            hoverPlay();

        }
    }

    return (
        <div>
            <div className={classes.outerDiv}>
                <div>
                    <div className={classes.rightButtonDiv}>
                        <div onClick={handlePrevious}><Button href={"xxx"} icons={faArrowUp} color="#413D3D" iconColor="white" text="previous" direction="right" /></div>
                        <div >
                            <a href="https://github.com/Sourabh-Bharale/Threecise" rel="noreferrer" target="_blank"><Button backgroundColor="#413D3D" href={"xxx"} icons={faStar} color="#413D3D" iconColor="yellow" text="Leave a star on Github" direction="right" /></a>
                        </div>
                        <div onClick={handleNext}><Button href={"xxx"} icons={faArrowDown} color="#413D3D" iconColor="white" text="next" direction="right" /></div>
                    </div>
                </div>
                <Canvas alpha={true}>
                    <ambientLight intensity={0.5} />
                    <pointLight intensity={2} position={[-1, 1, 3]} color="#A5C9CA" />
                    <pointLight intensity={2} position={[1, 1, 3]} color="#395B64" />
                    <pointLight intensity={2} position={[0, 3, -10]} color="#2C3639" />
                    <OrbitControls enableDamping={true} enableZoom={true} />
                    <Suspense fallback={null}>
                        <EMode2 action={action} />
                    </Suspense>
                </Canvas>
            </div>
            <CanvasScreen titleName={actions[index]} index={index + 1} backgroundColor={colors[index]} category="exercise" />


        </div>
    )
}
