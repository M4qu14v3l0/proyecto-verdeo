import Image from "next/image"



const imgs = [
    {img:'/calendar.svg' , title:'Educativo' , p:'Tierra, bosques y agua'},
    {img:'/hearth.svg' , title:'Espiritual' , p:'Desarrollo de conciencia y autoestima'},
    {img:'/wine.svg' , title:'Inspiracional' , p:'Historias e invitados de alto impacto'},
]


const Proyectos = () => {

    return (
        <section className=''>
            {/* <div className='grid grid-cols-1 grid-rows-3 h-[100vh]'>
                <div className='col-start-1 col-end-1 row-start-1 row-end-2'>
                    <div className='bg-abedul bg-no-repeat w-full bg-cover h-[40vh] p-5'>
                        <h2 className='text-center text-3xl text-white'>Lo que hacemos</h2>
                    </div>
                </div>

                <div className='col-start-1 col-end-1 row-start-1 row-end-2 relative top-[75%]'>
                    <div className='flex flex-col gap-5 justify-center w-full'>
                        <h1 className='text-white text-center text-2xl'>Proyecto Abedul</h1>
                        <div className='bg-[#75C495] w-[90%] m-auto text-center flex flex-col gap-5 p-5 rounded-xl'>
                            <div className="w-full h-[150px] relative">
                                <Image 
                                    src={'/redFlag.svg'}
                                    alt={'redFlag'}
                                    fill
                                    style={{objectFit: 'contain'}}
                                />
                            </div>
                            <h3 className='font-bold text-xl'>Objetivo</h3>
                            <p className='leading-1'>
                            Es un programa práctico y teórico 
                            para el desarrollo de la 
                            conciencia ambiental. 
                            Buscamos que los niños y
                            adolescentes desarrollen habilidades blandas, trabajo en equipo, concientización y desarrollo de valores hacia los animales y la naturaleza. 
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className='relative'>
                <div className='bg-abedul bg-no-repeat w-full bg-cover h-[40vh] p-5'>
                    <h2 className='text-center text-3xl text-white'>Lo que hacemos</h2>
                </div>
            </div>
            <div className='flex flex-col gap-5 justify-center w-full relative bottom-[100px]'>
                <h1 className='text-white text-center text-2xl'>Proyecto Abedul</h1>
                <div className='bg-[#75C495] w-[280px] m-auto text-center flex flex-col gap-5 p-5 rounded-xl'>
                    <div className="w-full h-[150px] relative">
                        <Image 
                            src={'/redFlag.svg'}
                            alt={'redFlag'}
                            fill
                            style={{objectFit: 'contain'}}
                        />
                    </div>
                    <h3 className='font-bold text-xl'>Objetivo</h3>
                    <p className='leading-1'>
                    Es un programa práctico y teórico 
                    para el desarrollo de la 
                    conciencia ambiental. 
                    Buscamos que los niños y
                    adolescentes desarrollen habilidades blandas, trabajo en equipo, concientización y desarrollo de valores hacia los animales y la naturaleza. 
                    </p>
                </div>
            </div>
                <div className="flex flex-col gap-10">
                    <h2 className="text-center font-semibold">
                        Consta de 3 ejes
                    </h2>
                    <div className="flex space-x-3 md:justify-around items-center overflow-scroll scrollbar-hide w-5/6 m-auto">
                        {
                            imgs.map(item => (
                                <div className="w-[180px] h-[232px] flex flex-col items-center gap-8">
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