import Link from 'next/link'
import React, { useState } from 'react'
import classes from './button.module.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import useSound from 'use-sound';

export default function Button(props) {

    const [hoveredCircle, setHoveredCircle] = useState(0);

    const popSFX = '/sounds/pop.mp3';    
    const [popPlay] = useSound(popSFX,{volume:0.3});

    const handleMouseEnter = () => {
        popPlay();
        setHoveredCircle(1);
    };
    const handleMouseLeave = () => {
       
        setHoveredCircle(0);
    };

    return (
        <div className={classes.buttonDiv} style={{ flexDirection: `${props.direction == "left" ? "row" : "row-reverse"}`, animation: `${props.direction == "left" ? "0.6s slide-right" : "0.6s slide-left"}` }}>
            {props.href === "xxx" ?
                <div className={classes.button} style={{ border: `0.3rem solid ${props.color}` }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    {hoveredCircle == 1 ?
                        <FontAwesomeIcon className={classes.icon} icon={props.icons} color={props.iconColor} size="2x" /> :
                        <FontAwesomeIcon className={classes.icon} icon={props.icons} color={props.iconColor} size="2x" />
                    }
                </div> :
                <Link href={props.href}>
                    <div className={classes.button} style={{ border: `0.3rem solid ${props.color}` }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        {hoveredCircle == 1 ?
                            <FontAwesomeIcon className={classes.icon} icon={props.icons} color={props.iconColor} size="2x" /> :
                            <FontAwesomeIcon className={classes.icon} icon={props.icons} color={props.iconColor} size="2x" />
                        }
                    </div>
                </Link>
            }

            <div className={classes.hoverDiv}>
                <h1>{props.text}</h1>
            </div>
        </div>
    )
}