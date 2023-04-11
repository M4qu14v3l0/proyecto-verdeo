'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const images = [
    {
        src: '/equipo2.jpg',
        alt: 'Foto 1',
        href: '/nosotros/#equipo',
        titulo: "Nuestro equipo",
        texto: "Somos un equipo de personas que buscamos compartir el conocimiento y el amor por la naturaleza y una vida en armonía.",
    },
    {
        src: '/valores2.jpg',
        alt: 'Foto 2',
        href: '/nosotros/#valores',
        titulo: "Nuestros valores",
        texto: '"La integridad es hacer lo correcto aunque nadie te esté mirando".',
    },
    {
        src: '/mision2.jpg',
        alt: 'Foto 1',
        href: '/nosotros/#mision',
        titulo: "Misión/Visión",
        texto: "Queremos llegar a ser uno de los proyectos líderes y referentes en educacion ambiental y preservación.",
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
        <div className="h-full w-11/12 mx-auto grid grid-cols-1 grid-rows-1">
            <AiOutlineLeft
                onClick={handlePrevSlide}
                className="col-start-1 col-end-2 row-start-1 row-end-2 ml-1 mr-auto my-auto text-4xl cursor-pointer text-blanco z-20"
            /> 
            <div className="col-start-1 col-end-2 row-start-1 row-end-2 w-full h-full flex overflow-hidden">
                <Swipe
                onSwipeLeft={handleNextSlide}
                onSwipeRight={handlePrevSlide}
                className="z-10 h-80 w-full"
                >
                {images?.map((image, index) => {
                    if (index === currentSlide) {
                    return (
                        <div key={image.titulo} className="w-full h-full grid grid-cols-1 grid-rows-1 animate-fadeIn object-cover col-start-1 col-end-2 row-start-1 row-end-2">
                            <Link className="col-start-1 col-end-2 row-start-1 row-end-2" href={image.href} >
                                <Image width={150000}
                                height={150000}
                                alt={image.alt}
                                src={image.src}
                                className="rounded-xl w-full h-full animate-fadeIn object-cover"
                                />
                            </Link>
                            <Link className="col-start-1 col-end-2 row-start-1 row-end-2 mt-auto mx-auto mb-6 flex flex-col z-30" href={image.href}>
                                <h4 className="text-center text-blanco font-bold text-xl px-8">{image.titulo}</h4>
                                <p className="text-center text-blanco text-sm px-8 mt-3">{image.texto}</p>
                            </Link>
                        </div>
                    );
                    }
                })}
                </Swipe>
            </div>
            <AiOutlineRight
                onClick={handleNextSlide}
                className="col-start-1 col-end-2 row-start-1 row-end-2 ml-auto my-auto text-4xl cursor-pointer text-blanco z-20"
            />
        </div>
    );
}