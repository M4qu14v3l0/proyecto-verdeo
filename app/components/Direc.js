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

const Directorio = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };
    return (
        <div className="flex lg:hidden flex-col h-auto pb-16 px-4 bg-[#217948]">
            <div className="w-full h-2/10 mt-8 flex mx-auto flex-col mb-8">
                <h2 className="text-center text-blanco font-bold text-3xl mb-6 mt-3 font-titulos">Directorio Ecosostenible</h2>
                <p className="font-botones text-center text-blanco text-sm">¿Sabías que cambiar la forma en cómo vives puede ayudar al planeta?</p>
                <p className="font-botones text-center text-blanco text-sm mt-6">Acá podrás ver diferentes categorías.</p>
            </div>
            <div className='flex w-full h-62 px-4 gap-x-8 items-center overflow-x-scroll overflow-y-hidden'>
                {images.map ((image) => (
                    <Link onClick={scrollToTop} href={image.href} key={image.titulo} className="h-52 w-44 flex flex-col">
                        <div className="h-full w-44">
                            <Image width={150000}
                            height={150000}
                            alt={image.alt}
                            src={image.src}
                            className="h-full w-44 object-cover rounded-t-xl"
                            />
                        </div>
                        <div className='flex w-full h-20 bg-amber-50 items-center justify-center rounded-b-xl'>
                            <h4 className="font-botones text-center font-bold text-sm my-auto px-1">{image.titulo}</h4>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Directorio