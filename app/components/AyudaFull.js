import Image from 'next/image';

const images = [
    {
        src: '/comunidad2.png',
        alt: 'Foto 3',
        href: '/ayuda/#voluntariado',
        textoClass: "font-botones text-center text-blanco text-sm px-4",
        titulo: "¡Quiero ser voluntario!",
        textClass: "font-botones font-bold text-blanco text-center m-auto text-sm",
        texto: "¿Encontrar el propósito de nuestras vidas a través de la preservación de la madre tierra?",
        linkClass: "flex mx-auto rounded-3xl bg-verde w-[240px] h-[50px] lg:hover:bg-[#2F9D5F] transition-all duration-300 ease-in-out"
    },
    {
        src: '/tips2.jpg',
        alt: 'Foto 1',
        href: '/ayuda/#donaciones',
        textoClass: "font-botones text-center text-blanco text-sm px-4",
        titulo: "Donar",
        textClass: "font-botones font-bold text-blanco text-center m-auto text-sm",
        texto: "Materiales de trabajo para los talleres e inversión monetaria para implementar nuestros proyectos.",
        linkClass: "flex mx-auto rounded-3xl bg-rojo w-[240px] h-[50px] lg:hover:bg-[#CF6842] transition-all duration-300 ease-in-out"
    },
    {
        src: '/donar4.png',
        alt: 'Foto 4',
        href: '/ayuda/#consejos',
        textoClass: "font-botones text-center text-blanco text-sm px-4 pb-5",
        titulo: "7 formas de ayudar",
        textClass: "font-botones font-bold text-center m-auto text-sm",
        texto: "Dedicación, disciplina y compromiso. Cómo ayudar al planeta en tu día a día.",
        linkClass: "flex mx-auto rounded-3xl bg-amarillo w-[240px] h-[50px] lg:hover:bg-[#F7CD7E] transition-all duration-300 ease-in-out"
    },
]

const AyudaFull = () => {
    return (
        <div className="hidden lg:flex flex-col h-auto pb-16 px-10">
            <div className="w-9/12 h-2/10 mt-8 flex mx-auto flex-col mb-12">
                <h2 className="text-center font-bold text-4xl mb-6 mt-3 font-titulos">Cómo Ayudar</h2>
                <p className="font-botones text-center text-sm">Queremos que lo que difundimos y hacemos llegue a muchas más personas en todo el mundo. Por eso tu apoyo siendo nuestro embajador de las redes sociales y es importante en nuestra labor.</p>
                <p className="font-botones text-center text-sm mt-6">¡Habla de la naturaleza y comparte!</p>
            </div>
            <div className='flex w-9/12 h-auto mx-auto justify-around gap-x-12'>
                {images.map ((image) => (
                    <div key={image.titulo} className="h-auto w-auto flex flex-col">
                        <div className="mx-auto h-56 w-72 grid mb-5 grid-cols-1 grid-rows-1">
                            <a className="col-start-1 col-end-1 row-start-1 row-end-1" href={image.href} >
                                <Image width={150000}
                                height={150000}
                                alt={image.alt}
                                src={image.src}
                                className="h-full w-full rounded-xl object-cover"
                                />
                            </a>
                            <div className="col-start-1 col-end-1 row-start-1 row-end-1 mt-auto mx-auto mb-6 flex flex-col z-30">
                                <p className={image.textoClass}>{image.texto}</p>
                            </div>
                        </div>
                        <a href={image.href} className={image.linkClass}>
                            <p className={image.textClass}>{image.titulo}</p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AyudaFull