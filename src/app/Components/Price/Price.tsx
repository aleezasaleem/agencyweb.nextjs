import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import PriceCard from './PriceCard'

function Price() {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        <SectionHeading headingMini='Deal for your business' headingPrimary='Meet our pricing that suit you' />
        <div className='w-[80%] mx-auto grid pt-[6rem] gap-[2rem] lg:gap-0 grid-cols-1  md:grid-cols-2
        lg:grid-cols-3 items-center'>
            <div>
                <PriceCard bg='bg-[#81124a]' price='19.99' num='1' plan='Starter' />
            </div>
            <div>
                <PriceCard bg='bg-[#22840c]' price='29.99' num='2' plan='Primium Pack' />
            </div>
            <div>
                <PriceCard bg='bg-[#112c60]' price='39.99' num='3' plan='Standard' />
            </div>
        </div>
    </div>
  )
}

export default Price