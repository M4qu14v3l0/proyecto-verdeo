'use client';
import useWindowSize from "@rooks/use-window-size";
import NavSmall from "./NavSmall";
import NavFull from "./NavFull";

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
    const { outerWidth } = useWindowSize();
    return (
        <header>
            {outerWidth >= 1024 ? <NavFull /> : <NavSmall />}
        </header>
    );
}