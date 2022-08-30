import React from 'react'
import classes from './socialButton.module.css'
import insta from '../public/img/insta.svg'
import linked from '../public/img/linked.svg'
import git from '../public/img/git.svg'
import web from '../public/img/web.png'
import Image from 'next/image'

const SocialButton = (props) => {
  return (
    <>
        <div className={classes.socialDivLink}>
          <Image className={classes.socialImg} src={props.icon}></Image>
          <div className={classes.hoverDiv}>
            <h1>{props.id}</h1>
          </div>
        </div>
    </>
  )
}

export default SocialButton
