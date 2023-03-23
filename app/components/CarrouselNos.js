'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const images = [
    {
        src: '/bosque.jpg',
        alt: 'Foto 1',
        href: '/nosotros/equipo',
        titulo: "Nuestro equipo",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel, delectus nulla minima tempore sint corporis.",
    },
    {
        src: '/comunidad.jpg',
        alt: 'Foto 2',
        href: '/nosotros/mision',
        titulo: "Mision",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel, delectus nulla minima tempore sint corporis.",
    },
]
export default function Carosusel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
        let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
    };

    const handlePrevSlide = () => {
        let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
        setCurrentSlide(newSlide);
    };

    return (
        <div className="w-screen h-full grid grid-cols-1 grid-rows-1">
            <AiOutlineLeft
                onClick={handlePrevSlide}
                className="col-start-1 col-end-2 row-start-1 row-end-2 ml-1 mr-auto my-auto text-5xl cursor-pointer text-white z-20"
            /> 
            <div className="col-start-1 col-end-2 row-start-1 row-end-2 w-screen h-full flex overflow-hidden">
                <Swipe
                onSwipeLeft={handleNextSlide}
                onSwipeRight={handlePrevSlide}
                className="z-10 h-80 w-full"
                >
                {images?.map((image, index) => {
                    if (index === currentSlide) {
                    return (
                        <div key={image.index} className="w-full h-full grid grid-cols-1 grid-rows-1 animate-fadeIn object-cover col-start-1 col-end-2 row-start-1 row-end-2">
                            <Link className="col-start-1 col-end-2 row-start-1 row-end-2" href={image.href} >
                                <Image width={150000}
                                height={150000}
                                alt={image.alt}
                                src={image.src}
                                className="w-full h-full animate-fadeIn object-cover"
                                />
                            </Link>
                            <div className="col-start-1 col-end-2 row-start-1 row-end-2 mt-auto mx-auto mb-6 flex flex-col z-30">
                                <h4 className="text-center text-white font-bold text-xl px-8">{image.titulo}</h4>
                                <p className="text-center text-white text-sm px-8 mt-3">{image.texto}</p>
                            </div>
                        </div>
                    );
                    }
                })}
                </Swipe>
            </div>
            <AiOutlineRight
                onClick={handleNextSlide}
                className="col-start-1 col-end-2 row-start-1 row-end-2 ml-auto my-auto text-5xl cursor-pointer text-white z-20"
            />
        </div>
    );
}