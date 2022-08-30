import React from 'react'
import Button from '../components/Button'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import classes from "./category.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link'
function category(props) {

  const colors = ['#A500F2', '#FFCF23', '#64D6E2', '#EF9F64', '#9988CD', '#A500F2', '#FFCF23', '#64D6E2', '#EF9F64', '#9988CD'];
  const getRandom = () => {
    return Math.floor(Math.random() * 10);
  }
  console.log(getRandom());

  return (
    <div>
      <div className={classes.closeButtonDiv}>
        <Link href="/">
          <div className={classes.button} style={{ border: `0.3rem solid white` }}>
            <FontAwesomeIcon className={classes.icon} icon={faXmark} color="red" size="2x" />
          </div>
        </Link>
      </div>
      <div className={classes.grid}>
        <div className={classes.gridContainer}>
          <div className={classes.i1}>1</div>
          <div className={classes.i2}>2</div>
          <div className={classes.i3}>3</div>
          <div className={classes.i4}>4</div>
          <div className={classes.i5}>5</div>
          <div className={classes.i6}>6</div>
          <div className={classes.null1} style={{backgroundColor:`${colors[getRandom()]}`}}></div>
          <div className={classes.null2} style={{backgroundColor:`${colors[getRandom()]}`}}></div>
          <div className={classes.null3} style={{backgroundColor:`${colors[getRandom()]}`}}></div>
          <div className={classes.null4} style={{backgroundColor:`${colors[getRandom()]}`}}></div>
          <div className={classes.null5} style={{backgroundColor:`${colors[getRandom()]}`}}></div>
          <div className={classes.null6} style={{backgroundColor:`${colors[getRandom()]}`}}></div>
          <div className={classes.null7} style={{backgroundColor:`${colors[getRandom()]}`}}></div>
        </div>
      </div>

    </div>
  )
}

export default category