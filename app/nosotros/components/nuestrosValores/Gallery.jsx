import Image from "next/image"


const listItems = [
  {src: '/BusquedaVerdad.svg' , text: 'Busqueda de la verdad' , alt: 'Busqueda de la Verdad'},
  {src: '/AmorConocimiento.svg' , text: 'Amor al conocimiento' , alt: 'Amor al conocimiento'},
  {src: '/RespetoAnimal.svg' , text: 'Respeto a toda clase de vida animal' , alt: 'Respeto a los animales'},
  {src: '/EmpatiaHumanos.svg' , text: 'Empatía con todos los seres y personas en condiciones vulnerables' , alt: 'Empatía con todas las personas'},
  {src: '/Alegria.svg' , text: 'Alegria' , alt: 'Alegria'},
  {src: '/Compromiso.svg' , text: 'Compromiso' , alt: 'Compromiso'},
  {src: '/Amabilidad.svg' , text: 'Amabilidad' , alt: 'Amabilidad'},
  {src: '/Honradez.svg' , text: 'Honradez' , alt: 'Honradez'},
  {src: '/Responsabilidad.svg' , text: 'Responsabilidad' , alt: 'Responsabilidad'},
]


export default function Gallery() {
  return (
    <div className="mt-[150px] w-[80%] 2xl:w-[50%] m-auto grid grid-cols-3 gap-3 md:gap-9">
      {
        listItems.map((item , index) => (
          <div key={index} className="relative w-full h-[230px]">
            <div className="w-full h-full relative flex justify-center items-center">
                <Image 
                alt={item.alt}
                src={item.src}
                fill
                style={{objectFit:'contain'}}
                />
            </div>
        </div>
        ))
      }
    </div>
  )
}
