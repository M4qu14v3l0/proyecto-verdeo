import Link from 'next/link';

const Donaciones = () => {
    return (
        <div id="donaciones" className='flex flex-col bg-rosa mt-6'>
            <div className='bg-donar2 bg-center bg-no-repeat bg-cover h-[40vh] flex lg:mb-8'>
                <h2 className='mt-auto mb-4 mx-auto text-blanco text-3xl lg:text-4xl font-bold text-center font-titulos'>Suma tu donación</h2>
            </div>
            <p className='font-botones mt-4 lg:mb-8 text-lg px-4 lg:px-32 text-center'>Al hacer una donación, estás contribuyendo directamente a estos esfuerzos, ayudando a financiar la compra de equipo y suministros, así como a pagar los salarios de los trabajadores. Cada dólar que dones puede marcar la diferencia en la lucha contra el cambio climático, la protección de la biodiversidad y la creación de un futuro más sostenible para todos.</p>
            <div className='flex flex-col my-6 lg:my-8'>
                <Link href='/' className='flex mx-auto mb-6 lg:mb-6 bg-rojo hover:bg-[#CF6842] w-[232px] h-[40px] lg:w-[328px] lg:h-[50px] rounded-xl'><p className='m-auto text-blanco font-botones text-center text-lg py-1 px-3'>Donar desde Perú</p></Link>
                <Link href='/' className='flex mx-auto mb-6 bg-rojo hover:bg-[#CF6842] w-[232px] h-[40px] lg:w-[328px] lg:h-[50px] rounded-xl'><p className='m-auto text-blanco font-botones text-center text-lg py-1 px-3'>Donar desde el exterior</p></Link>
            </div>
        </div>
    )
}

export default Donaciones