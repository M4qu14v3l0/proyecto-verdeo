
const actividades = [
    {
        title: "PA",
        subtitle: "Programa Abedules",
        text: "Programa dirigido a niños, niñas y adolescentes de casas hogares.",
        route: '/actividades/#proyectos',
        divclass: "bg-verde rounded-2xl mb-4 py-28 sm:py-16 px-4 lg:h-full",
        titleclass: "text-center text-blanco text-8xl font-bold font-titulos lg:mt-6",
        textClass: "font-botones text-blanco text-center m-auto text-sm",
        linkclass:"flex mx-auto mb-8 rounded-2xl bg-verde w-[232px] h-[40px] lg:w-[328px] lg:h-[50px] hover:bg-[#2F9D5F] transition-all duration-300 ease-in-out lg:mb-0"
    },
    {
        title: "TA",
        subtitle: "Talleres Ambientales",
        text: "Dirigido a niños, adolescentes y público en general que busca reconectar con la naturaleza y aprender más sobre cómo podemos hacer algo desde donde estamos.",
        route: '/actividades/#talleres',
        divclass: "bg-rojo rounded-2xl mb-4 py-28 sm:py-16 px-4 lg:h-full",
        titleclass: "text-center text-blanco text-8xl font-bold font-titulos lg:mt-6",
        textClass: "font-botones text-blanco text-center m-auto text-sm",
        linkclass:"flex mx-auto rounded-2xl bg-rojo w-[232px] h-[40px] lg:w-[328px] lg:h-[50px] hover:bg-[#CF6842] transition-all duration-300 ease-in-out"
    },
]

const Hacemos = () => {
    return (
        <div className="w-11/12 flex mx-auto flex-col mt-6 lg:mt-10 lg:mb-10">
            <h2 className="text-center font-titulos font-bold text-3xl mb-4 lg:mb-6 lg:text-4xl">Lo que hacemos</h2>
            <p className="text-center font-botones text-sm mb-5 lg:mb-10">Compartimos, enseñamos y difundimos conocimiento sobre naturaleza, animales y cómo vivir en armonía a través de programas ambientales, talleres y charlas.</p>
            <div className="flex flex-col mb-8 lg:flex-row lg:justify-evenly">
                {actividades.map((actividad) => (
                    <div className="w-full flex flex-col lg:items-center lg:mr-4 lg:min-h-[80vh] lg:mb-0 lg:w-[30vw]" key={actividad.title}>
                        <div className={actividad.divclass}>
                            <h3 className={actividad.titleclass}>{actividad.title}</h3>
                            <h4 className="text-center font-titulos text-blanco text-3xl font-bold my-5 lg:my-8">{actividad.subtitle}</h4>
                            <p className="text-center font-botones text-blanco my-6 lg:my-8">{actividad.text}</p>
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
