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
            <Image className='m-auto hover:animate-pulse fixed w-8 h-8 right-2 bottom-6 z-40 cursor-pointer' onClick={bottomToTop} style={{display: visible ? 'inline' : 'none'}} src={arrowUp} alt="Flecha Subir" priority/>
    );
}

export default ScrollButton;