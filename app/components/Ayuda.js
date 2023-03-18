import Link from "next/link";

const ayudas = [
    {
        title: "Ser voluntario",
        text: "Lorem ipsum dolor sit amet consectetur apore quo sapiente expedita velit incidunt aspernatur ut dolor eveniet.",
        route: '/voluntarios',
        divclass: "flex bg-voluntario bg-cover bg-no-repeat bg-center h-80 rounded-xl mb-6",
        linkclass:"flex mx-auto rounded-3xl bg-green-800 h-12 w-6/12 mb-3 hover:bg-green-700 transition-all duration-300 ease-in-out"
    },
    {
        title: "Donar",
        text: "Lorem ipsum dolor sit amet consectetur apore quo sapiente expedita velit incidunt aspernatur ut dolor eveniet.",
        route: '/donar',
        divclass: "flex bg-donar bg-cover bg-no-repeat bg-center h-80 rounded-xl mb-6",
        linkclass:"flex mx-auto rounded-3xl bg-green-800 h-12 w-6/12 mb-3 hover:bg-green-700 transition-all duration-300 ease-in-out"
    },
    {
        title: "Ayudar",
        text: "Lorem ipsum dolor sit amet consectetur apore quo sapiente expedita velit incidunt aspernatur ut dolor eveniet.",
        route: '/ayudar',
        divclass: "flex bg-nos bg-cover bg-no-repeat bg-center h-80 rounded-xl",
        linkclass:"flex mx-auto rounded-3xl bg-yellow-500 h-12 w-6/12 mb-3 hover:bg-yellow-400 transition-all duration-300 ease-in-out"
    },
]

const Ayuda = () => {
    return (
        <div className="w-11/12 flex mx-auto flex-col my-6">
            <h2 className="text-center font-bold text-xl mb-4">Cómo Ayudar</h2>
            <p className="text-center text-sm mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minus aspernatur modi nulla explicabo at quasi optio nisi laboriosam commodi, ratione voluptatibus natus dolorem nesciunt vel accusantium? Aspernatur, optio excepturi!</p>
            {ayudas.map(({title, text, route, divclass, linkclass}) => (
                <div className={divclass} key={route}>
                    <div className="flex-flex-col p-4 mt-auto">
                        <p className="text-center mb-3 text-white">{text}</p>
                        <Link href={route} className={linkclass}>
                            <p className="text-white text-center font-bold m-auto text-lg">{title}</p>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Ayuda;