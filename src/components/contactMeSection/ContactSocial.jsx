import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoBlogger } from "react-icons/bi";

const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
        <SingleContactSocial link='https://www.linkedin.com/in/deepak-rajput-057a71118/' Icon={FaLinkedinIn}/>
        <SingleContactSocial link='https://github.com/deepRaj06' Icon={FiGithub}/>
        <SingleContactSocial link='https://blog-buzz.vercel.app/' Icon={BiLogoBlogger}/>
    </div>
  )
}

export default ContactSocial