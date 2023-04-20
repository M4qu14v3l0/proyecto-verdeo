
const ayudas = [
    {
        title: "¡Quiero ser voluntario!",
        text: "¿Encontrar el propósito de nuestras vidas a través de la preservación de la madre tierra?",
        route: '/ayuda/#voluntariado',
        divclass: "flex flex-col justify-center bg-comunidad bg-cover bg-no-repeat bg-center h-80 rounded-xl mb-4",
        textClass: "font-botones font-bold text-blanco text-center m-auto text-sm",
        linkclass:"flex mx-auto rounded-3xl bg-verde w-[232px] h-[40px] mb-3 hover:bg-green-700 transition-all duration-300 ease-in-out mb-8"
    },
    {
        title: "Donar",
        text: "Materiales de trabajo para los talleres e inversión monetaria para implementar nuestros proyectos.",
        route: '/ayuda/#donaciones',
        divclass: "flex flex-col justify-center bg-tips bg-cover bg-no-repeat bg-center h-80 rounded-xl mb-4",
        textClass: "font-botones font-bold text-blanco text-center m-auto text-sm",
        linkclass:"flex mx-auto rounded-3xl bg-rojo w-[232px] h-[40px] mb-3 hover:bg-red-600 transition-all duration-300 ease-in-out mb-8"
    },
    {
        title: "7 Formas de ayudar",
        text: "Dedicación, disciplina y compromiso. Cómo ayudar al planeta en tu día a día.",
        route: '/ayuda/#consejos',
        divclass: "flex flex-col justify-center bg-donar3 bg-cover bg-no-repeat bg-center h-80 rounded-xl mb-4",
        textClass: "font-botones font-bold text-center m-auto text-sm",
        linkclass:"flex mx-auto rounded-3xl bg-amarillo w-[232px] h-[40px] mb-3 hover:bg-yellow-400 transition-all duration-300 ease-in-out"
    },
]

const Ayuda = () => {
    return (
        <div className="lg:hidden w-11/12 flex mx-auto flex-col my-6">
            <h2 className="text-center font-bold text-3xl mb-4 font-titulos">Cómo ayudar</h2>
            <p className="font-botones text-center text-sm">Queremos que lo que difundimos y hacemos llegue a muchas más personas en todo el mundo. Por eso tu apoyo siendo nuestro embajador de las redes sociales y es importante en nuestra labor.</p>
            <p className="font-botones text-center text-sm my-6">¡Habla de la naturaleza y comparte!</p>
            {ayudas.map(({title, text, route, divclass, linkclass, textClass}) => (
                <div className="flex flex-col justify-center" key={title}>
                    <div className={divclass}>
                        <div className="flex-flex-col p-4 mt-auto">
                            <p className="font-botones text-center mb-3 text-blanco">{text}</p>
                        </div>
                    </div>
                    <a href={route} className={linkclass}>
                        <p className={textClass}>{title}</p>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Ayuda;