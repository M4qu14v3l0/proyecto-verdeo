import Image from 'next/image';

const images = [
    {
        src: '/comunidad.jpg',
        alt: 'Foto 3',
        href: '/ayuda/#voluntariado',
        titulo: "¡Quiero ser voluntario!",
        texto: "¿Encontrar el propósito de nuestras vidas a través de la preservación de la madre tierra?",
        linkClass: "flex mx-auto rounded-3xl bg-verde w-[232px] h-[40px] hover:bg-[#2F9D5F] transition-all duration-300 ease-in-out"
    },
    {
        src: '/donar3.jpg',
        alt: 'Foto 1',
        href: '/ayuda/#donaciones',
        titulo: "Donar",
        texto: "Materiales de trabajo para los talleres e inversión monetaria para implementar nuestros proyectos.",
        linkClass: "flex mx-auto rounded-3xl bg-rojo w-[232px] h-[40px] hover:bg-[#CF6842] transition-all duration-300 ease-in-out"
    },
    {
        src: '/tips.jpg',
        alt: 'Foto 4',
        href: '/ayuda/#consejos',
        titulo: "Ayudar",
        texto: "Dedicación, disciplina y compromiso. ¡Únete para ser parte de Proyecto Verdeo!",
        linkClass: "flex mx-auto rounded-3xl bg-amarillo w-[232px] h-[40px] hover:bg-yellow-400 transition-all duration-300 ease-in-out"
    },
]

const AyudaFull = () => {
    return (
        <div className="hidden lg:flex flex-col h-auto pb-16 px-10">
            <div className="w-9/12 h-2/10 mt-8 flex mx-auto flex-col mb-12">
                <h2 className="text-center font-bold text-4xl mb-6 mt-3 font-titulos">Cómo Ayudar</h2>
                <p className="text-center text-sm">Queremos que lo que difundimos y hacemos llegue a muchas más personas en todo el mundo, por eso tu apoyo siendo nuestro embajador de las redes sociales es importante en nuestra labor.</p>
                <p className="text-center text-sm mt-6">¡Habla de la naturaleza y comparte!</p>
            </div>
            <div className='flex w-9/12 h-auto mx-auto justify-around gap-x-12'>
                {images.map ((image) => (
                    <div key={image.titulo} className="h-auto w-auto flex flex-col">
                        <div className="h-56 w-72 grid mb-5 grid-cols-1 grid-rows-1">
                            <a className="col-start-1 col-end-1 row-start-1 row-end-1" href={image.href} >
                                <Image width={150000}
                                height={150000}
                                alt={image.alt}
                                src={image.src}
                                className="h-full w-full rounded-xl object-cover"
                                />
                            </a>
                            <div className="col-start-1 col-end-1 row-start-1 row-end-1 mt-auto mx-auto mb-6 flex flex-col z-30">
                                <p className="text-center text-blanco text-sm px-4">{image.texto}</p>
                            </div>
                        </div>
                        <a href={image.href} className={image.linkClass}>
                            <p className="text-blanco text-center font-botones font-bold m-auto text-sm">{image.titulo}</p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AyudaFull