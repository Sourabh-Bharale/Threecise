import React from 'react'
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


function category() {

  return (
    <div>
      <div className={classes.backgroundImg}>
      <Image src={background}></Image>
      </div>
      
    </div>
  )
}

export default category