import Image from "next/image"
import Link from "next/link"

const talleres = [
    {id:1 , img:'/tallerCompostaje.svg' , titulo: '1. Taller de compostaje' , texto:'Dirigido a niños, niñas, adolescentes y público en general. Este taller busca informar y concientizar sobre la importancia de cómo nuestra alimentación influye en la naturaleza, y cómo optar por una alimentación saludable y basada en plantas puede ayudar a contribuir a la madre tierra.' , fecha:'Todo el año', duracion:'1 día (1h - 2h)', enfoque:'Educativo e inspiracional'},

    {id:2 , img:'/tallerEcoladrillos.svg' , titulo: '2. Taller de ecoladrillos' , texto:'Dirigido a niños, niñas, adolescentes y público en general. Este taller busca concientizar sobre el uso del plástico y cómo afecta a los animales, a los ríos, mares y al ser humano. Demostramos que existe una “alternativa” transitoria hacia un mundo sin plástico a través de la creación de ecoladrillos.' , fecha:'Todo el año', duracion:'1 día (1h - 2h)', enfoque:'Educativo e inspiracional'},

    {id:3 , img:'/tallerPlasticos.svg' , titulo: '3. Taller de importancia del plástico en los océanos' , texto:'Dirigido a niños, niñas, adolescentes y público en general. Este taller busca concientizar sobre el uso del plástico y cómo afecta a los animales, los ríos, mares y al ser humano. Demostramos poder reciclar algunos tipos de plástico y que formen parte un objeto artístico o juego.' , fecha:'Todo el año', duracion:'1 día (1h - 2h)', enfoque:'Educativo y artistico'},

    {id:4 , img:'/tallerCartonero.svg' , titulo: '4. Taller de libro cartonero' , texto:'Dirigido a niños, niñas, adolescentes y público en general. Este taller busca revalorar el uso del cartón y cómo su transformación a través del arte puede ser un vehículo para la imaginación y desarrollo de habilidades.' , fecha:'Todo el año', duracion:'1 día (1h - 2h)', enfoque:'Educativo e inspiracional'},

    {id:5 , img:'/tallerReciclaje.svg' , titulo: '5. Taller de reciclaje' , texto:'Dirigido a niños, niñas, adolescentes y público en general. Este taller busca concientizar sobre el consumismo en el mundo y cómo este ha afectado a la contaminación de nuestro planeta tierra.' , fecha:'Todo el año', duracion:'1 día (1h - 2h)', enfoque:'Educativo e inspiracional'},

]

// {id:6 , img:'/activismo.svg' , titulo: '6. Activismo constante' , texto:'Dirigido a niños, niñas, adolescentes y público en general. Este taller busca informar y concientizar sobre la importancia de cómo nuestra alimentación influye en la naturaleza, y cómo optar por una alimentación saludable y basada en plantas puede ayudar a contribuir a la madre tierra.'},

