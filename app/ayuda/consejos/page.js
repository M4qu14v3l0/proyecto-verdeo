import Image from "next/image";

const tips= [
    {
        img: "/foto1.jpg",
        titulo: "1. Forma de ayudar ejemplo",
        texto: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
        img: "/foto2.jpg",
        titulo: "2. Forma de ayudar ejemplo",
        texto: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
        img: "/foto3.jpg",
        titulo: "3. Forma de ayudar ejemplo",
        texto: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
        img: "/foto4.jpg",
        titulo: "4. Forma de ayudar ejemplo",
        texto: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
        img: "/bosque.jpg",
        titulo: "5. Forma de ayudar ejemplo",
        texto: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
        img: "/comunidad.jpg",
        titulo: "6. Forma de ayudar ejemplo",
        texto: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
        img: "/bosque2.jpg",
        titulo: "7. Forma de ayudar ejemplo",
        texto: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
        img: "/bosqueWeb.jpg",
        titulo: "8. Forma de ayudar ejemplo",
        texto: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
        img: "/varias1.jpg",
        titulo: "9. Forma de ayudar ejemplo",
        texto: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
        img: "/bosque2.jpg",
        titulo: "10. Forma de ayudar ejemplo",
        texto: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
]

const consejos = () => {
    return (
        <div className='flex flex-col w-screen'>
            <h2 className='text-3xl text-center mt-2 mb-5 font-bold px-2'>10 formas de ayudar</h2>
            <p className='mb-6 text-lg text-center px-4'>Existen muchas formas de ayudar desde el lugar que te encuentres. A continuación te contamos 10 formas de las que también te puedes involucrar.</p>
            {tips.map(({img, titulo, texto}) => (
                <div className='flex flex-col mb-6' key={titulo}>
                    <Image width={500} height={500} src={img} className="h-[30vh] w-full object-cover mb-3" alt={titulo}/>
                    <h3 className="text-center font-bold text-xl px-4 mb-3">{titulo}</h3>
                    <p className="text-center text-lg px-2">{texto}</p>
                </div>
            ))}
        </div>
    )
}

export default consejos