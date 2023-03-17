import Link from "next/link";

const Hacemos = () => {
    return (
        <div className="w-11/12 flex mx-auto flex-col mt-6">
            <h2 className="text-center font-bold text-xl mb-4">Lo que hacemos</h2>
            <p className="text-center text-sm mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minus aspernatur modi nulla explicabo at quasi optio nisi laboriosam commodi, ratione voluptatibus natus dolorem nesciunt vel accusantium? Aspernatur, optio excepturi!</p>
            <div className="rounded-2xl border-2 border-green-600 p-6 flex flex-col mb-6">
                <h3 className="text-center text-6xl font-bold text-green-800 mt-6 mb-5">PA</h3>
                <h4 className="text-center font-bold mb-5">Proyecto Abedul</h4>
                <p className="text-center mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quod facilis sed suscipit omnis tempore quo sapiente expedita velit incidunt aspernatur ut dolor eveniet.</p>
                <Link href="/actividades" className="flex mx-auto rounded-2xl bg-green-800  w-4/12 h-8 mb-8">
                    <p className="text-white text-center m-auto text-sm">Ver más</p>
                </Link>
            </div>
            <div className="rounded-2xl border-2 border-red-600 p-6 flex flex-col">
                <h3 className="text-center text-6xl font-bold text-red-800 mt-6 mb-5">TA</h3>
                <h4 className="text-center font-bold mb-5">Talleres</h4>
                <p className="text-center mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quod facilis sed suscipit omnis tempore quo sapiente expedita velit incidunt aspernatur ut dolor eveniet.</p>
                <Link href="/actividades" className="flex mx-auto rounded-2xl bg-red-800  w-4/12 h-8 mb-8">
                    <p className="text-white text-center m-auto text-sm">Ver más</p>
                </Link>
            </div>
        </div>
    )
}

export default Hacemos;
