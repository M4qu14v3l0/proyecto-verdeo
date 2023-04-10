'use client';
import Image from "next/image";
import { useState } from "react";
import fotoPortada from "../assets/img/logo-negro.png";
import Link from "next/link";
import arrowUp from '../assets/img/arrowUp.svg';
import arrowDownVerde from '../assets/img/arrowDownVerde.svg';

const hacemos = [
    {
        label: 'Talleres Ambientales',
        route: '/actividades/#talleres'
    },
    {
        label: 'Programa Abedules',
        route: '/actividades/#proyectos'
    },
];
const nosotros = [
    {
        label: 'Nuestro equipo',
        route: '/nosotros/#equipo'
    },
    {
        label: 'Nuestros vlores y misión',
        route: '/nosotros/#mision'
    },
    {
        label: 'Anuario Proyecto Verdeo',
        route: '/nosotros/#anuario'
    }
];
const ayuda = [
    {
        label: 'Ser Voluntario',
        route: 'ayuda/#voluntariado'
    },
    {
        label: 'Donar',
        route: 'ayuda/#donaciones'
    },
    {
        label: '7 Formas de ayudar',
        route: 'ayuda/#consejos' 
    },
];
const directorio = [
    {
        label: 'Conoce nuestro directorio',
        route: '/directorio'
    },
];

