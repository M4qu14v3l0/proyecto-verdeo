
import Image from "next/image";
import Carousel from "./Carousel";
import Gallery from "./Gallery";



export default function NuestrosValores() {
  return (
    <section id="valores" className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-[455px] sm:h-[480px] lg:h-[550px] xl:h-[600px] 2xl:h-[700px] w-full">
              <Image 
                src={"/nuestrosValores.svg"}
                alt={'alpaca'}
                fill
                style={{objectFit:'cover' , objectPosition:'center'}}
              />
            </div>
            <div className="h-[455px] sm:h-[480px] lg:p-28 lg:h-[550px] xl:h-[600px] 2xl:h-[700px] w-full bg-[#F4B847] flex justify-center items-center ">
              <div className="flex flex-col justify-center items-center w-[80%] md:w-[95%] m-auto">
                <h1 className="text-center text-3xl lg:text-4xl font-bold font-titulos">Nuestros valores</h1>
                <p className="font-botones text-center mt-8">Ser fieles a nuestras responsabilidades e ideales como integrantes de este proyecto y ciudadanos, es algo que buscamos a través de lo que hacemos.
                  Además, la humildad, la ética y la colaboración son valores importantes para este proyecto, ya que buscamos fomentar una participación activa y comprometida de la sociedad en la lucha por un futuro más sostenible y en armonía con todos los seres del planeta.
                </p>
              </div>
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
