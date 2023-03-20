'use client';
import {useState} from 'react';
import arrowUp from '../assets/img/arrowup.png'
import Image from 'next/image';

const ScrollButton = () =>{
    const [visible, setVisible] = useState(false)
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
        setVisible(true)
        } 
        else if (scrolled <= 300){
        setVisible(false)
        }
    };
    const scrollToTop = () =>{
        window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        });
    };
    window.addEventListener('scroll', toggleVisible);
    return (
        <button className='opacity-80 hover:animate-pulse text-xl rounded-xl fixed w-8 h-8 right-2 bottom-6 z-1 cursor-pointer bg-verde2' onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>
            <Image className='h-3 w-3 m-auto' src={arrowUp} alt="Flecha Subir" priority/>
        </button>
    );
}

export default ScrollButton;