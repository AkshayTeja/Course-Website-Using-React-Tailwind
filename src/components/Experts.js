import React from 'react'
import laptop from '../assets/laptop.jpg'
export default function Experts() {
  return (
    <div className='max-w-[1240px] mx-auto my-10  grid grid-cols-2'>
      <div className='border col-span-1 w-[80%]'>
        <img src={laptop} />
      </div>
      <div className='border col-span-1 flex flex-col justify-center'>
        <h1 className='text-[#00df9a] font-bold my-2'>LEARN FROM EXPERTS</h1>
        <p className='m-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat iure mollitia nam sint ut. Fuga corporis tempore quos autem, molestiae labore eos, consequatur vero rem vitae debitis expedita, facilis amet?</p>
        <button className='w-[30%] bg-black inline text-white p-3 rounded'>Get Started</button>    
      </div>
    </div>
  )
}
