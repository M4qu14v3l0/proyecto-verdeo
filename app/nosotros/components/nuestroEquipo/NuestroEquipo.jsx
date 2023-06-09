import Image from 'next/image'
import Link from 'next/link';

import { BsLinkedin } from "react-icons/bs";

const verdeoTeam = [
    {id:1 , name: 'Ana Rondón' ,img:'/anaRondon.svg'  , description: "Licenciada en Administración y Marketing con amplia experiencia laboral en startups, proyectos ambientales, digital media y branding. \n \nEnfocada en proyectos ambientales y de educación, con más de 8 años como voluntaria en distintas organizaciones del gobierno y privadas.\n \n Apasionada por la publicidad y los proyectos ambientales.",  linkedin: 'https://www.linkedin.com/in/anarondon/'},
    {id:2 , name: 'Ronal Chavez Soto' ,img:'/ronalChavez.svg' , description: "Licenciado en Ingeniería y Gestión Ambiental con experiencia en el área de Gestión Ambiental y Cuencas, manejo del Sistema Integral de Residuos Sólidos.\n \n Interesado en temas de: Gestión de Residuos Sólidos, Seguridad, salud ocupacional y medio ambiente, Monitoreo Ambiental, Elaboración de Estudios de Impacto Ambiental, contaminación de Agua, Aire y Suelo, conservación de suelo y Recursos hídricos." , linkedin: 'https://www.linkedin.com/in/ronal-chavez-soto-a95936149/'}
]

export default function NuestroEquipo() {
    return (
        <section id='equipo' className='mb-32'>
            <div className='flex flex-col text-center gap-10 mb-10 mt-28'>
                <h2 className='text-4xl lg:text-5xl text-center mt-7 font-bold font-titulos'>
                    Nosotros
                </h2>
                <h2 className='text-center text-3xl lg:text-4xl font-bold font-titulos'>
                    Nuestro Equipo
                </h2>
            </div>
            <div className='max-w-[90%] gap-5 md:max-w-3xl lg:max-w-5xl m-auto flex flex-col md:gap-24 lg:gap-40 md:flex-row'>
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
                            <h1 className='font-titulos text-center text-3xl md:5xl font-semibold'>{person.name}</h1>
                            <p className='font-botones text-center text-lg'>{person.description.split('\n').map((description , index) => (
                            <span key={index}>
                                {description}
                                <br />
                            </span>
                        ))}</p>
                        <Link 
                            className='flex justify-center items-center gap-2'
                            href={person.linkedin}
                            target='_blank'
                        >
                            {/* <BsLinkedin className='text-[#175A34] text-[25px]'/> */}
                            <div className='relative w-[30px] h-[30px]'>
                                <Image 
                                    src={'linkedin.svg'}
                                    fill
                                    style={{objectFit:'cover'}}
                                    alt='linkedin'
                                />
                            </div>
                            <p className='font-botones text-[15px]'>Ver perfil en Linkedin</p>
                        </Link>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
