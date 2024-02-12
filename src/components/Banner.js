import React from 'react'
import { ReactTyped } from "react-typed";

export default function Banner() {
  return (
    <div className='bg-[#2699fb] w-full py-[100px]'>
      <div className='max-w=[1240px] mx-auto text-center font-bold py-[100px]'>
        <div className='text-xl md:text-3xl p-[24px]'>
          Learn with us
        </div>
        <h2 className='text-white text-5xl md:text-[80px] md:p-[24px]'>Grow with us</h2>
        <div className='text-[20px] md:text-[50px] p-[24px] md:p-[24px] text-white'>
          Learn
          <ReactTyped
          className='pl-3'
            strings={['Web development','Digital Marketing','Ethical Hacking']}
            typeSpeed={100}
            loop={true}
            backSpeed={50}
          />
        </div>
      </div>
    </div>
  )
}

