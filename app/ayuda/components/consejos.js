import Image from "next/image";

const tips= [
    {
        divClass: "flex flex-col lg:flex-row mb-6 lg:mb-12 lg:h-60",
        img: "/foto1.jpg",
        titulo: "1. Forma de ayudar ejemplo",
        texto: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
        divClass: "flex flex-col lg:flex-row-reverse mb-6 lg:mb-12 lg:h-60",
        img: "/foto2.jpg",
        titulo: "2. Forma de ayudar ejemplo",
        texto: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
        divClass: "flex flex-col lg:flex-row mb-6 lg:mb-12 lg:h-60",
        img: "/foto3.jpg",
        titulo: "3. Forma de ayudar ejemplo",
        texto: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
        divClass: "flex flex-col lg:flex-row-reverse mb-6 lg:mb-12 lg:h-60",
        img: "/foto4.jpg",
        titulo: "4. Forma de ayudar ejemplo",
        texto: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
        divClass: "flex flex-col lg:flex-row mb-6 lg:mb-12 lg:h-60",
        img: "/bosque.jpg",
        titulo: "5. Forma de ayudar ejemplo",
        texto: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
        divClass: "flex flex-col lg:flex-row-reverse mb-6 lg:mb-12 lg:h-60",
        img: "/comunidad.jpg",
        titulo: "6. Forma de ayudar ejemplo",
        texto: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
        divClass: "flex flex-col lg:flex-row mb-6 lg:mb-12 lg:h-60",
        img: "/bosque2.jpg",
        titulo: "7. Forma de ayudar ejemplo",
        texto: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
        divClass: "flex flex-col lg:flex-row-reverse mb-6 lg:mb-12 lg:h-60",
        img: "/bosqueWeb.jpg",
        titulo: "8. Forma de ayudar ejemplo",
        texto: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
        divClass: "flex flex-col lg:flex-row mb-6 lg:mb-12 lg:h-60",
        img: "/varias1.jpg",
        titulo: "9. Forma de ayudar ejemplo",
        texto: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
        divClass: "flex flex-col lg:flex-row-reverse mb-6 lg:mb-12 lg:h-60",
        img: "/bosque2.jpg",
        titulo: "10. Forma de ayudar ejemplo",
        texto: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
]

const consejos = () => {
    return (
        <div id="consejos" className='flex flex-col lg:w-10/12 lg:mx-auto'>
            <h2 className='text-2xl lg:text-3xl text-center mt-5 lg:mt-8 font-bold px-2'>10 formas de ayudar</h2>
            <p className='my-6 lg:my-10 text-lg text-center px-4'>Existen muchas formas de ayudar desde el lugar que te encuentres. A continuación te contamos 10 formas de las que también te puedes involucrar.</p>
            {tips.map((tip) => (
                <div className={tip.divClass} key={tip.titulo}>
                    <div className="h-[40vh] w-full lg:w-6/12 lg:h-full object-cover mb-3 ">
                        <Image width={500} height={500} src={tip.img} className="h-full w-full object-cover lg:rounded-lg" alt={tip.titulo}/>
                    </div>
                    <div className="flex flex-col px-4 lg:w-6/12 lg:mx-auto">
                        <h3 className="text-center font-bold text-xl mb-3">{tip.titulo}</h3>
                        <p className="text-center text-lg lg:px-6">{tip.texto}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default consejos