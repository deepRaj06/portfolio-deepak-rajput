import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
        <p className='text-orange font-bold uppercase text-3xl font-special text-center'>Since 2023</p>
        <div className='flex justify-center items-center gap-4'>
            <ExperienceInfo number='2' text='Years'/>
            <p className='font-black text-6xl text-lightBrown'>-</p>
            <ExperienceInfo number='5' text='Mobile/Web Apps'/>
        </div>
        <p className='text-center text-white'>With 2 years of experience building dynamic and user friendly mobile and web applications</p>
        {/* <ExperienceInfo number='$100k' text='Max Budget'/> */}

    </div>
  )
}

export default ExperienceTopLeft