import Link from 'next/link';

const ejes= [
    {
        titulo: "La importancia del plástico en los océanos",
    },
    {
        titulo: "Compostaje",
    },
    {
        titulo: "Ecoladrillos",
    },
    {
        titulo: "Libros cartoneros",
    },
    {
        titulo: "Cualquier otro taller sobre educación ambiental",
    },
]

const voluntariado = () => {
    return (
        <div className='flex flex-col w-full'>
            <div className='flex bg-comunidad bg-center bg-no-repeat bg-cover h-[40vh] sm:h-[60vh]'>
                <Link href='https://www.instagram.com/mel.md.mel/' target="_blank" className='p-3 text-xs lg:hidden font-botones ml-auto mt-auto text-blanco'>@mel.md.mel</Link>
            </div>
            <h1 className='text-4xl lg:text-5xl text-center mt-7 lg:my-8 font-bold font-titulos'>Cómo ayudar</h1>
            <h2 id="voluntariado" className='text-center text-3xl lg:text-4xl my-7 lg:my-8 font-bold font-titulos'>Ser voluntario</h2>
            <div className='bg-verde2 h-auto mb-5 lg:mb-8 w-11/12 lg:w-3/6 mx-auto p-4 lg:p-6 rounded-xl flex flex-col'>
                <h4 className='font-botones font-bold mb-3 lg:mb-8 text-xl text-center'>¿De qué se trata?</h4>
                <p className=' font-botonesmb-3 text-sm text-center'>Si eres una persona responsable, con ganas de aprender, formar parte de un equipo, desarrollar tus habilidades y contribuir a la sociedad ¡Esta es tu oportunidad!</p>
                <p className=' font-botonesmb-3 text-sm text-center my-4'>¿En qué puedes colaborar?</p>
                <ol className='flex flex-col mb-2 mx-auto'>
                    {ejes.map(({titulo}) => (
                            <li key={titulo} className='font-botones font-bold text-sm text-center mb-3'>• {titulo}</li>
                    ))}
                </ol>
            </div>
            <Link href='https://docs.google.com/forms/d/e/1FAIpQLSfDg0qrqDcMfKo8W_12CqYupZxdYEBhnbxLxC5hUXokBli57w/viewform' target='_blank' className='flex w-[232px] h-[40px] lg:w-[328px] lg:h-[50px] mx-auto mb-5 lg:mb-8 bg-verde hover:bg-[#2F9D5F] rounded-xl'><p className='font-botones font-bold text-blanco text-center m-auto text-sm py-1 px-3'>Quiero ser voluntario</p></Link> 
        </div>
    )
}

export default voluntariado