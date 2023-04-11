"use client"
import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";


const listItems = [
  {src: '/BusquedaVerdad.svg' , text: 'Busqueda de la verdad' , alt: 'Busqueda de la Verdad'},
  {src: '/AmorConocimiento.svg' , text: 'Amor al conocimiento' , alt: 'Amor al conocimiento'},
  {src: '/RespetoAnimal.svg' , text: 'Respeto a toda clase de vida animal' , alt: 'Respeto a los animales'},
  {src: '/EmpatiaHumanos.svg' , text: 'Empatía con todos los seres y personas en condiciones vulnerables' , alt: 'Empatía con todas las personas'},
  {src: '/Alegria.svg' , text: 'Alegria' , alt: 'Alegria'},
  {src: '/Compromiso.svg' , text: 'Compromiso' , alt: 'Compromiso'},
  {src: '/Amabilidad.svg' , text: 'Amabilidad' , alt: 'Amabilidad'},
  {src: '/Honradez.svg' , text: 'Honradez' , alt: 'Honradez'},
  {src: '/Responsabilidad.svg' , text: 'Responsabilidad' , alt: 'Responsabilidad'},
]

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
      let newSlide = currentSlide === listItems.length - 1 ? 0 : currentSlide + 1;
      setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
      let newSlide = currentSlide === 0 ? listItems.length - 1 : currentSlide - 1;
      setCurrentSlide(newSlide);
  };


return (
  <div className="w-11/12 mx-auto h-full grid grid-cols-1 grid-rows-1">
    <AiOutlineLeft
        onClick={handlePrevSlide}
        className="col-start-1 col-end-2 row-start-1 row-end-2 ml-1 mr-auto my-auto text-5xl cursor-pointer text-green-400 z-20"
    /> 
  <div className="col-start-1 col-end-2 row-start-1 row-end-2 w-full h-full flex overflow-hidden">
      <Swipe
      onSwipeLeft={handleNextSlide}
      onSwipeRight={handlePrevSlide}
      className="z-10 h-80 w-full"
      >
        {listItems?.map((item, index) => {
            if (index === currentSlide) {
            return (
                <div key={index} className="w-full h-full grid grid-cols-1 grid-rows-1 animate-fadeIn object-contain col-start-1 col-end-2 row-start-1 row-end-2">
                  <div className="col-start-1 col-end-2 row-start-1 row-end-2">
                      <Image width={150000}
                      height={150000}
                      alt={item.alt}
                      src={item.src}
                      className="w-full h-full animate-fadeIn object-contain"
                      />
                  </div>
                    <div className="col-start-1 col-end-2 row-start-1 row-end-2 mt-auto mx-auto mb-6 flex flex-col z-30">
                        <p className="font-botones text-center text-blanco text-sm px-8 mt-3">{item.titulo}</p>
                    </div>
                </div>
            );
            }
        })}
      </Swipe>
  </div>
    <AiOutlineRight
        onClick={handleNextSlide}
        className="col-start-1 col-end-2 row-start-1 row-end-2 ml-auto my-auto text-5xl cursor-pointer text-green-400 z-20"
    />
  </div>

  )
}
