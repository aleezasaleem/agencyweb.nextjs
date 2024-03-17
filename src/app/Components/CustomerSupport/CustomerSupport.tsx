import Image from 'next/image'
import React from 'react'
import SupportImg from './support.jpg'
import { FaCheck } from "react-icons/fa";

function CustomerSupport() {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap[[4rem]
        items-center'>
<div className='order-2 lg:order-1'>
    <Image src={SupportImg} alt='support' />
</div>
<div className='order-1 lg:order-2'>
    <h1 className='text-[20px] md:text-[25px] lg:text-[28px] text-[#02073e] font-bold
    leading-[2rem] md:leadig-[3rem]'>
     Customer Support is our main priority with their hundred percent 
     satisfaction.
    </h1>
    <p className='mt-[1.5rem] mb-[1.5rem] text-black opacity-90 text-[15px] md:text-[16px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, corrupti exercitationem. Expedita debitis minus temporibus consectetur odio, veritatis ducimus ab?</p>
    <div className='flex items-center mb-[1rem] space-x-3'>
    <FaCheck className='w-[1.3rem] h-[1.3rem] text-red-600' />
    <p className='text-[17px] text-[#02073e] font-[500]'>Medical and Vision</p>
    </div>
    <div className='flex items-center mb-[1rem] space-x-3'>
    <FaCheck className='w-[1.3rem] h-[1.3rem] text-red-600' />
    <p className='text-[17px] text-[#02073e] font-[500]'>Life Insurance</p>
    </div>
    <div className='flex items-center mb-[1rem] space-x-3'>
    <FaCheck className='w-[1.3rem] h-[1.3rem] text-red-600' />
    <p className='text-[17px] text-[#02073e] font-[500]'>400(k) Savings</p>
    </div>
    <div className='flex items-center mb-[1rem] space-x-3'>
    <FaCheck className='w-[1.3rem] h-[1.3rem] text-red-600' />
    <p className='text-[17px] text-[#02073e] font-[500]'>HSAs And FSAs</p>
    </div>
</div>

        </div>
    </div>
  )
}

export default CustomerSupport