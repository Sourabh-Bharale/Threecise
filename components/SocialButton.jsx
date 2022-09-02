import React from 'react'
import classes from './socialButton.module.css'
import insta from '../public/img/insta.svg'
import linked from '../public/img/linked.svg'
import git from '../public/img/git.svg'
import web from '../public/img/web.png'
import Image from 'next/image'
import useSound from 'use-sound'


const SocialButton = (props) => {

  const popSFX = '/sounds/pop.mp3';    
  const [popPlay] = useSound(popSFX,{volume:0.3});
  return (
    <>
      <a href={props.goto} onMouseEnter={()=>popPlay()}>
        <div className={classes.socialDivLink}>
          <Image className={classes.socialImg} src={props.icon} ></Image>
          <div className={classes.hoverDiv}>
            <h1>{props.id}</h1>
          </div>
        </div>
      </a>
    </>
  )
}

export default SocialButton
