import React from "react";
import CanvasScreen from '../components/CanvasScreen'
export default function Excercises() {
    const actions = ["idle", "Bicycle Crunch", "Burpee", "Cartwheel", "Jump Pushup", "Pike Walk", "Piston", "Pushup", "Quick Steps", "Situps", "Snatch", "Sumo High Pull"]

    return (
        <div>
            <CanvasScreen page="exercise" id="1"/>     
        </div>
    )
}
