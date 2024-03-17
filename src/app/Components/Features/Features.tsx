import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import FeaturesCard from './FeaturesCard'
import Icon1 from './icon1.png'
import Icon2 from './icon2.png'
import Icon3 from './icon3.png'
import Icon4 from './icon4.png'
import Icon5 from './icon5.png'


function Features() {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        <SectionHeading headingMini='Ideal solution for you' headingPrimary='Explore Ultimate Features' />
        <div className='pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        items-center gap-[1.5rem]'>
            <div>
                <FeaturesCard title='Email Subscription' image={Icon1.src} />
            </div>
            <div>
                <FeaturesCard title='IgniteTech' image={Icon2.src} />
            </div>
            <div>
                <FeaturesCard title='Maverick Solutions' image={Icon3.src} />
            </div>
            <div>
                <FeaturesCard title='Raptor Creative' image={Icon4.src} />
            </div>
            <div>
                <FeaturesCard title='SynchroStudio' image={Icon5.src} />
            </div>
            <div>
                <FeaturesCard title='Email Subscription' image={Icon2.src} />
            </div>
        </div>
    </div>
  )
}

export default Features