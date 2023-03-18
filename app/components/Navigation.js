'use client';
import Image from "next/image";
import { useState } from "react";
import fotoPortada from "../assets/img/logo-negro.png";
import Link from "next/link";

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <nav className="flex items-center bg-amber-50">
            <div className="pl-4 space-y-2 w-1/6 me-auto" onClick={() => setIsNavOpen((prev) => !prev)}>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>
            <section>
                <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                    <div
                    className="absolute top-0 right-0 px-8 py-8"
                    onClick={() => setIsNavOpen(false)}
                    >
                        <svg
                            className="h-8 w-8 text-gray-600"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </div>
                    <ul className="flex flex-col items-center justify-between min-h-[250px]">
                        <li className="border-b border-gray-400 my-8 uppercase">
                            <Link onClick={() => setIsNavOpen(false)} href="/actividades">Actividades</Link>
                        </li>
                        <li className="border-b border-gray-400 my-8 uppercase">
                            <Link onClick={() => setIsNavOpen(false)} href="/nosotros">Nosotros</Link>
                        </li>
                        <li className="border-b border-gray-400 my-8 uppercase">
                            <Link onClick={() => setIsNavOpen(false)} href="/ayuda">Contacto</Link>
                        </li>
                        <li className="border-b border-gray-400 my-8 uppercase">
                            <Link onClick={() => setIsNavOpen(false)} href="/directorio">Directorio</Link>
                        </li>
                    </ul>
                </div>
            </section>
            <div className="w-4/6 flex">
                <Link className="flex h-24 w-24 mx-auto" href="/">
                    <Image className="my-auto" src={fotoPortada} alt="logo" priority />
                </Link>
            </div>
            <style>{`
            .hideMenuNav {
                display: none;
            }
            .showMenuNav {
                display: block;
                position: absolute;
                width: 100%;
                height: 100vh;
                top: 0;
                left: 0;
                background: white;
                z-index: 10;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
            }
            `}</style>
        </nav>
    );
}