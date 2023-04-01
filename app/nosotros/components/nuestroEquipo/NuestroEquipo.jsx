import Image from 'next/image'



const verdeoTeam = [
    {id:1 , name: 'Ana Rondón' ,img:'/anaRondon.svg', borderColor: 'border-[#175A34]'  , description: "Licenciada en Administración y Marketing con amplia experiencia laboral en startups, proyectos ambientales, digital media y branding. Enfocada en proyectos ambientales y de educación, con más de 8 años como voluntaria en distintas organizaciones del gobierno y privadas. Apasionada por la publicidad y los proyectos ambientales."},
    {id:2 , name: 'Ronal Chavez Soto' ,img:'/ronalChavez.svg', borderColor: 'border-[#9F2E05]' , description: "Licenciado en Ingeniería y Gestión Ambiental con experiencia en el área de Gestión Ambiental y Cuencas, manejo del Sistema Integral de Residuos Sólidos. Interesado en temas de: Gestión de Residuos Sólidos, Seguridad, salud ocupacional y medio ambiente, Monitoreo Ambiental, Elaboración de Estudios de Impacto Ambiental, contaminación de Agua, Aire y Suelo, conservación de suelo y Recursos hídricos."}
]

export default function NuestroEquipo() {
    return (
        <section id='equipo' className='mb-32'>
            <div className='flex flex-col text-center gap-10 mb-10'>
                <h2 className='text-3xl font-bold'>
                    Nosotros
                </h2>
                <h2 className='text-3xl font-bold'>
                    Nuestro Equipo
                </h2>
            </div>
            <div className='max-w-[90%] md:max-w-3xl m-auto flex flex-col gap-5 md:flex-row'>
                {
                    verdeoTeam.map(person => (
                        <div key={person.id} className={`border-solid border-2 ${person.borderColor} rounded-xl p-4 flex flex-col gap-5 relative w-full`}>
                            <div className='w-full h-[220px] relative'>
                                <Image 
                                src={person.img}
                                alt={person.name}
                                fill
                                className='rounded-xl'
                                />
                            </div>
                            <h1 className='text-center text-xl font-semibold'>{person.name}</h1>
                            <p className='text-center '>{person.description}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
