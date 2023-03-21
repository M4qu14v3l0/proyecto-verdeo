import Carrousel from './CarrouselNos.js'

const Nosotros = () => {
    return (
        <div className="w-screen flex flex-col mt-6">
            <div className="w-11/12 flex mx-auto flex-col">
                <h2 className="text-center font-bold text-xl mb-4">Nosotros</h2>
                <p className="text-center text-sm mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minus aspernatur modi nulla explicabo at quasi optio nisi laboriosam commodi, ratione voluptatibus natus dolorem nesciunt vel accusantium? Aspernatur, optio excepturi!</p>
            </div>
            <Carrousel />
        </div>
    )
}

export default Nosotros;