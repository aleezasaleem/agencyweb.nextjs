import React from 'react'
import Icon2 from './icon2.png'
import Icon1 from './icon1.png'
import SupportTeamImg from './supportteam.webp'
import Image from 'next/image'

function SupportTeam() {
  return (
    <div className='pt-[7rem] pb-[3rem]'>
        <div className='w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-[2rem]'>
            <div>
                <h1 className='text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold
                text-[#02073e] leading-[2.4rem] md:leading-[4rem]'>Do you need help? Our Support Team ready to help you</h1>
                <p className='text-gray-900 opacity-90 text-[17px] mt-[1rem] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dignissimos voluptas suscipit nam labore ratione laboriosam nisi, officiis autem possimus id sequi eos repudiandae reiciendis?</p>
                <div className='flex items-center space-x-6 mt-[2rem]'>
                    <Image src={Icon1} alt='icon1' width={60} height={60}/>
                    <div>
                        <h1 className='text-[18px] text-gray-900 font-[800] mb-[0.5rem]'>Email client support</h1>
                        <p className='md:w-[70%] w-[90%] text-[15px] text-black opacity-85'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, fugiat!</p>
                    </div>
                </div>
                <div className='flex items-center space-x-6 mt-[2rem]'>
                    <Image src={Icon2} alt='icon1' width={60} height={60}/>
                    <div>
                        <h1 className='text-[18px] text-gray-900 font-[800] mb-[0.5rem]'>Live Ticket support</h1>
                        <p className='md:w-[70%] w-[90%] text-[15px] text-black opacity-85'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, fugiat!</p>
                    </div>
                </div>
            </div>
            <div>
                <Image src={SupportTeamImg} alt='support' />
            </div>
        </div>
    </div>
  )
}

export default SupportTeam