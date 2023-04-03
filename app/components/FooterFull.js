import Link from "next/link";
import Image from "next/image";
import fotoPortada from "../assets/img/logo-negro.png";

const links = [
    {
        label: 'Lo que hacemos',
        route: '/actividades'
    },
    {
        label: 'Cómo ayudar',
        route: '/ayuda'
    },
    {
        label: 'Nosotros',
        route: '/nosotros'
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
        route: 'https://www.facebook.com/'
    },
    {
        label: 'Logo de Instagram',
        img: "/instagram.png",
        route: 'https://www.instagram.com/'
    },
    {
        label: 'Logo de Linktree',
        img: "/linktree.png",
        route: 'https://www.telegram.com/'
    }
]
const email = "verdeoinformes@gmail.com";

const FooterFull = () => {
    return (
        <div className="hidden lg:flex items-end justify-evenly border border-t-neutral-400 mt-10">
            <Link className="my-3 ml-4" href="/">
                <Image width={500} height={500} className="w-auto h-20 hover:translate-y-cursor transition-all duration-200 ease-in-out" src={fotoPortada} alt="Foto de Portada" priority />
            </Link>
            <div className="flex my-auto flex-col ml-4"> 
                <ul className="flex gap-7 mb-2 mx-auto">                        
                    {redes.map(({label, route, img}) => (
                        <li key={route}>
                            <Link href={route}>
                                <Image width={500} height={500} className="w-4 h-4 hover:translate-y-cursor transition-all duration-150 ease-in-out" src={img} alt={label} />
                            </Link>
                        </li>
                    ))}
                </ul>
                <p className="text-xs m-auto">{email}</p>
            </div>
            <ul className="flex pt-5 pb-7">
                {links.map(({label, route}) => (
                    <li className="flex mx-8" key={label}>
                        <Link href={route} className="text-sm hover:translate-y-cursor transition-all duration-150 ease-in-out">
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterFull
