import Image from "next/image";

export default function NuestrosValores() {
  return (
    <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] w-full">
              <Image 
                src={"/alpaca.svg"}
                alt={'alpaca'}
                fill
                style={{objectFit:'cover' , objectPosition:'center'}}
              />
            </div>
            <div className="h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] w-full bg-[#F4B847] flex justify-center items-center"><h1 className="font-bold text-black text-2xl">Nuestros valores</h1></div>
        </div>
        
    </section>
  )
}