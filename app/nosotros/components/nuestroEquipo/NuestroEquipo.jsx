import Image from 'next/image'
import Link from 'next/link';

import { BsLinkedin } from "react-icons/bs";

const verdeoTeam = [
    {id:1 , name: 'Ana Rondón' ,img:'/anaRondon.svg'  , description: "Licenciada en Administración y Marketing con amplia experiencia laboral en startups, proyectos ambientales, digital media y branding. \n \nEnfocada en proyectos ambientales y de educación, con más de 8 años como voluntaria en distintas organizaciones del gobierno y privadas.\n \n Apasionada por la publicidad y los proyectos ambientales.",  linkedin: 'https://www.linkedin.com/in/anarondon/'},
    {id:2 , name: 'Ronal Chavez Soto' ,img:'/ronalChavez.svg' , description: "Licenciado en Ingeniería y Gestión Ambiental con experiencia en el área de Gestión Ambiental y Cuencas, manejo del Sistema Integral de Residuos Sólidos.\n \n Interesado en temas de: Gestión de Residuos Sólidos, Seguridad, salud ocupacional y medio ambiente, Monitoreo Ambiental, Elaboración de Estudios de Impacto Ambiental, contaminación de Agua, Aire y Suelo, conservación de suelo y Recursos hídricos.\n" , linkedin: 'https://www.linkedin.com/in/ronal-chavez-soto-a95936149/'}
]

export default function NuestroEquipo() {
    return (
        <section id='equipo' className='mb-32'>
            <div className='flex flex-col text-center gap-10 mb-10'>
                <h2 className='text-3xl lg:text-4xl font-bold font-titulos'>
                    Nosotros
                </h2>
                <h2 className='text-3xl lg:text-4xl font-bold font-titulos'>
                    Nuestro Equipo
                </h2>
            </div>
            <div className='max-w-[90%] md:max-w-3xl m-auto flex flex-col gap-5 md:flex-row'>
                {
                    verdeoTeam.map(person => (
                        <div key={person.id} className={`border-solid border-2 border-[#175A34] rounded-xl p-4 flex flex-col gap-5 relative w-full shadow-xl`}>
                            <div className='w-full h-[220px] relative'>
                                <Image 
                                src={person.img}
                                alt={person.name}
                                fill
                                className='rounded-xl'
                                />
                            </div>
                            <h1 className='font-botones text-center text-3xl font-semibold'>{person.name}</h1>
                            <p className='font-botones text-center '>{person.description.split('\n').map((description , index) => (
                            <span key={index}>
                                {description}
                                <br />
                            </span>
                        ))}</p>
                        <Link 
                            className='flex justify-center items-center gap-5'
                            href={person.linkedin}
                            target='_blank'
                        >
                            <BsLinkedin className='text-[#175A34] text-[25px]'/>
                            <p className='font-botones text-[12px] font-semibold'>Ver perfil en Linkedin</p>
                        </Link>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
