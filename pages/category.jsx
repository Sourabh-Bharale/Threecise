import React, { useEffect, useState } from 'react'
// import Button from '../components/Button'
import {  faXmark } from '@fortawesome/free-solid-svg-icons';
import classes from "./category.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link'
function category() {

  const colors = ['#A500F2', '#FFCF23', '#64D6E2', '#EF9F64', '#9988CD', '#A500F2', '#FFCF23', '#64D6E2', '#EF9F64', '#9988CD'];
  
  const [index,setIndex]=useState(0)

  const getRandom = () => {
    return Math.floor(Math.random() * 10);
  }

  useEffect(()=>{
    setInterval(()=>{
      setIndex(getRandom());
    },3000);
  })

  
  

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
          <div className={classes.i1}>DANCE</div>
          <div className={classes.i2}>EXERCISE</div>
          <div className={classes.i3} style={{writingMode: "tb-rl"}}>FUN MOVES</div>
          <div className={classes.i4} style={{writingMode: "vertical-lr"}}>HIPHOP</div>
          <div className={classes.i5}>SQUATS</div>
          <div className={classes.i6}>THRILLER</div>
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