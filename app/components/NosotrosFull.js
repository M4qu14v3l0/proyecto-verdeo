import Image from 'next/image';
import Link from 'next/link';

const images = [
    {
        src: '/foto3.jpg',
        alt: 'Foto 3',
        href: '/nosotros/#equipo',
        titulo: "Nuestro Equipo",
        texto: "Somos un equipo de personas que buscamos compartir el conocimiento y el amor por la naturaleza y una vida en armonía.",
    },
    {
        src: '/foto1.jpg',
        alt: 'Foto 1',
        href: '/nosotros/#valores',
        titulo: "Nuestros Valores",
        texto: '"La integridad es hacer lo correcto aunque nadie te esté mirando".',
    },
    {
        src: '/foto4.jpg',
        alt: 'Foto 4',
        href: '/nosotros/#mision',
        titulo: "Misión/Visión",
        texto: "Queremos llegar a ser uno de los proyectos líderes y referentes en educacion ambiental y preservación.",
    },
]

const NosotrosFull = () => {
    return (
        <div className="hidden lg:flex flex-col h-auto pb-20 px-10 bg-[#217948]">
            <div className="w-9/12 h-2/10 mt-8 flex mx-auto flex-col mb-12">
                <h2 className="text-center text-blanco font-bold text-4xl mb-6 mt-3">Nosotros</h2>
                <p className="text-center text-blanco text-sm">Buscamos hacer un cambio a traves del despertar interior</p>
            </div>
            <div className='flex w-9/12 mx-auto justify-around gap-x-12'>
                {images.map ((image) => (
                    <Link href={image.href} key={image.alt} className="h-96 w-96 grid grid-cols-1 grid-rows-1">
                        <div className="col-start-1 col-end-1 row-start-1 row-end-1" >
                            <Image width={150000}
                            height={150000}
                            alt={image.alt}
                            src={image.src}
                            className="h-full rounded-xl object-cover"
                            />
                        </div>
                        <div className="col-start-1 col-end-1 row-start-1 row-end-1 h-3/6 2xl:h-2/6 mt-auto mx-auto mb-6 flex flex-col z-30">
                            <h4 className="text-center text-blanco font-bold text-xl px-6">{image.titulo}</h4>
                            <p className="text-center text-blanco text-sm px-6 pt-6">{image.texto}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default NosotrosFull
