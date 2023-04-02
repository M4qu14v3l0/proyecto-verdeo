import Link from "next/link";

const actividades = [
    {
        title: "TA",
        subtitle: "Proyecto Abedules",
        text: "Programa dirigido a niños, niñas y adolescentes  de casas hogares.",
        route: '/actividades/#talleres',
        divclass: "rounded-2xl bg-verde p-10 flex flex-col mb-6 lg:min-h-[50vh] lg:mb-0 lg:w-[30vw] lg:mr-4",
        titleclass: "text-center text-blanco text-8xl font-bold mt-6",
        textClass: "font-botones text-verde text-center m-auto text-sm",
        linkclass:"mt-auto flex mx-auto rounded-2xl bg-verde2 w-4/12 h-8 hover:bg-[#2F9D5F] transition-all duration-300 ease-in-out lg:mb-6"
    },
    {
        title: "PA",
        subtitle: "Talleres",
        text: "Dirigido a niños, adolescentes y público en general que busca reconectar con la naturaleza y aprender más sobre cómo podemos hacer algo desde donde estamos.",
        route: '/actividades/#proyectos',
        divclass: "rounded-2xl bg-rojo p-10 flex flex-col lg:min-h-[50vh] lg:w-[30vw] lg:ml-4",
        titleclass: "text-center text-blanco text-8xl font-bold mt-6",
        textClass: "font-botones text-rojo text-center m-auto text-sm",
        linkclass:"mt-auto flex mx-auto rounded-2xl bg-rosa w-4/12 h-8 hover:bg-[#CF6842] transition-all duration-300 ease-in-out lg:mb-6"
    },
]

const Hacemos = () => {
    return (
        <div className="w-11/12 flex mx-auto flex-col mt-6 lg:mt-10 lg:mb-10">
            <h2 className="text-center font-bold text-xl mb-4 lg:mb-6 lg:text-3xl">Lo que hacemos</h2>
            <p className="text-center text-sm mb-5 lg:mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero corrupti molestiae quas et, explicabo odit eligendi, voluptatibus eius asperiores voluptatum ipsam atque saepe velit nobis illum? Nam quidem earum voluptate.</p>
            <div className="flex flex-col mb-8 lg:flex-row lg:justify-center">
                {actividades.map((actividad) => (
                    <div className={actividad.divclass} key={actividad.title}>
                        <h3 className={actividad.titleclass}>{actividad.title}</h3>
                        <h4 className="text-center text-blanco text-3xl font-bold my-5">{actividad.subtitle}</h4>
                        <p className="text-center text-blanco my-6">{actividad.text}</p>
                        <Link href={actividad.route} className={actividad.linkclass}>
                            <p className={actividad.textClass}>Ver más</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Hacemos;
