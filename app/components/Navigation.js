'use client';
import Image from "next/image";
import { useState } from "react";
import fotoPortada from "../assets/img/logo-negro.png";
import Link from "next/link";

const links = [
    {
        label: 'Lo Que Hacemos',
        route: '/actividades'
    },
    {
        label: 'Nosotros',
        route: '/nosotros'
    },
    {
        label: 'Contacto',
        route: '/ayuda'
    },
    {
        label: 'Directorio Ecosostenible',
        route: '/directorio'
    },
]

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(true);
    return (
        <header>
            <nav className="flex flex-col">
                <div className="flex items-center">
                    <div className="flex flex-col w-1/6">
                        <div className="pl-4 space-y-2 cursor-pointer" onClick={() => setIsNavOpen((prev) => !prev)}>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        </div>
                    </div>
                    <div className="flex w-4/6 mr-auto">
                        <Link className="flex h-24 w-24 mx-auto" href="/" onClick={() => setIsNavOpen(true)}>
                            <Image className="my-auto hover:translate-y-cursor transition-all duration-300 ease-in-out" src={fotoPortada} alt="logo" priority />
                        </Link>
                    </div>
                </div>
                {isNavOpen === false ?
                    <ul className="flex flex-col h-auto mb-2">
                        {links.map(({label, route}) => (
                            <li className="flex" key={label}>
                                <Link onClick={() => setIsNavOpen(false)} href={route} className="my-2 ml-4 hover:translate-y-cursor transition-all duration-150 ease-in-out">
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                : ""}
            </nav>
        </header>
    );
}