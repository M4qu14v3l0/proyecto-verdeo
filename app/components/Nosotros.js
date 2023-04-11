import CarrouselNos from './CarrouselNos.js'

const Nosotros = () => {
    return (
        <div className="lg:hidden flex flex-col mt-6 pb-12 pt-8 bg-[#217948]">
            <div className="w-11/12 flex mx-auto flex-col">
                <h2 className="text-center text-blanco font-bold text-3xl mb-4 font-titulos">Nosotros</h2>
                <p className="font-botones text-center text-blanco text-sm mb-8">Buscamos hacer un cambio a través del despertar interior</p>
            </div>
            <CarrouselNos />
        </div>
    )
}

export default Nosotros;