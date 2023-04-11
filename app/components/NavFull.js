'use client';
import Image from "next/image";
import { useState } from "react";
import fotoPortada from "../assets/img/logo-negro.png";
import Link from "next/link";
import arrowUp from '../assets/img/arrowUp.svg';
import arrowDownVerde from '../assets/img/arrowDownVerde.svg';

const hacemos = [
    {
        label: 'Programa Abedules',
        route: '/actividades/#proyectos'
    },
    {
        label: 'Talleres Ambientales',
        route: '/actividades/#talleres'
    },
];
const nosotros = [
    {
        label: 'Nuestro equipo',
        route: '/nosotros/#equipo'
    },
    {
        label: 'Nuestros valores',
        route: '/nosotros/#valores'
    },
    {
        label: 'Misión/Visión',
        route: '/nosotros/#mision'
    },
    {
        label: 'Anuario',
        route: '/nosotros/#anuario'
    }
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
        label: '7 Formas de ayudar',
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
        <nav className="shadow-[2px_2px_4px_0px_#00000040;] hidden lg:flex fixed top-0 left-0 right-0 bg-amber-50">
            <Link className="w-1/6 py-2 flex" href="/">
                <Image className="mx-auto h-16 w-auto hover:translate-y-cursor transition-all duration-300 ease-in-out" src={fotoPortada} onClick={() => cerrar()} alt="logo" priority />
            </Link>
            <div className="flex min-[1300px]:w-4/6 h-auto min-[1120px]:justify-center min-[1120px]:gap-x-3">
                
                {/* actividades */}
                <div className="flex flex-col pl-1 min-[1120px]:pl-2">
                    {isHacerOpen === true ? 
                        <div className="flex mt-5">
                            <div href='/' className="flex my-auto">
                                <h4 onClick={() => setIsHacerOpen((prev) => !prev)} className="font-botones mr-auto hover:translate-y-cursor cursor-pointer font-bold transition-all duration-150 ease-in-out text-[#56B87F] pr-3">Lo que hacemos</h4>
                            </div>
                            <div className="flex my-auto">
                                <Image src={arrowDownVerde} alt='Replegar' onClick={() => setIsHacerOpen((prev) => !prev)} className="cursor-pointer mb-auto mr-auto" />
                            </div>
                        </div>
                        :
                        <div className="flex mt-5">
                            <div href='/' className="flex my-auto">
                                <h4 onClick={() => setIsHacerOpen((prev) => !prev)} className="font-botones mr-auto hover:translate-y-cursor cursor-pointer font-bold transition-all duration-150 ease-in-out pr-3">Lo que hacemos</h4>
                            </div>
                            <div className="flex my-auto">
                                <Image src={arrowUp} alt='Desplegar' onClick={() => setIsHacerOpen((prev) => !prev)} className="cursor-pointer mb-auto mr-auto" />
                            </div>  
                        </div>                           
                    }
                    {isHacerOpen === true ?
                        <ul className="animate-display2 pb-3">
                            {hacemos.map(({label, route}) => (
                                <li className="flex mb-1" key={label}>
                                    <a href={route} onClick={() => cerrar()} className="font-botones mb-1 font-normal hover:translate-y-cursor transition-all duration-250 ease-in-out">
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    : ""
                    }
                </div>

                {/* nosotros */}
                <div className="flex flex-col px-1 min-[1120px]:px-2">
                    {isNosOpen === true ? 
                        <div className="flex mt-5">
                            <div href='/' className="flex my-auto">
                                <h4 onClick={() => setIsNosOpen((prev) => !prev)} className="font-botones mr-auto hover:translate-y-cursor cursor-pointer font-bold transition-all duration-150 ease-in-out text-[#56B87F] pr-3">Nosotros</h4>
                            </div>
                            <div className="flex my-auto">
                                <Image src={arrowDownVerde} alt='Replegar' onClick={() => setIsNosOpen((prev) => !prev)} className="cursor-pointer mb-auto mr-auto" />
                            </div>
                        </div>
                        :
                        <div className="flex mt-5">
                            <div href='/' className="flex my-auto">
                                <h4 onClick={() => setIsNosOpen((prev) => !prev)} className="font-botones mr-auto hover:translate-y-cursor cursor-pointer font-bold transition-all duration-150 ease-in-out pr-3">Nosotros</h4>
                            </div>
                            <div className="flex my-auto">
                                <Image src={arrowUp} alt='Desplegar' onClick={() => setIsNosOpen((prev) => !prev)} className="cursor-pointer mb-auto mr-auto" />
                            </div>  
                        </div>                           
                    }
                    {isNosOpen === true ?
                        <ul className="animate-display2 pb-3">
                            {nosotros.map(({label, route}) => (
                                <li className="flex mb-1" key={label}>
                                    <a href={route} onClick={() => cerrar()} className="font-botones mb-1 font-normal hover:translate-y-cursor transition-all duration-250 ease-in-out">
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    : ""
                    }
                </div>

                {/* ayuda */}
                <div className="flex flex-col px-1 min-[1120px]:px-2">
                    {isAyudaOpen === true ? 
                        <div className="flex mt-5">
                            <div href='/' className="flex my-auto">
                                <h4 onClick={() => setIsAyudaOpen((prev) => !prev)} className="font-botones mr-auto hover:translate-y-cursor cursor-pointer font-bold transition-all duration-150 ease-in-out text-[#56B87F] pr-3">Cómo Ayudar</h4>
                            </div>
                            <div className="flex my-auto">
                                <Image src={arrowDownVerde} alt='Replegar' onClick={() => setIsAyudaOpen((prev) => !prev)} className="cursor-pointer mb-auto mr-auto" />
                            </div>
                        </div>
                        :
                        <div className="flex mt-5">
                            <div href='/' className="flex my-auto">
                                <h4 onClick={() => setIsAyudaOpen((prev) => !prev)} className="font-botones mr-auto hover:translate-y-cursor cursor-pointer font-bold transition-all duration-150 ease-in-out pr-3">Cómo Ayudar</h4>
                            </div>
                            <div className="flex my-auto">
                                <Image src={arrowUp} alt='Desplegar' onClick={() => setIsAyudaOpen((prev) => !prev)} className="cursor-pointer mb-auto mr-auto" />
                            </div>  
                        </div>                           
                    }
                    {isAyudaOpen === true ?
                        <ul className="animate-display2 pb-3">
                            {ayuda.map(({label, route}) => (
                                <li className="flex mb-1" key={label}>
                                    <a href={route} onClick={() => cerrar()} className="font-botones mb-1 font-normal hover:translate-y-cursor transition-all duration-250 ease-in-out">
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    : ""
                    }
                </div>

                {/* directorio */}
                <div className="flex flex-col px-1 min-[1120px]:px-2">
                    {isDirecOpen === true ? 
                        <div className="flex mt-5">
                            <div href='/' className="flex my-auto">
                                <h4 onClick={() => setIsDirecOpen((prev) => !prev)} className="font-botones mr-auto hover:translate-y-cursor cursor-pointer font-bold transition-all duration-150 ease-in-out text-[#56B87F] pr-3">Directorio Ecosostenible</h4>
                            </div>
                            <div className="flex my-auto">
                                <Image src={arrowDownVerde} alt='Replegar' onClick={() => setIsDirecOpen((prev) => !prev)} className="cursor-pointer mb-auto mr-auto" />
                            </div>
                        </div>
                        :
                        <div className="flex mt-5">
                            <div href='/' className="flex my-auto">
                                <h4 onClick={() => setIsDirecOpen((prev) => !prev)} className="font-botones mr-auto hover:translate-y-cursor cursor-pointer font-bold transition-all duration-150 ease-in-out pr-3">Directorio Ecosostenible</h4>
                            </div>
                            <div className="flex my-auto">
                                <Image src={arrowUp} alt='Desplegar' onClick={() => setIsDirecOpen((prev) => !prev)} className="cursor-pointer mb-auto mr-auto" />
                            </div>  
                        </div>                           
                    }
                    {isDirecOpen === true ?
                        <ul className="animate-display2 pb-5">
                            {directorio.map(({label, route}) => (
                                <li className="flex mb-1" key={label}>
                                    <Link href={route} onClick={() => cerrar()} className="font-botones mb-1 font-normal hover:translate-y-cursor transition-all duration-250 ease-in-out">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    : ""
                    }
                </div>

                {/* contactanos */}
                <div className="flex flex-col pr-1 min-[1120px]:pr-2">
                    <div className="flex mt-7">
                        <div href='/' className="flex my-auto">
                            <a onClick={() => cerrar()} href="https://docs.google.com/forms/d/e/1FAIpQLSeRxUUKkLi_XG4SvFMsNZUzMdXjtc9jWRN0HrDXMPoVIgoNWw/viewform?usp=sf_link" target="_blank"><h4 className="font-botones mr-auto hover:translate-y-cursor cursor-pointer font-bold transition-all duration-150 ease-in-out">Contáctanos</h4></a>
                        </div>
                    </div>
                </div>
            </div>
    </nav>
    )
}

export default NavFull