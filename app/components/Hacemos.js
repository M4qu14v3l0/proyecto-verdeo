import Link from "next/link";

const actividades = [
    {
        title: "PA",
        subtitle: "Lo Que Hacemos",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quod facilis sed suscipit omnis tempore quo sapiente expedita velit incidunt aspernatur ut dolor eveniet.",
        route: '/actividades',
        divclass: "rounded-2xl border-2 border-green-600 p-6 flex flex-col mb-6",
        titleclass: "text-center text-6xl font-bold text-green-800 mt-6 mb-5",
        linkclass:"flex mx-auto rounded-2xl bg-green-800  w-4/12 h-8 mb-8 hover:bg-green-700 transition-all duration-300 ease-in-out"
    },
    {
        title: "TA",
        subtitle: "Proyecto Abedul",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quod facilis sed suscipit omnis tempore quo sapiente expedita velit incidunt aspernatur ut dolor eveniet.",
        route: '/actividades',
        divclass: "rounded-2xl border-2 border-red-600 p-6 flex flex-col",
        titleclass: "text-center text-6xl font-bold text-red-800 mt-6 mb-5",
        linkclass:"flex mx-auto rounded-2xl bg-red-800  w-4/12 h-8 mb-8 hover:bg-red-700 transition-all duration-300 ease-in-out"
    },
]

const Hacemos = () => {
    return (
        <div className="w-11/12 flex mx-auto flex-col mt-6">
            <h2 className="text-center font-bold text-xl mb-4">Lo que hacemos</h2>
            <p className="text-center text-sm mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minus aspernatur modi nulla explicabo at quasi optio nisi laboriosam commodi, ratione voluptatibus natus dolorem nesciunt vel accusantium? Aspernatur, optio excepturi!</p>
            {actividades.map(({title, subtitle,  text, route, divclass, titleclass, linkclass}) => (
                <div className={divclass} key={title}>
                    <h3 className={titleclass}>{title}</h3>
                    <h4 className="text-center font-bold mb-5">{subtitle}</h4>
                    <p className="text-center mb-3">{text}</p>
                    <Link href={route} className={linkclass}>
                        <p className="text-white text-center m-auto text-sm">Ver más</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Hacemos;
