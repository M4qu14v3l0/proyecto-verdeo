import Link from "next/link";

const actividades = [
    {
        title: "PA",
        subtitle: "Lo Que Hacemos",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quod facilis sed suscipit omnis tempore quo sapiente expedita velit incidunt aspernatur ut dolor eveniet.",
        route: '/actividades/talleres',
        divclass: "rounded-2xl border-2 border-verde p-6 flex flex-col mb-6 lg:h-[50vh] lg:mb-0 lg:w-[30vw] lg:mr-4",
        titleclass: "text-center text-6xl font-bold text-verde mt-6 mb-5",
        linkclass:"flex mx-auto rounded-2xl bg-verde w-4/12 h-8 hover:bg-green-700 transition-all duration-300 ease-in-out"
    },
    {
        title: "TA",
        subtitle: "Proyecto Abedul",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quod facilis sed suscipit omnis tempore quo sapiente expedita velit incidunt aspernatur ut dolor eveniet.",
        route: '/actividades/proyectos',
        divclass: "rounded-2xl border-2 border-rojo p-6 flex flex-col lg:h-[50vh] lg:w-[30vw] lg:ml-4",
        titleclass: "text-center text-6xl font-bold text-rojo mt-6 mb-5",
        linkclass:"flex mx-auto rounded-2xl bg-rojo w-4/12 h-8 hover:bg-red-700 transition-all duration-300 ease-in-out"
    },
]

const Hacemos = () => {
    return (
        <div className="w-11/12 flex mx-auto flex-col mt-6 lg:mt-10 lg:mb-10">
            <h2 className="text-center font-bold text-xl mb-4 lg:mb-6 lg:text-3xl">Lo que hacemos</h2>
            <p className="text-center text-sm mb-5 lg:mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero corrupti molestiae quas et, explicabo odit eligendi, voluptatibus eius asperiores voluptatum ipsam atque saepe velit nobis illum? Nam quidem earum voluptate.</p>
            <div className="flex flex-col mb-8 lg:flex-row lg:justify-center">
            {actividades.map(({title, subtitle,  text, route, divclass, titleclass, linkclass}) => (
                <div className={divclass} key={title}>
                    <h3 className={titleclass}>{title}</h3>
                    <h4 className="text-center font-bold mb-5">{subtitle}</h4>
                    <p className="text-center mb-3">{text}</p>
                    <Link href={route} className={linkclass}>
                        <p className="font-botones text-blanco text-center m-auto text-sm">Ver más</p>
                    </Link>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Hacemos;
