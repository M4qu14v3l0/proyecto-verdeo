
const ayudas = [
    {
        title: "¡Quiero ser voluntario!",
        text: "¿Encontrar el propósito de nuestras vidas a través de la preservación de la madre tierra?",
        route: '/ayuda/#voluntariado',
        divclass: "flex justify-center bg-voluntario bg-cover bg-no-repeat bg-center h-80 rounded-xl mb-6",
        linkclass:"flex mx-auto rounded-3xl bg-verde h-12 w-6/12 mb-3 hover:bg-green-700 transition-all duration-300 ease-in-out"
    },
    {
        title: "Donar",
        text: "Materiales de trabajo para los talleres e inversión monetaria para implementar nuestros proyectos.",
        route: '/ayuda/#donaciones',
        divclass: "flex justify-center bg-donar bg-cover bg-no-repeat bg-center h-80 rounded-xl mb-6",
        linkclass:"flex mx-auto rounded-3xl bg-rojo h-12 w-6/12 mb-3 hover:bg-red-600 transition-all duration-300 ease-in-out"
    },
    {
        title: "Ayudar",
        text: "Dedicación, disciplina y compromiso. ¡Únete para ser parte de Proyecto Verdeo!",
        route: '/ayuda/#consejos',
        divclass: "flex justify-center bg-nos bg-cover bg-no-repeat bg-center h-80 rounded-xl",
        linkclass:"flex mx-auto rounded-3xl bg-amarillo h-12 w-6/12 mb-3 hover:bg-yellow-400 transition-all duration-300 ease-in-out"
    },
]

const Ayuda = () => {
    return (
        <div className="lg:hidden w-11/12 flex mx-auto flex-col my-6">
            <h2 className="text-center font-bold text-xl mb-4">Cómo Ayudar</h2>
            <p className="text-center text-sm mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minus aspernatur modi nulla explicabo at quasi optio nisi laboriosam commodi, ratione voluptatibus natus dolorem nesciunt vel accusantium? Aspernatur, optio excepturi!</p>
            {ayudas.map(({title, text, route, divclass, linkclass}) => (
                <div className={divclass} key={title}>
                    <div className="flex-flex-col p-4 mt-auto">
                        <p className="text-center mb-3 text-blanco">{text}</p>
                        <a href={route} className={linkclass}>
                            <p className="text-blanco text-center font-botones font-bold m-auto text-sm">{title}</p>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Ayuda;