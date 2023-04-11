import Image from 'next/image';
import Link from 'next/link';

const images = [
    {
        src: '/equipo2.jpg',
        alt: 'Foto 3',
        href: '/nosotros/#equipo',
        titulo: "Nuestro Equipo",
        texto: "Somos un equipo de personas que buscamos compartir el conocimiento y el amor por la naturaleza y una vida en armonía.",
    },
    {
        src: '/valores2.jpg',
        alt: 'Foto 1',
        href: '/nosotros/#valores',
        titulo: "Nuestros Valores",
        texto: '"La integridad es hacer lo correcto aunque nadie te esté mirando".',
    },
    {
        src: '/mision2.jpg',
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
                <h2 className="text-center text-blanco font-bold text-4xl mb-6 mt-3 font-titulos">Nosotros</h2>
                <p className="font-botones text-center text-blanco text-sm">Buscamos hacer un cambio a traves del despertar interior</p>
            </div>
            <div className='flex w-9/12 mx-auto justify-around gap-x-12'>
                {images.map ((image) => (
                    <Link href={image.href} key={image.alt} className="min-[1300px]:h-96 min-[1300px]:w-96 h-80 w-80 grid grid-cols-1 grid-rows-1">
                        <div className="col-start-1 col-end-1 row-start-1 row-end-1" >
                            <Image width={150000}
                            height={150000}
                            alt={image.alt}
                            src={image.src}
                            className="h-full rounded-xl object-cover"
                            />
                        </div>
                        <div className="col-start-1 col-end-1 row-start-1 row-end-1 h-3/6 2xl:h-2/6 mt-auto mx-auto flex flex-col z-30">
                            <h4 className="font-botones text-center text-blanco font-bold text-xl mx-3">{image.titulo}</h4>
                            <p className="font-botones text-center text-blanco text-sm mx-3 mt-4">{image.texto}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default NosotrosFull
