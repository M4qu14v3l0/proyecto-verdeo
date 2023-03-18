'use client';
import Image from "next/image";
import { useState } from "react";
import fotoPortada from "../assets/img/logo-negro.png";
import Link from "next/link";

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(true);
    return (
        <nav className="bg-amber-50 flex flex-col">
            <div className="flex items-center">
                <div className="flex flex-col w-1/6">
                    <div className="pl-4 space-y-2" onClick={() => setIsNavOpen((prev) => !prev)}>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    </div>
                </div>
                <div className="flex w-4/6 mr-auto">
                    <Link className="flex h-24 w-24 mx-auto" href="/" onClick={() => setIsNavOpen(true)}>
                        <Image className="my-auto" src={fotoPortada} alt="logo" priority />
                    </Link>
                </div>
            </div>
            {isNavOpen === false ?
                    <ul className="flex flex-col traslate-neg h-auto mb-2">
                        <li className="my-2 ml-4 uppercase">
                            <Link onClick={() => setIsNavOpen(false)} href="/actividades">Actividades</Link>
                        </li>
                        <li className="my-2 ml-4 uppercase">
                            <Link onClick={() => setIsNavOpen(false)} href="/nosotros">Nosotros</Link>
                        </li>
                        <li className="my-2 ml-4 uppercase">
                            <Link onClick={() => setIsNavOpen(false)} href="/ayuda">Contacto</Link>
                        </li>
                        <li className="my-2 ml-4 uppercase">
                            <Link onClick={() => setIsNavOpen(false)} href="/directorio">Directorio</Link>
                        </li>
                    </ul>
                    : ""}
        </nav>
    );
}