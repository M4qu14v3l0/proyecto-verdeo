import Image from 'next/image';
import Link from 'next/link';

const images = [
    {
        src: '/foto3.jpg',
        alt: 'Foto 3',
        href: '/nosotros/equipo',
        titulo: "Nuestro Equipo",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel, delectus nulla minima tempore sint corporis.",
    },
    {
        src: '/foto1.jpg',
        alt: 'Foto 1',
        href: '/nosotros/mision',
        titulo: "Nuestros Valores",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel, delectus nulla minima tempore sint corporis.",
    },
    {
        src: '/foto4.jpg',
        alt: 'Foto 4',
        href: '/nosotros/mision',
        titulo: "Misión/Visión",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel, delectus nulla minima tempore sint corporis.",
    },
]

const NosotrosFull = () => {
    return (
        <div className="flex flex-col h-auto pb-16 px-10 bg-verde">
            <div className="w-9/12 h-2/10 mt-8 flex mx-auto flex-col mb-12">
                <h2 className="text-center text-blanco font-bold text-4xl mb-6 mt-3">Nosotros</h2>
                <p className="text-center text-blanco text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum laboriosam possimus assumenda, quia soluta ex consequuntur iusto facere voluptas quam vel praesentium quibusdam nisi asperiores a aliquid perspiciatis ratione beatae?</p>
            </div>
            <div className='flex w-9/12 h-auto mx-auto justify-around gap-x-12'>
                {images.map ((image) => (
                    <div key={image.index} className="h-96 w-30 grid grid-cols-1 grid-rows-1">
                        <Link className="col-start-1 col-end-1 row-start-1 row-end-1" href={image.href} >
                            <Image width={150000}
                            height={150000}
                            alt={image.alt}
                            src={image.src}
                            className="h-full w-auto rounded-xl object-cover"
                            />
                        </Link>
                        <div className="col-start-1 col-end-1 row-start-1 row-end-1 mt-auto mx-auto mb-6 flex flex-col z-30">
                            <h4 className="text-center text-blanco font-bold text-xl px-8">{image.titulo}</h4>
                            <p className="text-center text-blanco text-sm px-8 pt-6">{image.texto}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NosotrosFull