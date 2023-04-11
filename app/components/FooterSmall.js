import Link from "next/link";
import Image from "next/image";
import fotoPortada from "../assets/img/logo-negro.png";

const links = [
    {
        label: 'Lo que hacemos',
        route: '/actividades#actividades'
    },
    {
        label: 'Nosotros',
        route: '/nosotros#nosotros'
    },
    {
        label: 'Cómo ayudar',
        route: '/ayuda#ayuda'
    },
    {
        label: 'Directorio ecosostenible',
        route: '/directorio'
    },
]
const redes = [
    {
        label: 'Logo de Facebook',
        img: "/facebook.png",
        route: 'https://www.facebook.com/ProyectoVerdeo/',
        linkClass: 'w-6 h-6 hover:translate-y-cursor transition-all duration-150 ease-in-out'
    },
    {
        label: 'Logo de Instagram',
        img: "/instagram.png",
        route: 'https://www.instagram.com/proyectoverdeo/',
        linkClass: 'w-6 h-6 hover:translate-y-cursor transition-all duration-150 ease-in-out'
    },
    {
        label: 'Logo de Linktree',
        img: "/linktree.png",
        route: 'https://linktr.ee/proyectoverdeo',
        linkClass: 'w-6 h-6 hover:translate-y-cursor transition-all duration-150 ease-in-out'
    }
]
const email = "verdeoinformes@gmail.com";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };
    return (
        <div className="lg:hidden mt-auto border border-t-neutral-400">
            <div className="flex justify-around pt-6 pb-6">
                <Link href="/" onClick={scrollToTop} scroll={false}>
                    <Image className="w-auto h-16 hover:translate-y-cursor transition-all duration-200 ease-in-out" src={fotoPortada} alt="Foto de Portada" priority />
                </Link>
                <div className="my-auto">
                    <div className="flex flex-col"> 
                        <ul className="flex gap-7 mb-2 mx-auto">                        
                            {redes.map(({label, route, img, linkClass}) => (
                                <li key={route}>
                                    <Link href={route} target='_blank'>
                                        <Image width={500} height={500} className={linkClass} src={img} alt={label} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <a href="mailto:verdeoinformes@gmail.com" className="font-botones text-xs m-auto">{email}</a>
                </div>
            </div>
            <ul className="grid grid-cols-2 gap-3 pt-5 pb-5 w-11/12 mx-auto border-transparent border border-t-verde">
                {links.map(({label, route}) => (
                    <li className="flex mx-auto" key={label}>
                        <Link href={route} onClick={route === "/directorio" ? scrollToTop : ""} scroll={false} className="text-sm hover:translate-y-cursor transition-all duration-150 ease-in-out">
                            <p className="font-botones text-xs min-[360px]:text-sm">{label}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}