import React from 'react'

import mainImage from '/images/image-hero-desktop.png'
import clientDataBiz from '/images/client-databiz.svg'
import clientAudioPhile from  '/images/client-audiophile.svg'
import clientMeet from '/images/client-meet.svg'
import clientMaker from '/images/client-maker.svg'

import { useGlobalContext } from '../context'



export default function Main() {
  return (
    <>
        <main className='grid md:grid-cols-[2fr_1.5fr] grid-cols-1 max-w-[1000px] mx-auto mb-12 '>
            <section className='
                relative md:px-4 order-last grid place-items-center 
                md:order-none md:block' >

                <h1 className='
                text-5xl md:text-6xl font-semibold
                mt-10 md:mt-20 text-center md:text-start'>
                     <span className='inline md:block'>Make </span> 
                    remote Work
                </h1>

                <p className='
                text-dark-gray md:max-w-[60%]
                 max-w-[95%] my-8 text-center md:text-start'>
                    Get your team in sync, no matter your location.
                    Streamline processes, create team rituals, and watch
                    productivity soar.
                </p>

                <button className='
                bg-black text-white py-2 px-5 font-semibold 
                rounded-md border-2 border-solid border-black
                hover:bg-white hover:text-black transition-all'>
                    Learn More
                </button>

                <footer className='
                flex mt-10 justify-center flex-wrap md:flex-nowrap 
                md:absolute md:bottom-0 gap-4 md:justify-start'>

                    <img src={clientDataBiz} alt="databiz" className='object-contain'/>
                    <img src={clientAudioPhile} alt="audioPhile" className='object-contain'/>
                    <img src={clientMeet} alt="Meet" className='object-contain'/>
                    <img src={clientMaker} alt="Maker" className='object-contain'/>
                </footer>
            </section>

            <section className='grid grid-cols-1 self-center'>
                <img src={mainImage} className='object-cover'/>
            </section>
        </main>
    </>
  )
}
