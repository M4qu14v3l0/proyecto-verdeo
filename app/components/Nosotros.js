import CarrouselNos from './CarrouselNos.js'

const Nosotros = () => {
    return (
        <div className="w-screen flex flex-col mt-6 pb-4 bg-verde">
            <div className="w-11/12 flex mx-auto flex-col">
                <h2 className="text-center text-white font-bold text-xl mb-4 mt-3">Nosotros</h2>
                <p className="text-center text-white text-sm mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minus aspernatur modi nulla explicabo at quasi optio nisi laboriosam commodi.</p>
            </div>
            <CarrouselNos />
        </div>
    )
}

export default Nosotros;