import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import EMode2 from "../components/Models/excercise2";
import CanvasScreen from '../components/CanvasScreen'
import classes from "./dance.module.css"
import Button from "../components/Button";
import { faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons';

export default function Excercises() {
    const actions = ["idle","Bicycle Crunch","Burpee","Cartwheel","Jump Pushup","Pike Walk","Pike Walk","Piston","Pushup","Quick Steps","Situps","Snatch","Sumo High Pull"]

    const colors = ['#A500F2', '#FFCF23', '#64D6E2', '#EF9F64', '#9988CD', '#A500F2', '#FFCF23', '#64D6E2', '#EF9F64', '#9988CD'];

    const [action, setAction] = useState(actions[0]);
    const [index, setIndex] = useState(0);
    const handlePrevious = () => {
        var l = index - 1;
        if (l == -1) {
            setAction(actions[12]);
            setIndex(12);
        }
        else{
            setAction(actions[l]);
            setIndex(l);
        }
    }
    const handleNext = () => {
        var l = index + 1;
        if (l == 13) {
            setAction(actions[0]);
            setIndex(0);
        }
        else{
            setAction(actions[l]);
            setIndex(l);
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
                        <EMode2 action={action} />
                    </Suspense>
                </Canvas>
            </div>
            <CanvasScreen titleName={actions[index]} index={index+1} backgroundColor={colors[index]} category="Dance" />


        </div>
    )
}
