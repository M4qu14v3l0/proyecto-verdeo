import Link from "next/link";

const Directorio = () => {
    return (
        <div className="w-screen flex flex-col">
            <div className="w-11/12 flex mx-auto flex-col">
                <h2 className="text-center font-bold text-xl mb-4">Directorio Sostenible</h2>
                <p className="text-center text-sm mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minus aspernatur modi nulla explicabo at quasi optio nisi laboriosam commodi, ratione voluptatibus natus dolorem nesciunt vel accusantium? Aspernatur, optio excepturi!</p>
            </div>
            <Link className="flex bg-dir bg-cover bg-no-repeat bg-center h-80" href="/nosotros">
                <div className="flex-flex-col p-4 mt-auto">
                    <h4 className="text-center text-xl font-bold mb-5 text-white">Ejemplo</h4>
                    <p className="text-center mb-3 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quod facilis sed suscipit omnis tempore quo sapiente expedita velit incidunt aspernatur ut dolor eveniet.</p>
                </div>
            </Link>
        </div>
    )
}

export default Directorio;