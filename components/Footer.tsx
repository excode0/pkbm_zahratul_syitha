import { pkbm_logo } from '@/assets/images'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 text-black border-2 shadow-xl'>
      <div className='flex flex-col justify-center items-center p-10'>
        <Image src={pkbm_logo} alt="" className='w-[250px]'/>
        <span className='text-[1.2em] font-[600]'>PKBM ZAHRATUL SYITHA</span>
        <span className='text-[1em] font-[500]'>KABUPATEN PASAMAN BARAT</span>
      </div>
      <div className='grid grid-cols-3 gap-5 p-10'>
        <div className='flex flex-col'>
          <span className='text-[1.2em] font-[500]'>ABOUT</span>
          <span className=''>...</span>
          <span className=''>...</span>
          <span className=''>...</span>
          <span className=''>...</span>
          <span className=''>...</span>
        </div>
        <div className='flex flex-col'>
          <span className='text-[1.2em] font-[500]'>ABOUT</span>
          <span className=''>...</span>
          <span className=''>...</span>
          <span className=''>...</span>
          <span className=''>...</span>
          <span className=''>...</span>
        </div>
        <div className='flex flex-col'>
          <span className='text-[1.2em] font-[500]'>ABOUT</span>
          <span className=''>...</span>
          <span className=''>...</span>
          <span className=''>...</span>
          <span className=''>...</span>
          <span className=''>...</span>
        </div>
        
      </div>

    </div>
  )
}

export default Footer