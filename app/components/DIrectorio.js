import CarrouselDir from './CarrouselDir.js'

const Directorio = () => {
    return (
        <div className="lg:hidden bg-verde flex flex-col py-8">
            <h2 className="text-center text-blanco font-bold text-xl mb-4 lg:mb-6 lg:text-3xl">Directorio ecosostenible</h2>
            <p className="text-center text-blanco text-sm mb-5 px-6 lg:mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero corrupti molestiae quas et, explicabo odit eligendi, voluptatibus eius asperiores voluptatum ipsam atque saepe velit nobis illum? Nam quidem earum voluptate.</p>
            <CarrouselDir />
        </div>
    )
}

export default Directorio;