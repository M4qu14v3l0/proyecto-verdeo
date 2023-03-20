import React from 'react'
import Image from 'next/image';
import hero from '../assets/img/bosque.jpg';
import Link from 'next/link';

const Hero = () => {
    return (
        <div className="w-screen h-2/4 grid grid-cols-1 grid-rows-1">
            <Image className="col-start-1 col-end-1 row-start-1 row-end-1" src={hero} alt="Foto Hero" priority />
            <Link className='mt-auto mb-5 mx-auto text-center col-start-1 col-end-1 row-start-1 row-end-1 flex flex-col' href="/"><h1 className='text-white font-bold m-auto text-3xl md:text-5xl lg:text-8xl'>Proyecto <br/> Verdeo</h1></Link>
        </div>
    )
}

export default Hero
