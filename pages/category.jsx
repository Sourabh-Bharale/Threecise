import React, { useEffect, useState } from 'react'
// import Button from '../components/Button'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./category.module.css"
import Link from 'next/link';
import { useRef } from "react";
import { motion } from "framer-motion";
import { mousePositionX, mousePositionY, setMousePosition } from '../components/store';
import Warning from '../components/Warning';
import Image from 'next/image'
import Dance from '../public/img/dance.gif'
import Dance2 from '../public/img/dance2.gif'
import Dance3 from '../public/img/dance3.gif'
import Dance4 from '../public/img/dance4.gif'
import Dance5 from '../public/img/dance5.gif'

export default function Category() {


  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 800)
      setisMobile(true)
  })

  const [mousePosition, setMouse] = useState({
    x: mousePositionX,
    y: mousePositionY,
  });

  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e) => {
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
    circle: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: "none",
      mixBlendMode: "difference",
      opacity: 0
    }
  }

  const circleEnter = () => setCursorVariant("circle");
  const circleLeave = () => setCursorVariant("default");

  console.log(mousePositionX);
  console.log(mousePositionY);

  const constraintsRef1 = useRef(null);
  const constraintsRef2 = useRef(null);
  const constraintsRef3 = useRef(null);
  const constraintsRef4 = useRef(null);
  const constraintsRef5 = useRef(null);
  const constraintsRef6 = useRef(null);
  const constraintsRef7 = useRef(null);

  return (
    <>
      {isMobile ? <Warning /> :
        <div>


          <motion.div className="cursor" variants={variants} animate={cursorVariant}>

          </motion.div>
          <div className={classes.closeButtonDiv} >
            <Link href="/" >
              <div className={classes.button} style={{ border: `0.3rem solid white`, }}>
                <FontAwesomeIcon className={classes.icon} icon={faXmark} color="red" size="2x" />
              </div>
            </Link>
          </div>
          <div className={classes.grid}>
            <div className={classes.gridContainer}>
              <Link href="/dance"><motion.div className={classes.containeri1}>DANCE</motion.div></Link>
              <Link href="/excercises"><motion.div className={classes.i2}>EXERCISE</motion.div></Link>
              <Link href="/funMoves"><motion.div className={classes.i3} style={{ writingMode: "tb-rl" }}>FUN MOVES</motion.div></Link>
              <Link href="/hiphop"><motion.div className={classes.i4} style={{ writingMode: "vertical-lr" }}>HIPHOP</motion.div></Link>
              <Link href="/squats"><motion.div className={classes.i5}>SQUATS</motion.div></Link>
              <Link href="/thriller"><motion.div className={classes.i6}>THRILLER</motion.div></Link>

              <motion.div className={classes.container1} ref={constraintsRef1}>
                <div  className={classes.nullContentDiv}>
                <Image height={"200%"} src={Dance2} alt="ig"></Image>
                </div>
                <motion.div className={classes.item1} drag dragConstraints={constraintsRef1}></motion.div>
              </motion.div>

              <motion.div className={classes.container2} ref={constraintsRef2}>
              <div  className={classes.nullContentDiv}>
                  <Image height={"200%"} src={Dance4} alt="ig"></Image>
                </div>
                <motion.div className={classes.item2} drag dragConstraints={constraintsRef2}></motion.div>
              </motion.div>

              <motion.div className={classes.container3} ref={constraintsRef3}>
                <div  className={classes.nullContentDiv}>
                  <Image height={"500%"} src={Dance} alt="ig"></Image>
                </div>
                <motion.div className={classes.item3} drag dragConstraints={constraintsRef3}></motion.div>
              </motion.div>

              <motion.div className={classes.container4} ref={constraintsRef4}>
              <div  className={classes.nullContentDiv}>
                <Image height={"620%"} src={Dance5} alt="ig"></Image>
                </div>
                <motion.div className={classes.item4} drag dragConstraints={constraintsRef4}></motion.div>
              </motion.div>

              <motion.div className={classes.container5} ref={constraintsRef5}>
              <div  className={classes.nullContentDiv}>
                <Image height={"500%"} src={Dance3} alt="ig"></Image>
                </div>
                <motion.div className={classes.item5} drag dragConstraints={constraintsRef5}></motion.div>
              </motion.div>

              <motion.div className={classes.container6} ref={constraintsRef6}>
                <div className={classes.nullContentDiv}>
                  SARTHAK BC
                </div>
                <motion.div className={classes.item6} drag dragConstraints={constraintsRef6}></motion.div>
              </motion.div>

              <motion.div className={classes.container7} ref={constraintsRef7}>
              <div  className={classes.nullContentDiv}>
                <Image height={"500%"} src={Dance3} alt="ig"></Image>
                </div>
                <motion.div className={classes.item7} drag dragConstraints={constraintsRef7}></motion.div>
              </motion.div>

            </div>
          </div>
          <div className={classes.hintLine}>
            Try to drag coloured boxes and see the magic
          </div>
        </div>
      }

    </>
  )
}
