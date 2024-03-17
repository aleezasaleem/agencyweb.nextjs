import React from 'react'
import ButtonBlue from '../ButtonBlue'
import ButtonRed from '../ButtonRed'
import Image from 'next/image'
import HeroImg from './hero.jpg'




const Hero = () => {
  return (
    <div className='h-[70vh] lg:h-[88vh] md:h-[88vh] sm:h-[75vh] flex flex-col items-center justify-center'>
        <div className='grid grid-cols-1 lg:grid-cols-5 items-center w-[80%] mx-auto'>
            <div className='col-span-2'>
                <h1 className='text-[27px] md:text[35px] lg:text-[40px] mb-[1rem] font-bold
                text-[#02073e] leading-[2.4rem] md:leading-[4rem]'>Exploring Inovative Path to Cultivate Your Business</h1>
                <p className='md:text-[17px] text-[15px] mb-[2rem] text-black opacity-90 font-[400]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius ad voluptas quae. Et alias unde odio aspernatur similique, eos dignissimos.
                </p>
                <div className='flex items-center space-x-4 md:space-x-6'>
                    <ButtonBlue text='Get Started' />
                    <ButtonRed text='Explore Features' />
                </div>
            </div>
            <div className='col-span-3 hidden sm:block' >
       <Image src={HeroImg} alt='hero'  />
            </div>
        </div>
    </div>
  )
}

export default Hero