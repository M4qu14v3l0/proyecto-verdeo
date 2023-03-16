import Link from "next/link";
import Image from "next/image";
import fotoPortada from "../assets/img/logo-negro.png";


const links = [
    {
        label: 'Lo Que Hacemos',
        route: '/'
    },
    {
        label: 'Nosotros',
        route: '/'
    },
    {
        label: 'Como Ayudar',
        route: '/'
    },
    {
        label: 'Directorio Ecosostenible',
        route: '/'
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
        <footer className="mt-auto p-5 bg-oranges-50 border-black">
            <div className="flex justify-around mb-8 border-black">
                <Image className="w-auto h-16" src={fotoPortada} alt="Foto de Portada" />
                <div>
                    <div className="flex flex-col"> 
                        <ul className="flex gap-7 mx-auto">                        
                            {redes.map(({label, route, img}) => (
                                <li key={route}>
                                    <Link href={route}>
                                        <Image width={500} height={500} className="w-5 h-5" src={img} alt={label} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className="text-xs m-auto">{email}</p>
                </div>
            </div>
            <ul className="mt-8 rounded border border-t-black">
                {links.map(({label, route}) => (
                    <li key={route}>
                        <Link href={route} className="text-sm">
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </footer>
    )
}