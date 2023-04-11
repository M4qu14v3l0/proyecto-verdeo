import Link from "next/link";

const Hero = () => {
    return (
        <div className="bg-hero bg-cover bg-center bg-no-repeat h-[85vh] lg:h-[90vh] grid grid-cols-1 grid-rows-1">
            <div className='mt-auto text-center col-start-1 col-end-1 row-start-1 row-end-1 flex flex-col'>
                <h1 className='mb-10 hidden lg:inline pb-6 text-blanco font-titulos font-bold m-auto text-8xl'>Proyecto Verdeo</h1>
                <Link href='https://www.instagram.com/a_burninghill/' target="_blank" className="p-3 text-xs hidden lg:inline font-botones ml-auto mt-auto text-blanco">@a_burninghill</Link>
            </div>
            <div className='mt-auto text-center col-start-1 col-end-1 row-start-1 row-end-1 flex flex-col'>
                <h1 className='mb-8 lg:hidden text-blanco font-titulos font-bold m-auto text-3xl md:text-5xl'>Proyecto <br/> Verdeo</h1>
                <p className="p-3 text-xs lg:hidden font-botones ml-auto mt-auto text-blanco">@a_burninghill</p>
            </div>
        </div>
    )
}

export default Hero
