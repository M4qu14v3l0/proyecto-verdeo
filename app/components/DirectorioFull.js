import Image from 'next/image';
import Link from 'next/link';

const images = [
    {
        src: '/moda2.jpg',
        alt: 'Foto de Moda',
        href: '/directorio/#moda',
        titulo: "Moda y accesorios",
    },
    {
        src: '/alimentacion3.jpg',
        alt: 'Foto de Alimentacion',
        href: '/directorio/#alimentacion',
        titulo: "Alimentación y nutrición",
    },
    {
        src: '/personal2.jpg',
        alt: 'Foto de Cuidado Personal',
        href: '/directorio/#personal',
        titulo: "Cosmética y cuidado",
    },
    {
        src: '/hogar2.jpg',
        alt: 'Foto de Agricultura',
        href: '/directorio/#agro',
        titulo: "Agricultura",
    },
    {
        src: '/social.jpg',
        alt: 'Foto de Proyectos Sociales',
        href: '/directorio/#sociales',
        titulo: "Proyectos sociales",
    },
    {
        src: '/otros.jpg',
        alt: 'Foto de Otros',
        href: '/directorio/#otros',
        titulo: "Otros servicios",
    },
]

const DirectorioFull = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };
    return (
        <div className="hidden lg:flex flex-col h-auto pb-20 bg-[#217948]">
            <div className="w-9/12 mt-8 flex mx-auto flex-col mb-12">
                <h2 className="text-center text-blanco font-bold text-4xl mb-6 mt-3 font-titulos">Directorio Ecosostenible</h2>
                <p className="font-botones text-center text-blanco text-sm">¿Sabías que cambiar la forma en cómo vives puede ayudar al planeta?</p>
                <p className="font-botones text-center text-blanco text-sm mt-6">Acá podrás ver diferentes categorías.</p>
            </div>
            <div className='flex xl:w-11/12 h-auto mx-auto px-6 gap-y-12 gap-x-8 xl:gap-x-24 justify-center flex-wrap'>
                {images.map ((image) => (
                    <Link onClick={scrollToTop} href={image.href} key={image.titulo} className="h-56 w-72 flex flex-col rounded-xl hover:scale-105 duration-300">
                        <div className="h-4/6 w-72 mb-auto" >
                            <Image width={150000}
                            height={150000}
                            alt={image.alt}
                            src={image.src}
                            className="h-full w-72 object-cover rounded-t-xl"
                            />
                        </div>
                        <div className='flex w-full h-2/6 px-2 bg-amber-50 rounded-b-xl items-center justify-center'>
                            <h4 className="font-botones text-center font-bold text-sm my-auto">{image.titulo}</h4>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default DirectorioFull