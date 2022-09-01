import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import classes from "./journey.module.css"
import Link from 'next/link';

const journey = () => {
    return (
        <div className={classes.journeyDiv}>
            <div className={classes.closeButtonDiv}>
        <Link href="/">
          <div className={classes.button} style={{ border: `0.3rem solid white`, }}>
            <FontAwesomeIcon className={classes.icon} icon={faXmark} color="red" size="2x" />
          </div>
        </Link>
      </div>
            <h1 className={classes.title}>OUR JOURNEY</h1>
            <div className={classes.line}>
                <p>Loreum ipsum</p>
            </div>
             </div>
    )
}

export default journey
