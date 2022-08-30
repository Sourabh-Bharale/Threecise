import React, { useEffect, useState } from 'react'
// import Button from '../components/Button'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import classes from "./category.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Category() {
  const constraintsRef1 = useRef(null);
  const constraintsRef2 = useRef(null);
  const constraintsRef3 = useRef(null);
  const constraintsRef4 = useRef(null);
  const constraintsRef5 = useRef(null);
  const constraintsRef6 = useRef(null);
  const constraintsRef7 = useRef(null);
  const colors = ['#A500F2', '#FFCF23', '#64D6E2', '#EF9F64', '#9988CD', '#A500F2', '#FFCF23', '#64D6E2', '#EF9F64', '#9988CD'];

  const [index, setIndex] = useState(0)

  const getRandom = () => {
    return Math.floor(Math.random() * 10);
  }

  // useEffect(() => {
  //   setInterval(() => {
  //     setIndex(getRandom());
  //   }, 3000);
  // })




  return (
    <div>
      <div className={classes.closeButtonDiv}>
        <Link href="/">
          <div className={classes.button} style={{ border: `0.3rem solid white`, }}>
            <FontAwesomeIcon className={classes.icon} icon={faXmark} color="red" size="2x" />
          </div>
        </Link>
      </div>
      <div className={classes.grid}>
        <div className={classes.gridContainer}>
            <motion.div className={classes.containeri1}>
              DANCE
            </motion.div>

          <motion.div className={classes.i2}>EXERCISE</motion.div>
          <motion.div className={classes.i3} style={{ writingMode: "tb-rl" }}>FUN MOVES</motion.div>
          <motion.div className={classes.i4} style={{ writingMode: "vertical-lr" }}>HIPHOP</motion.div>
          <motion.div className={classes.i5}>SQUATS</motion.div>
          <motion.div className={classes.i6}>THRILLER</motion.div>

          <motion.div className={classes.container1} ref={constraintsRef1}>
            <div className={classes.nullContentDiv}>
              BC
            </div>
            <motion.div className={classes.item1} drag dragConstraints={constraintsRef1}></motion.div>
          </motion.div>

          <motion.div className={classes.container2} ref={constraintsRef2}>
            <motion.div className={classes.item2} drag dragConstraints={constraintsRef2}></motion.div>
          </motion.div>

          <motion.div className={classes.container3} ref={constraintsRef3}>
            <motion.div className={classes.item3} drag dragConstraints={constraintsRef3}></motion.div>
          </motion.div>

          <motion.div className={classes.container4} ref={constraintsRef4}>
            <motion.div className={classes.item4} drag dragConstraints={constraintsRef4}></motion.div>
          </motion.div>

          <motion.div className={classes.container5} ref={constraintsRef5}>
            <div className={classes.nullContentDiv}>
              Aditya BC
            </div>
            <motion.div className={classes.item5} drag dragConstraints={constraintsRef5}></motion.div>
          </motion.div>

          <motion.div className={classes.container6} ref={constraintsRef6}>
            <motion.div className={classes.item6} drag dragConstraints={constraintsRef6}></motion.div>
          </motion.div>

          <motion.div className={classes.container7} ref={constraintsRef7}>
            <motion.div className={classes.item7} drag dragConstraints={constraintsRef7}></motion.div>
          </motion.div>
          
        </div>
      </div>
      <div className={classes.hintLine}>
        Try to drag coloured boxes and see the magic
      </div>
    </div>
  )
}
