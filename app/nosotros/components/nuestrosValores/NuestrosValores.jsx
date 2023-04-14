
import Image from "next/image";
import Carousel from "./Carousel";
import Gallery from "./Gallery";



export default function NuestrosValores() {
  return (
    <section id="valores" className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] w-full">
              <Image 
                src={"/nuestrosValores.svg"}
                alt={'alpaca'}
                fill
                style={{objectFit:'cover' , objectPosition:'center'}}
              />
            </div>
            <div className="h-[300px] sm:h-[400px] lg:p-28 lg:h-[500px] xl:h-[600px] 2xl:h-[700px] w-full bg-[#F4B847] flex flex-col justify-center items-center">
              <h1 className="font-bold text-2xl lg:text-4xl font-titulos">Nuestros valores</h1>
              <p className="font-botones p-5  lg:w-full text-sm md:text-base">Ser fieles a nuestras responsabilidades e ideales como integrantes de este proyecto y ciudadanos, es algo que buscamos a través de lo que hacemos.
                Además, la humildad, la ética y la colaboración son valores importantes para este proyecto, ya que buscamos fomentar una participación activa y comprometida de la sociedad en la lucha por un futuro más sostenible y en armonía con todos los seres del planeta.
              </p>
            </div>
        </div>
        <div className="mt-20">
          <div className="md:hidden">
            <Carousel />
          </div>
          <div className="hidden md:block">
            <Gallery />
          </div>
        </div>
    </section>
  )
}