const NavSmall = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isHacerOpen, setIsHacerOpen] = useState(false);
    const [isNosOpen, setIsNosOpen] = useState(false);
    const [isAyudaOpen, setIsAyudaOpen] = useState(false);
    const [isDirecOpen, setIsDirecOpen] = useState(false);
    function cerrar () {
        if(isHacerOpen === true || isNosOpen === true || isAyudaOpen === true || isDirecOpen === true){
            setIsHacerOpen(false);
            setIsNosOpen(false);
            setIsAyudaOpen(false);
            setIsDirecOpen(false);
            setIsNavOpen(false);
        };
    }
    return (
        <nav className="flex lg:hidden flex-col fixed top-0 left-0 right-0 bg-amber-50">
            <div className="flex items-center">
                {isNavOpen === false ?
                <div className="flex flex-col w-1/6 pl-4">
                    <div className="space-y-2 cursor-pointer mr-auto" onClick={() => setIsNavOpen((prev) => !prev)}>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    </div>
                </div>
                :
                <div className="flex w-1/6 pl-4">
                    <svg
                        onClick={() => setIsNavOpen((prev) => !prev)}
                        className="h-6 w-6 mr-auto text-gray-600 cursor-pointer animate-pulse"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="24" y1="6" x2="6" y2="24" />
                        <line x1="6" y1="6" x2="24" y2="24" />
                    </svg>
                </div>
                }
                <div className="flex w-4/6 mr-auto">
                    <Link className="flex h-20 w-20 mx-auto" href="/" onClick={() => cerrar()}>
                        <Image className="my-auto hover:translate-y-cursor transition-all duration-300 ease-in-out" src={fotoPortada} alt="logo" priority />
                    </Link>
                </div>
            </div>
            {isNavOpen === true ?
                <div className="flex flex-col justify-between h-auto mb-3 animate-display">
                    
                    {/* inicio */}
                    <div className="flex w-4/6 my-2 ml-4">
                        <Link onClick={() => setIsNavOpen(false)} href='/' className="hover:translate-y-cursor font-bold transition-all duration-150 ease-in-out">
                            Inicio
                        </Link>
                    </div>

                    {/* actividades */}
                    {isHacerOpen === true ? 
                        <div className="flex justify-between items-center">
                            <div onClick={() => setIsNavOpen(true)} href='/' className="mr-2 flex flex-col my-2 ml-4 w-3/6">
                                <h4 onClick={() => setIsHacerOpen((prev) => !prev)} className="mr-auto hover:translate-y-cursor cursor-pointer font-bold transition-all duration-150 ease-in-out text-[#56B87F]">Lo que hacemos</h4>
                            </div>
                            <div className="flex w-3/6">
                                <Image src={arrowDownVerde} alt='Replegar' onClick={() => setIsHacerOpen((prev) => !prev)} className="cursor-pointer mr-auto" />
                            </div>
                        </div>  
                        :
                        <div className="flex justify-between items-center">
                            <div onClick={() => setIsNavOpen(true)} href='/' className="mr-2 flex flex-col my-2 ml-4 w-3/6">
                                <h4 onClick={() => setIsHacerOpen((prev) => !prev)} className="mr-auto hover:translate-y-cursor cursor-pointer font-bold transition-all duration-150 ease-in-out">Lo que hacemos</h4>
                            </div>
                            <div className="flex w-3/6">
                                <Image src={arrowUp} alt='Replegar' onClick={() => setIsHacerOpen((prev) => !prev)} className="cursor-pointer mr-auto" />
                            </div>
                        </div>  
                    }
                    <div className="ml-4 mb-1">
                        {isHacerOpen === true ?
                            <ul className="animate-display2">
                                {hacemos.map(({label, route}) => (
                                    <li className="flex" key={label}>
                                        <a onClick={() => cerrar()} href={route} className="font-normal ml-3 hover:translate-y-cursor transition-all duration-150 ease-in-out">
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        : ""
                        }
                    </div>

                    {/* nosotros */}
                    {isNosOpen === true ? 
                        <div className="flex justify-between items-center">
                            <div onClick={() => setIsNavOpen(true)} href='/' className="mr-2 flex flex-col my-2 ml-4 w-3/6">
                                <h4 onClick={() => setIsNosOpen((prev) => !prev)} className="mr-auto hover:translate-y-cursor cursor-pointer font-bold transition-all duration-150 ease-in-out text-[#56B87F]">Nosotros</h4>
                            </div>
                            <div className="flex w-3/6">
                                <Image src={arrowDownVerde} alt='Replegar' onClick={() => setIsNosOpen((prev) => !prev)} className="cursor-pointer mr-auto" />
                            </div>
                        </div>  
                        :
                        <div className="flex justify-between items-center">
                            <div onClick={() => setIsNavOpen(true)} href='/' className="mr-2 flex flex-col my-2 ml-4 w-3/6">
                                <h4 onClick={() => setIsNosOpen((prev) => !prev)} className="mr-auto hover:translate-y-cursor cursor-pointer font-bold transition-all duration-150 ease-in-out">Nosotros</h4>
                            </div>
                            <div className="flex w-3/6">
                                <Image src={arrowUp} alt='Replegar' onClick={() => setIsNosOpen((prev) => !prev)} className="cursor-pointer mr-auto" />
                            </div>
                        </div>  
                    }
                    <div className="ml-4 mb-1">
                        {isNosOpen === true ?
                            <ul className="animate-display2">
                                {nosotros.map(({label, route}) => (
                                    <li className="flex" key={label}>
                                        <a onClick={() => cerrar()} href={route} className="font-normal ml-3 hover:translate-y-cursor transition-all duration-150 ease-in-out">
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        : ""
                        }
                    </div>

                    {/* ayuda */}
                    {isAyudaOpen === true ? 
                        <div className="flex justify-between items-center">
                            <div onClick={() => setIsNavOpen(true)} href='/' className="mr-2 flex flex-col my-2 ml-4 w-3/6">
                                <h4 onClick={() => setIsAyudaOpen((prev) => !prev)} className="mr-auto hover:translate-y-cursor cursor-pointer font-bold transition-all duration-150 ease-in-out text-[#56B87F]">Cómo ayudar</h4>
                            </div>
                            <div className="flex w-3/6">
                                <Image src={arrowDownVerde} alt='Replegar' onClick={() => setIsAyudaOpen((prev) => !prev)} className="cursor-pointer mr-auto" />
                            </div>
                        </div>  
                        :
                        <div className="flex justify-between items-center">
                            <div onClick={() => setIsNavOpen(true)} href='/' className="mr-2 flex flex-col my-2 ml-4 w-3/6">
                                <h4 onClick={() => setIsAyudaOpen((prev) => !prev)} className="mr-auto hover:translate-y-cursor cursor-pointer font-bold transition-all duration-150 ease-in-out">Cómo ayudar</h4>
                            </div>
                            <div className="flex w-3/6">
                                <Image src={arrowUp} alt='Replegar' onClick={() => setIsAyudaOpen((prev) => !prev)} className="cursor-pointer mr-auto" />
                            </div>
                        </div>  
                    }
                    <div className="ml-4 mb-1">
                        {isAyudaOpen === true ?
                            <ul className="animate-display2">
                                {ayuda.map(({label, route}) => (
                                    <li className="flex" key={label}>
                                        <a onClick={() => cerrar()} href={route} className="font-normal ml-3 hover:translate-y-cursor transition-all duration-150 ease-in-out">
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        : ""
                        }
                    </div>

                    {/* directorio */}
                    {isDirecOpen === true ? 
                        <div className="flex justify-between items-center">
                            <div onClick={() => setIsNavOpen(true)} href='/' className="mr-2 flex flex-col my-2 ml-4 w-3/6">
                                <h4 onClick={() => setIsDirecOpen((prev) => !prev)} className="mr-auto hover:translate-y-cursor cursor-pointer font-bold transition-all duration-150 ease-in-out text-[#56B87F]">Directorio ecosostenible</h4>
                            </div>
                            <div className="flex w-3/6">
                                <Image src={arrowDownVerde} alt='Replegar' onClick={() => setIsDirecOpen((prev) => !prev)} className="cursor-pointer mr-auto" />
                            </div>
                        </div>  
                        :
                        <div className="flex justify-between items-center">
                            <div onClick={() => setIsNavOpen(true)} href='/' className="mr-2 flex flex-col my-2 ml-4 w-3/6">
                                <h4 onClick={() => setIsDirecOpen((prev) => !prev)} className="mr-auto hover:translate-y-cursor cursor-pointer font-bold transition-all duration-150 ease-in-out">Directorio ecosostenible</h4>
                            </div>
                            <div className="flex w-3/6">
                                <Image src={arrowUp} alt='Replegar' onClick={() => setIsDirecOpen((prev) => !prev)} className="cursor-pointer mr-auto" />
                            </div>
                        </div>  
                    }
                    <div className="ml-4 mb-1">
                        {isDirecOpen === true ?
                            <ul className="animate-display2">
                                {directorio.map(({label, route}) => (
                                    <li className="flex" key={label}>
                                        <a onClick={() => cerrar()} href={route} className="font-normal ml-3 hover:translate-y-cursor transition-all duration-150 ease-in-out">
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        : ""
                        }
                    </div>
                    {/* contactanos */}
                    <div className="flex justify-between items-center">
                            <div className="mr-2 flex flex-col my-2 ml-4 w-3/6">
                                <a href="/#footer"><h4 onClick={() => cerrar()} className="mr-auto hover:translate-y-cursor cursor-pointer font-bold transition-all duration-150 ease-in-out">Contáctanos</h4></a>
                            </div>
                        </div>  
                </div>
            : ""}
        </nav>
    )
}

export default NavSmall
