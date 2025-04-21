import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white'>
        <SingleInfo text="deepak.onlinework13@gmail.com" Image={HiOutlineMail}/>
        <SingleInfo text="+91-807-666-0618" Image={FiPhone}/>
        <SingleInfo text="Ghaziabad, Uttar Pradesh, India" Image={IoLocationOutline}/>
    </div>
  )
}

export default ContactInfo