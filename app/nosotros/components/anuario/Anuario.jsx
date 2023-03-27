import Image from "next/image"

export default function Anuario() {
  return (
    <section className="flex flex-col gap-5 text-center justify-center items-center">
        <h1 className="font-bold text-3xl">Anuario Proyecto Verdeo</h1>
        <p>Conoce todo sobre el proyecto desde sus comienzos</p>
        <div className="relative h-[300px] w-full m-auto">
            <Image
                src={'/Anuario.svg'}
                alt={'Verdeo Anuario'}
                fill
                style={{objectFit:'cover'}}
            />
        </div>
        <button className="w-64 h-12 rounded-full font-bold bg-[#F2AC29]">Descargar</button>
    </section>
  )
}
