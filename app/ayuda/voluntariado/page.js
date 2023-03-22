import React from 'react'
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
        <div className='flex flex-col h-screen'>
            <h2 className='text-3xl text-center mt-2 mb-4 font-bold'>Cómo ayudar</h2>
            <h3 className='text-center text-2xl mb-4 font-bold'>Ser voluntario</h3>
            <div className='bg-verde2 h-auto mb-5 w-11/12 mx-auto px-4 rounded-xl flex flex-col'>
                <h4 className='font-bold mb-3 mt-2 text-xl text-center'>¿De qué se trata?</h4>
                <p className='mb-3 text-sm text-center'>Es un programa práctico y teórico para el desarrollo de la conciencia ambiental. Buscamos que los niños y adolescentes desarrollen habilidades blandas, trabajo en equipo, concientización y desarrollo de valores hacia los animales y la naturaleza.</p>
                <p className='mb-3 text-sm text-center'>Consta de 3 ejes:</p>
                {ejes.map(({titulo, texto}) => (
                    <div className='flex flex-col mb-2 mx-auto' key={titulo}>
                        <p className='font-bold text-sm text-center'>{titulo}</p>
                        <p className='mb-3 text-sm text-center'>{texto}</p>
                    </div>
                ))}
            </div>
            <Link href='/' className='mx-auto mb-5 bg-verde text-white text-lg py-1 px-3 rounded-xl'>Quiero ser voluntario</Link>
        </div>
    )
}

export default voluntariado