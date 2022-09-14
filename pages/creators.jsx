import React, { Suspense, useState, useEffect } from "react";

import classes from "./creators.module.css"
import Link from 'next/link'
import Image from 'next/image'
import insta from '../public/img/insta.svg'
import linked from '../public/img/linked.svg'
import git from '../public/img/git.svg'
import web from '../public/img/web.png'
import background from '.././public/img/create back.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";

import { CreatorSourabh } from '../components/Models/Sourabh'
import { CreatorAryan } from '../components/Models/Aryan'
import { Canvas } from "@react-three/fiber";
import { PresentationControls } from "@react-three/drei"
import SocialButton from "../components/SocialButton";
import Warning from "../components/Warning";
import { mousePositionX, mousePositionY } from "../components/store";


export default function Creators() {

  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 800)
      setisMobile(true)
  })

  const action = "default";
  const action2 = "default1";

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
      backgroundColor: "yellow",
      mixBlendMode: "difference",
      opacity: 1
    },
    aryan: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: "white",
      mixBlendMode: "difference",
      opacity: 1
    }
  }

  const buttonEnter = () => setCursorVariant("button");
  const buttonLeave = () => setCursorVariant("default");
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const aryanEnter = () => setCursorVariant("aryan");
  const aryanLeave = () => setCursorVariant("default");

  return (
    <>
      {isMobile ? <Warning /> :
        <>

          <motion.div className="cursor" variants={variants} animate={cursorVariant}>
          </motion.div>
          <div className="bg-[#ECC73F]">
            <div className={classes.closeButtonDiv} onMouseEnter={buttonEnter} onMouseLeave={buttonLeave} >
              <Link href="/">
                <motion.div initial={{ y: -10, opacity: 0, scale: 0.5 }}
              animate={{ x: 0, y: 0, opacity: 1, scale: 1 }} transition={{ delay: 3 }} className={classes.button} style={{ border: `0.3rem solid white`, }}>
                  <FontAwesomeIcon className={classes.icon} icon={faHome} color="red" size="2x" />
                </motion.div>
              </Link>
            </div>
            <motion.div initial={{ y: -10, opacity: 0, scale: 0.5 }}
              animate={{ x: 0, y: 0, opacity: 1, scale: 1 }} transition={{ delay: 1 }} className={classes.socialDiv} style={{
                left: "7rem",
                backgroundColor: "#A500F2"
              }}>

              <motion.div initial={{ y: -10, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, y: 0, opacity: 1, scale: 1 }} transition={{ delay: 2.1 }} onMouseEnter={buttonEnter} onMouseLeave={buttonLeave}><SocialButton icon={web} id="Coming Soon" ></SocialButton></motion.div>
              <motion.div initial={{ y: -10, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, y: 0, opacity: 1, scale: 1 }} transition={{ delay: 2.12 }} onMouseEnter={buttonEnter} onMouseLeave={buttonLeave}><SocialButton icon={git} id="Sourabh-Bharale" goto='https://github.com/Sourabh-Bharale'></SocialButton></motion.div>
              <motion.div initial={{ y: -10, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, y: 0, opacity: 1, scale: 1 }} transition={{ delay: 1.8 }} onMouseEnter={textEnter} onMouseLeave={textLeave} className={classes.nameDiv} style={{ color: "#A500F2" }}>
                <h1>SOURABH</h1>
              </motion.div>
              <motion.div initial={{ y: -10, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, y: 0, opacity: 1, scale: 1 }} transition={{ delay: 2.22 }} onMouseEnter={buttonEnter} onMouseLeave={buttonLeave}><SocialButton icon={linked} id="Sourabh Bharale" goto='https://www.linkedin.com/in/sourabh-bharale-a9365821a/'></SocialButton></motion.div>
              <motion.div initial={{ y: -10, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, y: 0, opacity: 1, scale: 1 }} transition={{ delay: 2.23 }} onMouseEnter={buttonEnter} onMouseLeave={buttonLeave}><SocialButton icon={insta} id="_s0ur48h_" goto='https://www.instagram.com/_s0ur48h_/'></SocialButton></motion.div>
            </motion.div>

            <motion.div initial={{ y: -10, opacity: 0, scale: 0.5 }}
              animate={{ x: 0, y: 0, opacity: 1, scale: 1 }} transition={{ delay: 1 }} className={classes.socialDiv} style={{
                top: "7rem",
                right: "7rem",
                backgroundColor: "#EE3939",
              }}>
              <motion.div initial={{ y: -10, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, y: 0, opacity: 1, scale: 1 }} transition={{ delay: 2.1 }} onMouseEnter={aryanEnter} onMouseLeave={aryanLeave}><SocialButton icon={web} id="aryanjangid.in" goto='https://www.aryanjangid.in/'></SocialButton></motion.div>
              <motion.div initial={{ y: -10, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, y: 0, opacity: 1, scale: 1 }} transition={{ delay: 2.12 }} onMouseEnter={aryanEnter} onMouseLeave={aryanLeave}><SocialButton icon={git} id="aryanjangid" goto='https://github.com/aryanjangid'></SocialButton></motion.div>
              <motion.div initial={{ y: -10, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, y: 0, opacity: 1, scale: 1 }} transition={{ delay: 1.8 }} onMouseEnter={textEnter} onMouseLeave={textLeave} className={classes.nameDiv} style={{ color: "#EE3939" }}>
                <h1>ARYAN</h1>
              </motion.div>
              <motion.div initial={{ y: -10, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, y: 0, opacity: 1, scale: 1 }} transition={{ delay: 2.22 }} onMouseEnter={aryanEnter} onMouseLeave={aryanLeave}><SocialButton icon={linked} id="Aryan Jangid" goto='https://www.linkedin.com/in/jangidaryan/'></SocialButton></motion.div>
              <motion.div initial={{ y: -10, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, y: 0, opacity: 1, scale: 1 }} transition={{ delay: 2.23 }} onMouseEnter={aryanEnter} onMouseLeave={aryanLeave}><SocialButton icon={insta} id="aj_aryan0007" goto='https://www.instagram.com/aj_aryan0007/'></SocialButton></motion.div>
            </motion.div>
            <motion.div className={classes.model}>
              <Canvas alpha={true}>
                <ambientLight intensity={1} />
                <pointLight intensity={2} position={[-1, 1, 3]} color="#A5C9CA" />
                <pointLight intensity={2} position={[1, 1, 3]} color="#395B64" />
                <pointLight intensity={2} position={[0, 3, -10]} color="#2C3639" />
                <OrbitControls enableDamping={true} enableZoom={false} />
               <Suspense fallback={null}>
                  <CreatorSourabh action={action} />
                  <CreatorAryan action2={action2} />
                </Suspense>
              </Canvas>
            </motion.div>

          </div>
        </>
      }

    </>
  )
}

