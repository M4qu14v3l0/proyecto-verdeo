import Image from "next/image"
import Link from "next/link"



const imgs = [
    {img:'/calendar.svg' , title:'Educativo' , p:'Tierra, bosques y agua'},
    {img:'/hearth.svg' , title:'Espiritual' , p:'Desarrollo de conciencia y autoestima'},
    {img:'/wine.svg' , title:'Inspiracional' , p:'Historias e invitados de alto impacto'},
]


const Proyectos = () => {

    return (
        <section id="proyectos" className=''>
            <div className='relative'>
                <div className='bg-hacemosPortada bg-no-repeat w-full bg-cover h-[60vh] lg:h-[80vh] p-5'>
                    <h2 className='text-4xl lg:text-5xl text-center mt-7 font-bold text-white font-titulos pt-20 lg:my-8'>Lo que hacemos</h2>
                </div>
            </div>
            <div className='flex flex-col gap-5 justify-center w-full relative bottom-[100px]'>
                <h2 className='text-center text-3xl lg:text-4xl font-bold font-titulos text-white'>Programa Abedules</h2>
                <div className='bg-[#FFFBEB] w-[80%] md:w-[60%] lg:w-[50%] xl:w-[30%] mx-auto text-center flex flex-col gap-10 p-5 rounded-xl shadow-2xl'>
                    <div className="w-full h-[250px] relative">
                        <Image 
                            src={'/objetivoPortada.svg'}
                            alt={'redFlag'}
                            fill
                            style={{objectFit: 'contain'}}
                        />
                    </div>
                    <h3 className='font-titulos font-bold text-2xl text-center pt-2'>Objetivo</h3>
                    <p className='font-botones text-center text-lg'>
                    Creemos que solo se ama lo que se conoce por lo que buscamos inculcar a niños, niñas y adolescentes de casas hogares el amor a la naturaleza a través del conocimiento y de actividades lúdicas.
                    </p>
                </div>
            </div>
                <div className="flex flex-col gap-10 ">
                    <h2 className="font-titulos font-bold text-2xl text-center">
                        Consta de 3 ejes
                    </h2>
                    <div className="flex space-x-10 md:justify-center md:items-center overflow-scroll scrollbar-hide w-5/6 m-auto">
                        {
                            imgs.map(item => (
                                <div key={item.title} className="h-[300px] flex flex-col">
                                    <div className="flex flex-col item-center text-center py-5 w-[190px]">
                                        <div className="bg-[#75C495] rounded-t-xl h-[140px] flex flex-col justify-center items-center">
                                            <div className="w-full h-[50px] relative">
                                                <Image
                                                    src={item.img}
                                                    alt = {item.title}
                                                    fill
                                                    style={{objectFit: 'contain'}}
                                                />
                                            </div>
                                            <h3 className='font-bold text-xl'>
                                                {item.title}
                                            </h3>
                                        </div>
                                        <div className="bg-white rounded-b-xl h-[90px] flex justify-center items-center">
                                            <p className='font-botones leading-1 text-center text-black px-5 font-medium text-xs'>
                                                {item.p}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Link href={'https://docs.google.com/forms/d/e/1FAIpQLSeRxUUKkLi_XG4SvFMsNZUzMdXjtc9jWRN0HrDXMPoVIgoNWw/viewform?usp=sf_link'} target="_blank">
                        <button className="rounded-full bg-[#175A34] w-[180px] px-5 py-2 text-white font-medium m-5 lg:hover:bg-[#2F9D5F] transition-all duration-300 ease-in-out lg:mb-0">
                            Quiero informarme
                        </button>
                    </Link>

                </div>
        </section>
    )
}

export default Proyectos