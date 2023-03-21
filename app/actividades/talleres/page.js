import React from 'react'

const talleres = () => {
    return (
        <section className='flex flex-col gap-5 mb-10'>
            <div className='flex flex-col gap-5'>
                <h1 className='text-center font-bold text-3xl'>
                    Lo que hacemos
                </h1>
                <p className='text-center font-bold text-xl'>Talleres</p>
            </div>
            <div className='m-4 rounded-3xl bg-[#F5A88C]'>
                <div className='p-3 text-center flex flex-col gap-5'>
                    <h2 className='font-semibold text-lg'>¿De qué se trata?</h2>
                    <p className='leading-none'>Colaboramos con otros Proyectos ambientales que nos convocan para participar en talleres.</p>
                    <p className='leading-none'>Podemos aportar conocimiento en talleres sobre:</p>
                    <ul className='flex flex-col gap-3 font-bold list-disc list-inside'>
                        <li className='leading-none'>La importancia del plástico en los océanos</li>
                        <li>Compostaje</li>
                        <li>Ecoladrillos</li>
                        <li>Libros cartoneros</li>
                        <li className='leading-none'>Cualquier otro taller sobre educación ambiental</li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-center'>
                <button className='bg-rojo w-40 p-1 text-white rounded-3xl font-medium'>
                    Trabajemos juntos
                </button>
            </div>
        </section>
    )
}

export default talleres
