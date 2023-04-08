import Image from "next/image"



const imgs = [
    {img:'/calendar.svg' , title:'Educativo' , p:'Tierra, bosques y agua'},
    {img:'/hearth.svg' , title:'Espiritual' , p:'Desarrollo de conciencia y autoestima'},
    {img:'/wine.svg' , title:'Inspiracional' , p:'Historias e invitados de alto impacto'},
]


const Proyectos = () => {

    return (
        <section id="proyectos" className=''>
            <div className='relative'>
                <div className='bg-hacemosPortada bg-no-repeat w-full bg-cover h-[40vh] p-5'>
                    <h2 className='text-center text-3xl text-white'>Lo que hacemos</h2>
                </div>
            </div>
            <div className='flex flex-col gap-5 justify-center w-full relative bottom-[100px]'>
                <h1 className='text-white text-center text-2xl'>Proyecto Abedul</h1>
                <div className='bg-[#FFFBEB] w-[80%] m-auto text-center flex flex-col gap-5 p-5 rounded-xl shadow-2xl'>
                    <div className="w-full h-[250px] relative">
                        <Image 
                            src={'/objetivoPortada.svg'}
                            alt={'redFlag'}
                            fill
                            style={{objectFit: 'contain'}}
                        />
                    </div>
                    <h3 className='font-bold text-2xl'>Objetivo</h3>
                    <p className='leading-1 font-semibold'>
                    Creemos que solo se ama lo que se conoce por lo que buscamos inculcar a niños, niñas y adolescentes de casas hogares el amor a la naturaleza a través del conocimiento y de actividades lúdicas.
                    </p>
                </div>
            </div>
                <div className="flex flex-col gap-10">
                    <h2 className="text-center font-semibold text-2xl">
                        Consta de 3 ejes
                    </h2>
                    <div className="flex space-x-3 justify-around overflow-scroll scrollbar-hide w-5/6 m-auto">
                        {
                            imgs.map(item => (
                                <div key={item.title} className="w-[180px] h-[232px] flex flex-col items-center gap-8">
                                    <div className="flex flex-col gap-1 item-center text-center bg-[#75C495] rounded-xl w-[160px] py-5">
                                        <div className="w-full h-[80px] relative">
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
                                    <p className='leading-1 text-center'>
                                        {item.p}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
        </section>
    )
}

export default Proyectos