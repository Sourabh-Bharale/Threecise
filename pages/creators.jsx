import React, { Suspense, useState } from "react";

import Button from '../components/Button'
import classes from "./creators.module.css"
import Link from 'next/link'
import Image from 'next/image'
import aryan from '.././public/img/aj.png'
import aryanSign from '.././public/img/Aryan Jangid.svg'
import sourabhSign from '.././public/img/Sourabh Bharale.svg'
import linkimg from '.././public/img/link.svg'
import insta from '.././public/img/insta.svg'
import linked from '.././public/img/linked.svg'
import git from '.././public/img/git.svg'
import background from '.././public/img/create back.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { CreatorSourabh } from '../components/Models/Sourabh'
import { CreatorAryan } from '../components/Models/Aryan'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { PresentationControls } from "@react-three/drei"

function category() {
  const actions = ["default"]
  const actions2 = ["default1"]
  
  const [action, setAction] = useState("default");
  const [action2, setAction2] = useState("default1");
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);

  return (
    <div className={classes.createrDiv}>
      <div className={classes.model}>

      <Canvas alpha={true}>
        <ambientLight intensity={0.5} />
        <pointLight intensity={2} position={[-1, 1, 3]} color="#A5C9CA" />
        <pointLight intensity={2} position={[1, 1, 3]} color="#395B64" />
        <pointLight intensity={2} position={[0, 3, -10]} color="#2C3639" />
        {/* <OrbitControls enableDamping={true} enableZoom={true} />
         */}
        <PresentationControls global zoom={0.8} rotation={[0,0,0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>

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