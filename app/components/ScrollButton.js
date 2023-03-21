'use client';
import {useState} from 'react';
import arrowUp from '../assets/img/slideTop.png'
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
            <Image className='m-auto hover:animate-pulse fixed w-8 h-8 right-2 bottom-6 z-40 cursor-pointer' onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} src={arrowUp} alt="Flecha Subir" priority/>
    );
}

export default ScrollButton;