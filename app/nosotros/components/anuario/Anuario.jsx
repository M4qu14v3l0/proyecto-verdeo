import Image from "next/image"
import Link from "next/link"

export default function Anuario() {
  return (
    <section className="flex flex-col gap-5 text-center justify-center items-center">
        <h1 className="font-bold text-3xl font-titulos">Anuario Proyecto Verdeo</h1>
        <p>Conoce todo sobre el proyecto desde sus comienzos</p>
        <div className="relative h-[300px] w-2/3 m-auto">
            <Image
                src={'/Anuario.svg'}
                alt={'Verdeo Anuario'}
                fill
                style={{objectFit:'cover'}}
                quality={100}
            />
        </div>
        <Link 
          className="w-64 h-12 rounded-full font-bold bg-[#F2AC29] flex justify-center items-center mb-20"
          href={'https://drive.google.com/file/d/1GdBnjjDn1pXUhzicm5NgnNBzCcqdz1Q4/view'}
          target="_blank"
          >
            Descargar
          </Link>
    </section>
  )
}
