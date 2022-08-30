import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import HMoves from "../components/Models/hipHop";
import CanvasScreen from '../components/CanvasScreen'
import classes from "./dance.module.css"
import Button from "../components/Button";
import { faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons';
import useSound from 'use-sound';

export default function Excercises() {
    const actions = ["idle","Bboy Hip Hop","Hip Hop 1","Hip Hop 2","Hip Hop 3","Robot Hip Hop","Snake Hip Hop","Tut Hip Hop","Wave Hip Hop"]

    const colors = ['#A500F2', '#FFCF23', '#64D6E2', '#EF9F64', '#9988CD', '#A500F2', '#FFCF23', '#64D6E2', '#EF9F64', '#9988CD'];

    const [action, setAction] = useState(actions[0]);
    const [index, setIndex] = useState(0);

    const hoverSfx = '/sounds/hover.mp3';
    const [hoverPlay, { hoverStop }] = useSound(hoverSfx);

    const handlePrevious = () => {
        var l = index - 1;
        if (l == -1) {
            setAction(actions[8]);
            setIndex(8);
            hoverPlay();
        }
        else{
            setAction(actions[l]);
            setIndex(l);
            hoverPlay();
        }
    }
    const handleNext = () => {
        var l = index + 1;
        if (l == 9) {
            setAction(actions[0]);
            setIndex(0);
            hoverPlay();
        }
        else{
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
                        <div className={classes.checkCode} style={{color:colors[index]}}>
                            <h1>Want to check code</h1>
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
                        <HMoves action={action} />
                    </Suspense>
                </Canvas>
            </div>
            <CanvasScreen titleName={actions[index]} index={index+1} backgroundColor={colors[index]} category="Dance" />


        </div>
    )
}
