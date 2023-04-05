
const Hero = () => {
    return (
        <div className="bg-hero bg-cover bg-center bg-no-repeat h-[85vh] lg:h-[90vh] grid grid-cols-1 grid-rows-1">
            <div className='mt-auto mb-10 mx-auto text-center col-start-1 col-end-1 row-start-1 row-end-1 flex flex-col'><h1 className='hidden lg:inline pb-6 text-blanco font-bold m-auto text-8xl'>Proyecto Verdeo</h1></div>
            <div className='mt-auto mb-5 mx-auto text-center col-start-1 col-end-1 row-start-1 row-end-1 flex flex-col'><h1 className='lg:hidden text-blanco font-bold m-auto text-3xl md:text-5xl'>Proyecto <br/> Verdeo</h1></div>
        </div>
    )
}

export default Hero
