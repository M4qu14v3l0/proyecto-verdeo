import Image from 'next/image';
import Link from 'next/link';

const images = [
    {
        src: '/moda.jpg',
        alt: 'Foto de Moda',
        href: '/directorio/#moda',
        titulo: "Moda y accesorios",
    },
    {
        src: '/alimentacion.jpg',
        alt: 'Foto de Alimentacion',
        href: '/directorio/#alimentacion',
        titulo: "Alimentación y nutrición",
    },
    {
        src: '/social.jpg',
        alt: 'Foto de Proyectos Sociales',
        href: '/directorio/#social',
        titulo: "Proyectos sociales",
    },
    {
        src: '/hogar.jpg',
        alt: 'Foto de Agricultura',
        href: '/directorio/#hogar',
        titulo: "Agricultura",
    },
    {
        src: '/personal.jpg',
        alt: 'Foto de Cuidado Personal',
        href: '/directorio/#social',
        titulo: "Cuidado personal y cosmético",
    },
]

const DirectorioFull = () => {
    return (
        <div className="hidden lg:flex flex-col h-auto pb-20 px-10 bg-[#217948]">
            <div className="w-9/12 h-2/10 mt-8 flex mx-auto flex-col mb-12">
                <h2 className="text-center text-blanco font-bold text-4xl mb-6 mt-3">Directorio Ecosostenible</h2>
                <p className="text-center text-blanco text-sm">¿Sabías que cambiar la forma en cómo vives puede ayudar al planeta?</p>
                <p className="text-center text-blanco text-sm mt-6">Acá podrás ver diferentes categorías.</p>
            </div>
            <div className='flex w-full h-auto mx-auto px-6 gap-x-8'>
                {images.map ((image) => (
                    <Link href={image.href} key={image.titulo} className="h-50 w-30 flex flex-col rounded-xl bg-blanco">
                        <div className="h-4/6 w-30 mb-auto" >
                            <Image width={150000}
                            height={150000}
                            alt={image.alt}
                            src={image.src}
                            className="h-full w-30 object-cover rounded-t-xl"
                            />
                        </div>
                        <div className='flex w-full h-2/6 px-2 items-center justify-center'>
                            <h4 className="text-center font-bold text-sm my-auto">{image.titulo}</h4>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default DirectorioFull