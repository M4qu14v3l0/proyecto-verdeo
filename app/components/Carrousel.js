'use client';
import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const images = [
    {
        src: '/bosque.jpg',
        alt: 'Foto 1'
    },
    {
        src: '/comunidad.jpg',
        alt: 'Foto 1'
    },
    {
        src: '/bosque.jpg',
        alt: 'Foto 1'
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
        <div className="w-screen h-10/12 grid grid-cols-1 grid-rows-1">
            <AiOutlineLeft
                onClick={handlePrevSlide}
                className="col-start-1 col-end-2 row-start-1 row-end-2 mr-auto my-auto text-5xl cursor-pointer text-gray-400 z-20"
            /> 
            <div className="col-start-1 col-end-2 row-start-1 row-end-2 w-screen h-full flex overflow-hidden">
                <Swipe
                onSwipeLeft={handleNextSlide}
                onSwipeRight={handlePrevSlide}
                className="z-10 w-screen h-full"
                >
                {images?.map((image, index) => {
                    if (index === currentSlide) {
                    return (
                        <Image width={150000}
                        height={150000}
                        alt={image.alt}
                        key={image.id}
                        src={image.src}
                        className="animate-fadeIn"
                        />
                    );
                    }
                })}
                </Swipe>
            </div>
            <AiOutlineRight
                onClick={handleNextSlide}
                className="col-start-1 col-end-2 row-start-1 row-end-2 ml-auto my-auto text-5xl cursor-pointer text-gray-400 z-20"
            />
        {/* <div className="relative flex justify-center p-2">
            {images?.map((_, index) => {
            return (
                <div
                className={
                    index === currentSlide
                    ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                    : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
                }
                key={index}
                onClick={() => {
                    setCurrentSlide(index);
                }}
                />
            );
            })}
        </div> */}
        </div>
    );
}