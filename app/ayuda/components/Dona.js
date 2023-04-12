import Link from 'next/link';

const Donaciones = () => {
    return (
        <div id="donaciones" className='flex flex-col bg-rosa mt-6'>
            <div className='bg-donar2 bg-center bg-no-repeat bg-cover h-[40vh] flex lg:mb-6'>
                <h2 className='mt-auto mb-4 mx-auto text-blanco text-3xl lg:text-4xl font-bold text-center font-titulos'>Suma tu donación</h2>
            </div>
            <p className='font-botones mt-8 lg:mt-6 text-lg px-8 lg:px-32 text-center'>“Andriu es un niño de 8 años que vive en San Juan de Miraflores y ha sido un beneficiario de nuestros programas, creando sus propios monstruos de chapitas de botella que luchan contra las bolsas de plástico”.</p>
            <p className='font-botones my-6 lg:my-6 text-lg px-8 lg:px-32 text-center'>Si esta historia te resuena, tú puedes ayudar a que un próximo niño siga aprendiendo y construyendo monstruos que luchan por la naturaleza.</p>
            <p className='font-botones font-bold mb-4 lg:mb-4 text-sm px-8 lg:px-32 text-center'>Si te encuentras en otra parte del Perú o aquí mismo, pero en otra ciudad que no sea Lima, puedes apoyar a que más niños, niñas y adolescentes se beneficien de nuestros programas.</p>
            <div className='flex flex-col my-6 lg:my-8'>
                <Link href='https://t.me/porlosbosques' target='_blank' className='flex mx-auto mb-6 bg-rojo lg:hover:bg-[#CF6842] w-[232px] h-[40px] lg:w-[328px] lg:h-[50px] rounded-xl'><p className='font-botones font-bold text-blanco text-center m-auto text-sm py-1 px-3'>Donar desde Perú</p></Link>
                <Link href='https://t.me/porlosbosques' target='_blank' className='flex mx-auto mb-6 bg-rojo lg:hover:bg-[#CF6842] w-[232px] h-[40px] lg:w-[328px] lg:h-[50px] rounded-xl'><p className='font-botones font-bold text-blanco text-center m-auto text-sm py-1 px-3'>Donar desde el exterior</p></Link>
            </div>
        </div>
    )
}

export default Donaciones