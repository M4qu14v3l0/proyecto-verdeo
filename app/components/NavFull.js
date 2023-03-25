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
        route: '/actividades'
    },
    {
        label: 'Proyectos',
        route: '/actividades'
    },
];
const nosotros = [
    {
        label: 'Nuestro equipo',
        route: '/nosotros'
    },
    {
        label: 'Nuestra Mision',
        route: '/nosotros'
    },
];
const ayuda = [
    {
        label: 'Ser Voluntario',
        route: '/ayuda/#voluntariado'
    },
    {
        label: 'Donar',
        route: '/ayuda/#donaciones'
    },
    {
        label: '10 Formas de ayudar',
        route: '/ayuda/#consejos' 
    },
];
const directorio = [
    {
        label: 'Conoce nuestro directorio',
        route: '/directorio'
    },
];

const NavFull = () => {
    const [isHacerOpen, setIsHacerOpen] = useState(false);
    const [isNosOpen, setIsNosOpen] = useState(false);
    const [isAyudaOpen, setIsAyudaOpen] = useState(false);
    const [isDirecOpen, setIsDirecOpen] = useState(false);
    function cerrar () {
        if(isHacerOpen === true || isNosOpen === true || isAyudaOpen === true || isDirecOpen === true){
            setIsHacerOpen(false);
            setIsNosOpen(false);
            setIsAyudaOpen(false);
            setIsDirecOpen(false)
        };
    }
    return (
        <nav className="flex">
            <Link className="w-1/6 py-2 mx-auto flex" href="/">
                <Image className="mx-auto h-16 w-auto hover:translate-y-cursor transition-all duration-300 ease-in-out" src={fotoPortada} onClick={() => cerrar()} alt="logo" priority />
            </Link>
            <div className="flex w-4/6 h-auto mx-auto">
                
                {/* actividades */}
                <div className="flex flex-col mr-3">
                    {isHacerOpen === true ? 
                        <div className="flex mt-5">
                            <div href='/' className="flex my-auto">
                                <h4 onClick={() => setIsHacerOpen((prev) => !prev)} className="mr-auto hover:translate-y-cursor cursor-pointer font-bold transition-all duration-150 ease-in-out text-verde">Lo que hacemos</h4>
                            </div>
                            <div className="flex my-auto">
                                <Image src={arrowDown} alt='Replegar' onClick={() => setIsHacerOpen((prev) => !prev)} className="cursor-pointer mb-auto mr-auto" />
                            </div>
                        </div>
                        :
                        <div className="flex mt-5">
                            <div href='/' className="flex my-auto">
                                <h4 onClick={() => setIsHacerOpen((prev) => !prev)} className="mr-auto hover:translate-y-cursor cursor-pointer font-bold transition-all duration-150 ease-in-out">Lo que hacemos</h4>
                            </div>
                            <div className="flex my-auto">
                                <Image src={arrowUp} alt='Desplegar' onClick={() => setIsHacerOpen((prev) => !prev)} className="cursor-pointer mb-auto mr-auto" />
                            </div>  
                        </div>                           
                    }
                    {isHacerOpen === true ?
                        <ul className="animate-display2 pb-3">
                            {hacemos.map(({label, route}) => (
                                <li className="flex" key={label}>
                                    <a href={route} onClick={() => cerrar()} className="mb-1 font-thin hover:translate-y-cursor transition-all duration-150 ease-in-out">
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    : ""
                    }
                </div>

                {/* nosotros */}
                <div className="flex flex-col mx-3">
                    {isNosOpen === true ? 
                        <div className="flex mt-5">
                            <div href='/' className="flex my-auto">
                                <h4 onClick={() => setIsNosOpen((prev) => !prev)} className="mr-auto hover:translate-y-cursor cursor-pointer font-bold transition-all duration-150 ease-in-out text-verde">Nosotros</h4>
                            </div>
                            <div className="flex my-auto">
                                <Image src={arrowDown} alt='Replegar' onClick={() => setIsNosOpen((prev) => !prev)} className="cursor-pointer mb-auto mr-auto" />
                            </div>
                        </div>
                        :
                        <div className="flex mt-5">
                            <div href='/' className="flex my-auto">
                                <h4 onClick={() => setIsNosOpen((prev) => !prev)} className="mr-auto hover:translate-y-cursor cursor-pointer font-bold transition-all duration-150 ease-in-out">Nosotros</h4>
                            </div>
                            <div className="flex my-auto">
                                <Image src={arrowUp} alt='Desplegar' onClick={() => setIsNosOpen((prev) => !prev)} className="cursor-pointer mb-auto mr-auto" />
                            </div>  
                        </div>                           
                    }
                    {isNosOpen === true ?
                        <ul className="animate-display2 pb-3">
                            {nosotros.map(({label, route}) => (
                                <li className="flex" key={label}>
                                    <a href={route} onClick={() => cerrar()} className="mb-1 font-thin hover:translate-y-cursor transition-all duration-150 ease-in-out">
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    : ""
                    }
                </div>

                {/* ayuda */}
                <div className="flex flex-col mx-3">
                    {isAyudaOpen === true ? 
                        <div className="flex mt-5">
                            <div href='/' className="flex my-auto">
                                <h4 onClick={() => setIsAyudaOpen((prev) => !prev)} className="mr-auto hover:translate-y-cursor cursor-pointer font-bold transition-all duration-150 ease-in-out text-verde">Cómo Ayudar</h4>
                            </div>
                            <div className="flex my-auto">
                                <Image src={arrowDown} alt='Replegar' onClick={() => setIsAyudaOpen((prev) => !prev)} className="cursor-pointer mb-auto mr-auto" />
                            </div>
                        </div>
                        :
                        <div className="flex mt-5">
                            <div href='/' className="flex my-auto">
                                <h4 onClick={() => setIsAyudaOpen((prev) => !prev)} className="mr-auto hover:translate-y-cursor cursor-pointer font-bold transition-all duration-150 ease-in-out">Cómo Ayudar</h4>
                            </div>
                            <div className="flex my-auto">
                                <Image src={arrowUp} alt='Desplegar' onClick={() => setIsAyudaOpen((prev) => !prev)} className="cursor-pointer mb-auto mr-auto" />
                            </div>  
                        </div>                           
                    }
                    {isAyudaOpen === true ?
                        <ul className="animate-display2 pb-3">
                            {ayuda.map(({label, route}) => (
                                <li className="flex" key={label}>
                                    <a href={route} onClick={() => cerrar()} className="mb-1 font-thin hover:translate-y-cursor transition-all duration-150 ease-in-out">
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    : ""
                    }
                </div>

                {/* directorio */}
                <div className="flex flex-col ml-3">
                    {isDirecOpen === true ? 
                        <div className="flex mt-5">
                            <div href='/' className="flex my-auto">
                                <h4 onClick={() => setIsDirecOpen((prev) => !prev)} className="mr-auto hover:translate-y-cursor cursor-pointer font-bold transition-all duration-150 ease-in-out text-verde">Directorio Ecosostenible</h4>
                            </div>
                            <div className="flex my-auto">
                                <Image src={arrowDown} alt='Replegar' onClick={() => setIsDirecOpen((prev) => !prev)} className="cursor-pointer mb-auto mr-auto" />
                            </div>
                        </div>
                        :
                        <div className="flex mt-5">
                            <div href='/' className="flex my-auto">
                                <h4 onClick={() => setIsDirecOpen((prev) => !prev)} className="mr-auto hover:translate-y-cursor cursor-pointer font-bold transition-all duration-150 ease-in-out">Directorio Ecosostenible</h4>
                            </div>
                            <div className="flex my-auto">
                                <Image src={arrowUp} alt='Desplegar' onClick={() => setIsDirecOpen((prev) => !prev)} className="cursor-pointer mb-auto mr-auto" />
                            </div>  
                        </div>                           
                    }
                    {isDirecOpen === true ?
                        <ul className="animate-display2 pb-5">
                            {directorio.map(({label, route}) => (
                                <li className="flex" key={label}>
                                    <Link href={route} onClick={() => cerrar()} className="font-thin hover:translate-y-cursor transition-all duration-150 ease-in-out">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    : ""
                    }
                </div>
            </div>
    </nav>
    )
}

export default NavFull