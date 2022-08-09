import Link from 'next/link'
import React, { useState } from 'react'
import classes from './button.module.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons

export default function Button(props) {

    const [hoveredCircle, setHoveredCircle] = useState(0);

    const handleMouseEnter = () => {
        setHoveredCircle(1);
    };
    const handleMouseLeave = () => {
        setHoveredCircle(0);
    };

    return (
        <div>
            <Link href="/">
                <div className={classes.button} style={{ border: `0.3rem solid ${props.color}` }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    {hoveredCircle == 1 ?
                        <FontAwesomeIcon className={classes.icon} icon={props.icons} color={props.iconColor} size="2x"/> :
                        <FontAwesomeIcon className={classes.icon} icon={props.icons} color={props.iconColor} size="2x"  />
                    }
                </div>
            </Link>
        </div>
    )
}