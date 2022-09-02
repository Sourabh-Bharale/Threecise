import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import DanceoffVro from "../components/Models/danceoff"
import CanvasScreen from '../components/CanvasScreen'
import classes from "./dance.module.css"
import Button from "../components/Button";
import { faArrowUp, faArrowDown, faStar} from '@fortawesome/free-solid-svg-icons';
import useSound from 'use-sound';
import { colors, mousePositionX, mousePositionY } from "./store";

export default function Dance() {
    const actions = ["idle", "Belly Dance", "Shopping Cart ", "Break Dance1", "Dance Tweark", "Flair", "Gagnam Style", "House Dance", "Silly", "Soul Spin Combo"]
 
    const [action, setAction] = useState(actions[1]);
    const [index, setIndex] = useState(1);

    const hoverSfx = '/sounds/hover.mp3';
    const [hoverPlay, { hoverStop }] = useSound(hoverSfx);
    const handlePrevious = () => {
        var l = index - 1;
        if (l == -1) {
            setAction(actions[9]);
            setIndex(9);
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
        if (l == 10) {
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
            backgroundColor: `${colors[index]}`,
            mixBlendMode: "difference",
            opacity: 1
        },
    }

    const buttonEnter = () => setCursorVariant("button");
    const buttonLeave = () => setCursorVariant("default");
    const textEnter =()=> setCursorVariant("text");
    const textLeave =()=> setCursorVariant("default");


    return (
        <div>
            <CanvasScreen titleName={actions[index]} index={index+1} backgroundColor={colors[index]} category="Dance" />
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
                        <DanceoffVro action={action} />
                    </Suspense>
                </Canvas>
            </div>

        </div>
    )
}
