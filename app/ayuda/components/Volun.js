import Link from 'next/link';

const ejes= [
    {
        titulo: "Educativo",
        texto: "Tierra, bosques y agua."
    },
    {
        titulo: "Espiritual",
        texto: "Desarrollo de Conciencia y autoestima."
    },
    {
        titulo: "Inspiracional",
        texto: "Historias e invitados de alto impacto."
    },
]

const voluntariado = () => {
    return (
        <div className='flex flex-col w-full'>
            <h2 className='text-3xl lg:text-5xl text-center my-4 lg:my-8 font-bold font-titulos'>Cómo ayudar</h2>
            <div className='bg-comunidad bg-center bg-no-repeat bg-cover h-[40vh] sm:h-[60vh]' />
            <h3 id="voluntariado" className='text-center text-2xl lg:text-3xl my-5 lg:my-8 font-bold font-titulos'>Ser voluntario</h3>
            <div className='bg-verde2 h-auto mb-5 lg:mb-8 w-11/12 lg:w-3/6 mx-auto p-4 lg:p-6 rounded-xl flex flex-col'>
                <h4 className='font-bold mb-3 lg:mb-8 text-xl text-center'>¿De qué se trata?</h4>
                <p className='mb-3 text-sm text-center'>Es un programa práctico y teórico para el desarrollo de la conciencia ambiental. Buscamos que los niños y adolescentes desarrollen habilidades blandas, trabajo en equipo, concientización y desarrollo de valores hacia los animales y la naturaleza.</p>
                <p className='mb-3 text-sm text-center'>Consta de 3 ejes:</p>
                {ejes.map(({titulo, texto}) => (
                    <div className='flex flex-col mb-2 mx-auto' key={titulo}>
                        <p className='font-bold text-sm text-center'>{titulo}</p>
                        <p className='mb-3 text-sm text-center'>{texto}</p>
                    </div>
                ))}
            </div>
            <Link href='https://docs.google.com/forms/d/e/1FAIpQLSfDg0qrqDcMfKo8W_12CqYupZxdYEBhnbxLxC5hUXokBli57w/viewform' target='_blank' className='lg:w-2/6 mx-auto mb-5 lg:mb-8 bg-verde hover:bg-green-700 text-blanco text-lg lg:text-center py-1 lg:py-2 px-3 rounded-xl'>Quiero ser voluntario</Link>
        </div>
    )
}

export default voluntariado