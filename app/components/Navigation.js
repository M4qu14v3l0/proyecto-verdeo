'use client';
import Image from "next/image";
import { useState } from "react";
import fotoPortada from "../assets/img/logo-negro.png";
import Link from "next/link";
import arrowUp from '../assets/img/arrowUp.svg';
import arrowDown from '../assets/img/arrowDown.svg';

const hacemos = [
    {
        label: 'Talleres',
        route: '/actividades/talleres'
    },
    {
        label: 'Proyectos',
        route: '/actividades/proyectos'
    },
];
const nosotros = [
    {
        label: 'Nuestro equipo',
        route: '/nosotros/equipo'
    },
    {
        label: 'Nuestra Mision',
        route: '/nosotros/mision'
    },
];
const ayuda = [
    {
        label: 'Ser Voluntario',
        route: '/ayuda/voluntariado'
    },
    {
        label: 'Donar',
        route: '/ayuda/donaciones'
    },
    {
        label: '10 Formas de ayudar',
        route: '/ayuda/consejos' 
    },
];
const directorio = [
    {
        label: 'Conoce nuestro directorio',
        route: '/directorio'
    },
];


export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isHacerOpen, setIsHacerOpen] = useState(false);
    const [isNosOpen, setIsNosOpen] = useState(false);
    const [isAyudaOpen, setIsAyudaOpen] = useState(false);
    const [isDirecOpen, setIsDirecOpen] = useState(false);
    return (
        <header>
            <nav className="flex flex-col">
                <div className="flex items-center">
                    {isNavOpen === false ?
                    <div className="flex flex-col w-1/6 pl-4 ">
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
                        <Link className="flex h-24 w-24 mx-auto lg:h-36 lg:w-36" href="/" onClick={() => setIsNavOpen(false)}>
                            <Image className="my-auto hover:translate-y-cursor transition-all duration-300 ease-in-out" src={fotoPortada} alt="logo" priority />
                        </Link>
                    </div>
                </div>
                {isNavOpen === true ?
                    <div className="flex flex-col justify-between h-auto mb-2 animate-display">
                        
                        {/* inicio */}
                        <div className="flex w-4/6 my-2 ml-4">
                            <Link onClick={() => setIsNavOpen(false)} href='/' className="hover:translate-y-cursor font-bold transition-all duration-150 ease-in-out">
                                Inicio
                            </Link>
                        </div>

                        {/* actividades */}
                        <div className="flex justify-between items-center">
                            <div onClick={() => setIsNavOpen(true)} href='/' className="mr-2 flex flex-col my-2 ml-4 w-3/6">
                                <h4 onClick={() => setIsHacerOpen((prev) => !prev)} className="mr-auto hover:translate-y-cursor cursor-pointer font-bold transition-all duration-150 ease-in-out">Lo que hacemos</h4>
                            </div>
                            {isHacerOpen === true ? 
                                <div className="flex w-3/6">
                                    <Image src={arrowDown} alt='Desplegar' onClick={() => setIsHacerOpen((prev) => !prev)} className="cursor-pointer mr-auto" />
                                </div>
                                :
                                <div className="flex w-3/6">
                                    <Image src={arrowUp} alt='Desplegar' onClick={() => setIsHacerOpen((prev) => !prev)} className="cursor-pointer mr-auto" />
                                </div>                             
                            }
                        </div>
                        <div className="ml-4 mb-1">
                            {isHacerOpen === true ?
                                <ul className="animate-display2">
                                    {hacemos.map(({label, route}) => (
                                        <li className="flex" key={label}>
                                            <Link onClick={() => setIsNavOpen(false)} href={route} className="font-thin ml-3 hover:translate-y-cursor transition-all duration-150 ease-in-out">
                                                {label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            : ""
                            }
                        </div>

                        {/* nosotros */}
                        <div className="flex justify-between items-center">
                            <div className="mr-2 flex flex-col my-2 ml-4 w-3/6">
                                <h4 onClick={() => setIsNosOpen((prev) => !prev)} className="mr-auto hover:translate-y-cursor cursor-pointer font-bold transition-all duration-150 ease-in-out">Nosotros</h4>
                            </div>
                            {isNosOpen === true ? 
                                <div className="flex w-3/6">
                                    <Image src={arrowDown} alt='Desplegar' onClick={() => setIsNosOpen((prev) => !prev)} className="cursor-pointer mr-auto" />
                                </div>
                                :
                                <div className="flex w-3/6">
                                    <Image src={arrowUp} alt='Desplegar' onClick={() => setIsNosOpen((prev) => !prev)} className="cursor-pointer mr-auto" />
                                </div> 
                            }
                        </div>
                        <div className="ml-4 mb-1">
                            {isNosOpen === true ?
                                <ul className="animate-display2">
                                    {nosotros.map(({label, route}) => (
                                        <li className="flex" key={label}>
                                            <Link onClick={() => setIsNavOpen(false)} href={route} className="font-thin ml-3 hover:translate-y-cursor transition-all duration-150 ease-in-out">
                                                {label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            : ""
                            }
                        </div>

                        {/* ayuda */}
                        <div className="flex justify-between items-center">
                            <div className="mr-2 flex flex-col my-2 ml-4 w-3/6">
                                <h4 onClick={() => setIsAyudaOpen((prev) => !prev)} className="mr-auto hover:translate-y-cursor cursor-pointer font-bold transition-all duration-150 ease-in-out">Como ayudar</h4>
                            </div>
                            {isAyudaOpen === true ? 
                                <div className="flex w-3/6">
                                    <Image src={arrowDown} alt='Desplegar' onClick={() => setIsAyudaOpen((prev) => !prev)} className="cursor-pointer mr-auto" />
                                </div>
                                :
                                <div className="flex w-3/6">
                                    <Image src={arrowUp} alt='Desplegar' onClick={() => setIsAyudaOpen((prev) => !prev)} className="cursor-pointer mr-auto" />
                                </div> 
                            }
                        </div>
                        <div className="ml-4 mb-1">
                            {isAyudaOpen === true ?
                                <ul className="animate-display2">
                                    {ayuda.map(({label, route}) => (
                                        <li className="flex" key={label}>
                                            <Link onClick={() => setIsNavOpen(false)} href={route} className="font-thin ml-3 hover:translate-y-cursor transition-all duration-150 ease-in-out">
                                                {label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            : ""
                            }
                        </div>

                        {/* directorio */}
                        <div className="flex justify-between items-center">
                            <div className="mr-2 flex flex-col my-2 ml-4 w-3/6">
                                <h4 onClick={() => setIsDirecOpen((prev) => !prev)} className="mr-auto hover:translate-y-cursor cursor-pointer font-bold transition-all duration-150 ease-in-out">Directorio Ecosostenible</h4>
                            </div>
                            {isDirecOpen === true ? 
                                <div className="flex w-3/6">
                                    <Image src={arrowDown} alt='Desplegar' onClick={() => setIsDirecOpen((prev) => !prev)} className="cursor-pointer mr-auto" />
                                </div>
                                :
                                <div className="flex w-3/6">
                                    <Image src={arrowUp} alt='Desplegar' onClick={() => setIsDirecOpen((prev) => !prev)} className="cursor-pointer mr-auto" />
                                </div> 
                            }
                        </div>
                        <div className="ml-4 mb-1">
                            {isDirecOpen === true ?
                                <ul className="animate-display2">
                                    {directorio.map(({label, route}) => (
                                        <li className="flex" key={label}>
                                            <Link onClick={() => setIsNavOpen(false)} href={route} className="font-thin ml-3 hover:translate-y-cursor transition-all duration-150 ease-in-out">
                                                {label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            : ""
                            }
                        </div>
                    </div>
                : ""}
            </nav>
        </header>
    );
}