const Talleres = () => {
    return (
        <section id='talleres' className='flex flex-col gap-5 mb-10 bg-[#F5A88C] mt-10 pt-14'>
            <div className='flex flex-col gap-10 justify-center w-full'>
                <h2 className='text-black text-center text-3xl font-titulos font-semibold  md:text-5xl '>Talleres ambientales</h2>
                <div className='bg-[#F7C6B5] w-[80%] md:w-[60%] lg:w-[50%] xl:w-[30%] mx-auto text-center flex flex-col gap-5 p-5 rounded-xl shadow-2xl mb-20'>
                    <div className="w-full h-[250px] relative">
                        <Image 
                            src={'/talleresAmbientales.svg'}
                            alt={'redFlag'}
                            fill
                            style={{objectFit: 'contain'}}
                        />
                    </div>
                    <h3 className='font-bold text-3xl font-titulos'>¿De qué se trata?</h3>
                    <p className='font-botones text-center text-lg'>
                    Dirigido a niños, niñas, adolescentes y público en general que busca reconectar con la naturaleza. Buscamos desarrollar la conciencia sobre el cambio climático, impartir información sobre la importancia de los animales y de qué podemos hacer desde donde estamos.
                    </p>
                </div>
                <div className="flex flex-col gap-10 md:hidden w-[90%] m-auto">
                {
                    talleres.map((taller) => {
                        return (
                        <>
                        {                            
                        <div key={taller.id} className={`flex flex-col rounded-3xl h-fit bg-[#F7C6B5]`}>
                            <div className="relative w-full h-[350px]">
                                <Image 
                                    src={taller.img}
                                    fill
                                    style={{objectFit:'cover'}}
                                    alt={taller.titulo}
                                    className={'rounded-t-2xl'}
                                />
                            </div>
                            <div className="flex flex-col gap-5 justify-center items-center w-[80%] m-auto">
                                <h3 className="text-3xl md:text-4xl font-semibold font-titulos text-center mt-10">{taller.titulo}</h3>
                                <p className="font-botones text-center">{taller.texto}</p>
                                <div className="flex flex-col gap-1 text-center">
                                    <p className="font-botones">Fecha: {taller.fecha}</p>
                                    <p className="font-botones">Duración: {taller.duracion}</p>
                                    <p className="font-botones">Enfoque: {taller.enfoque}</p>
                                </div>
                                <button className="font-botones rounded-full bg-[#9F2E05] w-[180px] px-5 py-2 text-white font-medium flex justify-center items-center m-5">
                                    Quiero un taller
                                </button>
                            </div>
                        </div>
                        }
                        </> 
                    )})
                    }
                    <div className={`flex flex-col rounded-3xl h-fit bg-[#F7C6B5] mb-20`}>
                        <div className="relative w-full h-[350px]">
                            <Image 
                                src={'/activismoConstante.jpg'}
                                fill
                                style={{objectFit:'cover'}}
                                alt={'activismo'}
                                className={'rounded-t-2xl'}
                            />
                        </div>
                        <div className="flex flex-col gap-5 justify-center items-center w-[80%] m-auto mt-10">
                            <h1 className="text-3xl md:text-4xl font-semibold font-titulos text-center">6. Activismo constante</h1>
                            <p className="font-botones text-center">Dirigido a niños, niñas, adolescentes y público en general. Este taller busca informar y concientizar sobre la importancia de cómo nuestra alimentación influye en la naturaleza, y cómo optar por una alimentación saludable y basada en plantas puede ayudar a contribuir a la madre tierra.</p>

                            <button className="font-botones rounded-full bg-[#9F2E05] w-[240px] px-5 py-2 text-white font-medium flex justify-center items-center m-5">
                                Enterarme en Instagram
                            </button>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex flex-col w-[90%] xl:w-[75%] m-auto gap-20">
                    {
                        talleres.map((taller) => {

                            const alternate = taller.id % 2 !== 0;
                            return (
                            <>
                            {                            
                            <div key={taller.id} className={`gridForCards rounded-3xl h-[560px] bg-[#F7C6B5]`}>
                                <div className="relative w-full h-full colForCard">
                                    <Image 
                                        src={taller.img}
                                        fill
                                        style={{objectFit:'cover'}}
                                        alt={taller.titulo}
                                        className={`${alternate ? `rounded-l-2xl` : `rounded-r-2xl` }`}
                                    />
                                </div>
                                <div className="flex flex-col gap-5 justify-center items-center w-[80%] m-auto colForCard h-full">
                                    <h1 className="font-botones text-2xl font-semibold">{taller.titulo}</h1>
                                    <p className="font-botones text-justify">{taller.texto}</p>
                                    <div className="flex flex-col gap-1 text-center">
                                        <p className="font-botones">Fecha: {taller.fecha}</p>
                                        <p className="font-botones">Duración: {taller.duracion}</p>
                                        <p className="font-botones">Enfoque: {taller.enfoque}</p>
                                    </div>
                                    <Link href={'https://docs.google.com/forms/d/e/1FAIpQLSeRxUUKkLi_XG4SvFMsNZUzMdXjtc9jWRN0HrDXMPoVIgoNWw/viewform'} target="_blank">
                                        <button className="font-botones rounded-full bg-[#9F2E05] w-[180px] px-5 py-2 text-white font-medium flex justify-center items-center m-5 lg:hover:bg-[#CF6842] transition-all duration-300 ease-in-out">
                                        Quiero un taller
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            }
                            </> 
                        )})
                    }
                    <div className={`grid grid-cols-1 md:grid-cols-2 rounded-3xl h-[560px] bg-[#F7C6B5] mb-20`}>
                        <div className="flex flex-col gap-5 justify-center items-center w-[80%] m-auto h-full">
                            <h1 className="font-botones text-2xl font-semibold mt-10">6. Activismo constante</h1>
                            <p className="font-botones text-justify">Como proyecto nos unimos a las diferentes causas sociales y ambientales por lo que constantemente participamos de manera libre e independiente en diversas manifestaciones. Puedes unirte al grupo cuando hacemos las convocatorias a través de nuestras redes sociales.</p>
                            <Link href={'https://www.instagram.com/proyectoverdeo/'} target="_blank">
                                <button className="rounded-full font-botones bg-[#9F2E05] w-[250px] px-5 py-2 text-white font-medium flex justify-center items-center m-5 lg:hover:bg-[#CF6842] transition-all duration-300 ease-in-out">
                                Enterarme en Instagram
                                </button>
                            </Link>
                        </div>
                        <div className="relative w-full h-full">
                            <Image 
                                src={'/activismoConstante.jpg'}
                                fill
                                style={{objectFit:'cover'}}
                                alt={'Activismo'}
                                className={`rounded-r-2xl image-ori`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Talleres
