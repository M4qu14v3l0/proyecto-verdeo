import Image from "next/image"
import Link from "next/link"

export default function Anuario() {
  return (
    <section id="anuario" className="flex flex-col gap-5 text-center justify-center items-center">
        <h1 className="text-center text-3xl lg:text-4xl font-bold font-titulos">Anuario Proyecto Verdeo</h1>
        <p className="font-botones">Conoce todo sobre el proyecto desde sus comienzos</p>
        <div className="relative w-[95%] h-[200px] md:h-[400px] m-auto rounded-2xl">
            <Image
                src={'/Anuario.svg'}
                alt={'Verdeo Anuario'}
                fill
                style={{objectFit:'contain'}}
                quality={100}
                className="rounded-2xl"
            />
        </div>
        <Link 
          className="w-64 h-12 rounded-full font-bold bg-[#F2AC29] flex justify-center items-center mb-20 lg:hover:bg-[#F7CD7E] transition-all duration-300 ease-in-out lg:mb-0"
          href={'https://drive.google.com/file/d/1GdBnjjDn1pXUhzicm5NgnNBzCcqdz1Q4/view'}
          target="_blank"
          >
            Descargar
          </Link>
    </section>
  )
}
