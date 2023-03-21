import Image from "next/image"



const imgs = [
    {img:'' , title:'' , p:''},
]


const proyectos = () => {




    return (
        <section className='h-[]'>
            <div className='relative'>
                <div className='bg-abedul bg-no-repeat w-full bg-cover h-[40vh] p-5'>
                    <h2 className='text-center text-3xl text-white'>Lo que hacemos</h2>
                </div>
            </div>
            <div className='flex flex-col gap-5 justify-center w-full relative bottom-[15%]'>
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
                <div>
                    <h2>
                        Consta de 3 ejes
                    </h2>
                    <div className="">

                    </div>
                </div>
        </section>
    )
}

export default proyectos