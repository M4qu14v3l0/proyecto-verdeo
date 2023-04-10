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
        href: '/directorio/#sociales',
        titulo: "Proyectos sociales",
    },
    {
        src: '/hogar.jpg',
        alt: 'Foto de Agricultura',
        href: '/directorio/#agro',
        titulo: "Agricultura",
    },
    {
        src: '/personal.jpg',
        alt: 'Foto de Cuidado Personal',
        href: '/directorio/#personal',
        titulo: "Cuidado personal y cosmético",
    },
    {
        src: '/hogar.jpg',
        alt: 'Foto de Otros',
        href: '/directorio/#otros',
        titulo: "Otros",
    },
]

const Directorio = () => {
    return (
        <div className="flex lg:hidden flex-col h-auto pb-16 px-4 bg-[#217948]">
            <div className="w-full h-2/10 mt-8 flex mx-auto flex-col mb-8">
                <h2 className="text-center text-blanco font-bold text-4xl mb-6 mt-3 font-titulos">Directorio Ecosostenible</h2>
                <p className="text-center text-blanco text-sm">¿Sabías que cambiar la forma en cómo vives puede ayudar al planeta?</p>
                <p className="text-center text-blanco text-sm mt-6">Acá podrás ver diferentes categorías.</p>
            </div>
            <div className='flex w-full h-48 px-4 gap-x-8 items-center overflow-x-scroll overflow-y-hidden'>
                {images.map ((image) => (
                    <Link href={image.href} key={image.titulo} className="h-full w-44 flex flex-col rounded-xl">
                        <div className="h-full w-44">
                            <Image width={150000}
                            height={150000}
                            alt={image.alt}
                            src={image.src}
                            className="h-full w-44 object-cover rounded-t-xl"
                            />
                        </div>
                        <div className='flex w-full h-20 bg-amber-50 rounded-b-xl items-center justify-center'>
                            <h4 className="text-center font-bold text-sm my-auto px-1">{image.titulo}</h4>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Directorio