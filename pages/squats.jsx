import React from "react";
import CanvasScreen from '../components/CanvasScreen'
export default function Dance() {
    const actions = ["idle","Air Squats","Air Squats Bent Arms","Back Squats End","Back Squats Mid","Back Squats Start","Overhead Squats End","Overhead Squats Mid","Overhead Squats Start"]

    return (
        <div>
            <CanvasScreen page="squats" id="4"/>
        </div>
    )
}
