
const actividades = [
    {
        title: "TA",
        subtitle: "Proyecto Abedules",
        text: "Programa dirigido a niños, niñas y adolescentes de casas hogares.",
        route: '/actividades/#proyectos',
        divclass: "bg-verde rounded-2xl mb-4 py-24 sm:py-16 px-4 lg:h-full",
        titleclass: "text-center text-blanco text-8xl font-bold",
        textClass: "font-botones text-blanco text-center m-auto text-xs lg:text-sm",
        linkclass:"flex mx-auto mb-8 rounded-2xl bg-verde w-6/12 lg:w-6/12 h-8 lg:h-10 hover:bg-[#2F9D5F] transition-all duration-300 ease-in-out lg:mb-0"
    },
    {
        title: "PA",
        subtitle: "Talleres",
        text: "Dirigido a niños, adolescentes y público en general que busca reconectar con la naturaleza y aprender más sobre cómo podemos hacer algo desde donde estamos.",
        route: '/actividades/#talleres',
        divclass: "bg-rojo rounded-2xl mb-4 py-24 sm:py-16 px-4 lg:h-full",
        titleclass: "text-center text-blanco text-8xl font-bold",
        textClass: "font-botones text-blanco text-center m-auto text-xs lg:text-sm",
        linkclass:"flex mx-auto rounded-2xl bg-rojo w-6/12 lg:w-6/12 h-8 lg:h-10 hover:bg-[#CF6842] transition-all duration-300 ease-in-out"
    },
]

const Hacemos = () => {
    return (
        <div className="w-11/12 flex mx-auto flex-col mt-6 lg:mt-10 lg:mb-10">
            <h2 className="text-center font-bold text-xl mb-4 lg:mb-6 lg:text-3xl">Lo que hacemos</h2>
            <p className="text-center text-sm mb-5 lg:mb-10">Compartimos, enseñamos y difundimos conocimiento sobre naturaleza, animales y cómo vivir en armonía a través de programas ambientales, talleres y charlas.</p>
            <div className="flex flex-col mb-8 lg:flex-row lg:justify-evenly">
                {actividades.map((actividad) => (
                    <div className="w-full flex flex-col lg:mr-4 lg:min-h-[50vh] lg:mb-0 lg:w-[30vw]" key={actividad.title}>
                        <div className={actividad.divclass}>
                            <h3 className={actividad.titleclass}>{actividad.title}</h3>
                            <h4 className="text-center text-blanco text-3xl font-bold my-5">{actividad.subtitle}</h4>
                            <p className="text-center text-blanco my-6">{actividad.text}</p>
                        </div>
                        <a href={actividad.route} className={actividad.linkclass}>
                            <p className={actividad.textClass}>Ver más</p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Hacemos;
