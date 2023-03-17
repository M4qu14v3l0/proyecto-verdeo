import Link from "next/link";

const Ayuda = () => {
    return (
        <div className="w-11/12 flex mx-auto flex-col my-6">
            <h2 className="text-center font-bold text-xl mb-4">Cómo Ayudar</h2>
            <p className="text-center text-sm mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minus aspernatur modi nulla explicabo at quasi optio nisi laboriosam commodi, ratione voluptatibus natus dolorem nesciunt vel accusantium? Aspernatur, optio excepturi!</p>
            <div className="flex bg-voluntario bg-cover bg-no-repeat bg-center h-80 rounded-xl mb-6">
                <div className="flex-flex-col p-4 mt-auto">
                    <p className="text-center mb-3 text-white">Lorem ipsum dolor sit amet consectetur apore quo sapiente expedita velit incidunt aspernatur ut dolor eveniet.</p>
                    <Link href="/voluntarios" className="flex mx-auto rounded-3xl bg-green-800 h-12 w-6/12 mb-3">
                        <p className="text-white text-center font-bold m-auto text-lg">Ser voluntario</p>
                    </Link>
                </div>
            </div>
            <div className="flex bg-donar bg-cover bg-no-repeat bg-center h-80 rounded-xl mb-6">
                <div className="flex-flex-col p-4 mt-auto">
                    <p className="text-center mb-3 text-white">Lorem ipsum dolor sit amet consectetur apore quo sapiente expedita velit incidunt aspernatur ut dolor eveniet.</p>
                    <Link href="/donar" className="flex mx-auto rounded-3xl bg-red-700 h-12 w-6/12 mb-3">
                        <p className="text-white text-center font-bold m-auto text-lg">Donar</p>
                    </Link>
                </div>
            </div>
            <div className="flex bg-nos bg-cover bg-no-repeat bg-center h-80 rounded-xl">
                <div className="flex-flex-col p-4 mt-auto">
                    <p className="text-center mb-3 text-white">Lorem ipsum dolor sit amet consectetur apore quo sapiente expedita velit incidunt aspernatur ut dolor eveniet.</p>
                    <Link href="/ayudar" className="flex mx-auto rounded-3xl bg-yellow-500 h-12 w-6/12 mb-3">
                        <p className="text-white text-center font-bold m-auto text-lg">Ayudar</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Ayuda;