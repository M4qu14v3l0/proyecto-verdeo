import Link from 'next/link';

const donaciones = () => {
    return (
        <div className='flex h-screen flex-col'>
            <div className='bg-donar bg-center bg-no-repeat bg-cover h-[40vh] flex'>
                <h3 className='mt-auto mb-4 mx-auto text-white text-3xl font-bold text-center'>Suma tu donación</h3>
            </div>
            <p className='mt-4 text-lg text-center'>Al hacer una donación, estás contribuyendo directamente a estos esfuerzos, ayudando a financiar la compra de equipo y suministros, así como a pagar los salarios de los trabajadores. Cada dólar que dones puede marcar la diferencia en la lucha contra el cambio climático, la protección de la biodiversidad y la creación de un futuro más sostenible para todos.</p>
            <div className='flex flex-col my-4'>
                <Link href='/' className='mx-auto mb-4 bg-verde text-white text-lg py-1 px-3 rounded-xl'>Donar desde Perú</Link>
                <Link href='/' className='mx-auto mb-4 bg-verde text-white text-lg py-1 px-3 rounded-xl'>Donar desde el exterior</Link>
            </div>
        </div>
    )
}

export default donaciones