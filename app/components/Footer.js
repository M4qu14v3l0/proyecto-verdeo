import Link from "next/link";
import Image from "next/image";
import fotoPortada from "../assets/img/logo-negro.png";

const links = [
    {
        label: 'Lo Que Hacemos',
        route: '/actividades'
    },
    {
        label: 'Como Ayudar',
        route: '/ayuda'
    },
    {
        label: 'Nosotros',
        route: '/nosotros'
    },
    {
        label: 'Directorio Ecosostenible',
        route: '/directorio'
    },
]
const redes = [
    {
        label: 'Logo de Facebook',
        img: "/facebook.png",
        route: 'https://www.facebook.com/'
    },
    {
        label: 'Logo de Instagram',
        img: "/instagram.png",
        route: 'https://www.instagram.com/'
    },
    {
        label: 'Logo de Twitter',
        img: "/twitter.png",
        route: 'https://www.twitter.com/'
    }
]
const email = "verdeoinformes@gmail.com";

export default function Footer() {
    return (
        <footer className="mt-auto bg-oranges-50 border border-t-neutral-400">
            <div className="flex justify-around pt-6 pb-6">
                <Link href="/">
                    <Image className="w-auto h-16 hover:translate-y-cursor transition-all duration-300 ease-in-out" src={fotoPortada} alt="Foto de Portada" priority />
                </Link>
                <div className="my-auto">
                    <div className="flex flex-col"> 
                        <ul className="flex gap-7 mb-2 mx-auto">                        
                            {redes.map(({label, route, img}) => (
                                <li key={route}>
                                    <Link href={route}>
                                        <Image width={500} height={500} className="w-4 h-4 hover:translate-x-cursor transition-all duration-300 ease-in-out" src={img} alt={label} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className="text-xs m-auto">{email}</p>
                </div>
            </div>
            <ul className="grid grid-cols-2 gap-3 pt-5 pb-5 w-11/12 border-transparent border border-t-verde">
                {links.map(({label, route}) => (
                    <li className="flex mx-auto" key={label}>
                        <Link href={route} className="text-sm hover:translate-y-cursor transition-all duration-150 ease-in-out">
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </footer>
    )
}