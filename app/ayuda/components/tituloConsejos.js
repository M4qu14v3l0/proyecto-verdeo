import Image from 'next/image';

const items= [
    {
        titulo: "Cultva tu espíritu y actúa",
        img: "/corazon.svg",
        class: "col-start-1 col-end-1 row-start-1 row-end-1 flex flex-col mt-3",
    },
    {
        titulo: "Ropa y calzado",
        img: "/ropa.svg",
        class: "col-start-2 col-end-2 row-start-1 row-end-1 flex flex-col mt-3",
    },
    {
        titulo: "El uso del plástico",
        img: "/botella.svg",
        class: "col-start-3 col-end-3 row-start-1 row-end-1 flex flex-col mt-3",
    },
    {
        titulo: "Tu alimentación",
        img: "/fruta.svg",
        class: "col-start-1 col-end-1 row-start-2 row-end-2 flex flex-col mt-3",
    },
    {
        titulo: "Agua",
        img: "/agua.svg",
        class: "col-start-2 col-end-2 row-start-2 row-end-2 flex flex-col mt-3",
    },
    {
        titulo: "Tierra",
        img: "/planta.svg",
        class: "col-start-3 col-end-3 row-start-2 row-end-2 flex flex-col mt-3",
    },
    {
        titulo: "Arboles",
        img: "/arbol.svg",
        class: "col-start-2 col-end-2 row-start-3 row-end-3 flex flex-col mt-3",
    },
]

const tituloConsejos = () => {
    return (
        <div className="grid grid-cols-3 grid-rows-3 px-6 mb-4">
            {items.map((item) => (
                <div key={item.titulo} className={item.class}>
                    <Image width={500} height={500} className="w-1/4 mx-auto" alt={item.titulo} src={item.img} />
                    <p className="text-center text-sm mt-1">{item.titulo}</p>
                </div>
            ))}
        </div>
    )
}

export default tituloConsejos
