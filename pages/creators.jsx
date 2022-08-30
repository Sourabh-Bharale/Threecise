import React, { Suspense, useState } from "react";

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

import { CreatorSourabh } from '../components/Models/Sourabh'
import { CreatorAryan } from '../components/Models/Aryan'
import { Canvas } from "@react-three/fiber";
import { PresentationControls } from "@react-three/drei"
import SocialButton from "../components/SocialButton";

function category() {


  const action = "default";
  const action2 = "default1";

  return (
    <div >
      <div className={classes.closeButtonDiv}>
        <Link href="/">
          <div className={classes.button} style={{ border: `0.3rem solid white`, }}>
            <FontAwesomeIcon className={classes.icon} icon={faHome} color="red" size="2x" />
          </div>
        </Link>
      </div>
      <div className={classes.socialDiv} style={{
        left: "7rem",
        backgroundColor: "#A500F2"
      }}>
        <SocialButton icon={web} id="sourahb_bharale"></SocialButton>
        <SocialButton icon={git} id="sourahb_bharale"></SocialButton>
        <div className={classes.nameDiv} style={{ color: "#A500F2" }}>
          <h1>SOURABH</h1>
        </div>
        <SocialButton icon={linked} id="sourahb_bharale"></SocialButton>
        <SocialButton icon={insta} id="sourahb_bharale"></SocialButton>
      </div>
      <div className={classes.socialDiv} style={{
        top: "7rem",
        right: "7rem",
        backgroundColor: "#EE3939", 
      }}>
        <SocialButton icon={web} id="sourahb_bharale"></SocialButton>
        <SocialButton icon={git} id="sourahb_bharale"></SocialButton>
        <div className={classes.nameDiv} style={{ color: "#EE3939" }}>
          <h1>ARYAN</h1>
        </div>
        <SocialButton icon={linked} id="sourahb_bharale"></SocialButton>
        <SocialButton icon={insta} id="sourahb_bharale"></SocialButton>
      </div>
      <div className={classes.model}>
        <Canvas alpha={true}>
          <ambientLight intensity={1} />
          <pointLight intensity={2} position={[-1, 1, 3]} color="#A5C9CA" />
          <pointLight intensity={2} position={[1, 1, 3]} color="#395B64" />
          <pointLight intensity={2} position={[0, 3, -10]} color="#2C3639" />
          <PresentationControls global zoom={0.8} rotation={[0, 0, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
            <Suspense fallback={null}>
              <CreatorSourabh action={action} />
              <CreatorAryan action2={action2} />
            </Suspense>
          </PresentationControls>
        </Canvas>
      </div>
      <div className={classes.backgroundImg}>
        <Image src={background}></Image>
      </div>
    </div>
  )
}

export default category