'use client';
import {useState, useEffect} from 'react';
import arrowUp from '../assets/img/slideTop.png'
import Image from 'next/image';

const ScrollButton = () =>{
    const [scrollTop, setScrollTop] = useState(false);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 80) {
                setVisible(true);
                setScrollTop(true);
            } else {
                setVisible(false);
                setScrollTop(false);
            }
        });
    }, []);
    const bottomToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
            <Image className='m-auto hover:animate-pulse fixed w-10 h-10 right-1 lg:right-4 bottom-16 mb-3 lg:mb-0 min-[450px]:bottom-36 min-[450px]:mb-1 lg:bottom-8 z-50 cursor-pointer' onClick={bottomToTop} style={{display: visible ? 'inline' : 'none'}} src={arrowUp} alt="Flecha Subir" priority/>
    );
}

export default ScrollButton;