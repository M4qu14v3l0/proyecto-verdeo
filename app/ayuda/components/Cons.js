import Image from "next/image";
import TituloConsejos from "./TituloCons";
import Link from "next/link";

const tips= [
    {
        divClass: "flex flex-col lg:flex-row mb-6 lg:mb-12 lg:h-auto",
        img: "/espiritu.jpg",
        svg: "/corazon.svg",
        titulo: "Cultiva tu espíritu y actúa",
        texto: <p className="text-lg">La mejor forma de ayudar a la naturaleza es siendo mejores seres humanos, y esto se logra haciéndonos una autobservación, analizando, reflexionando y cuestionando todo lo que esta a nuestro alrededor para encontrar por nosotros mismos las respuestas. Recuerda que todo está en tu interior, no busques afuera. Cuando empecemos a ser y no solo hacer, podremos descubrir todo lo que hay al otro lado de la mirada humana de la sociedad y empezar a vivir en armonía, empatía, bondad y respeto hacia todas las criaturas del planeta tierra. Y si ya has empezado a cultivar tu espíritu, comparte lo que sabes con los que quieran escuchar y únete a los que están en el mismo camino que tú.</p>,
    },
    {
        divClass: "flex flex-col lg:flex-row-reverse mb-6 lg:mb-12 lg:h-auto",
        img: "/ropa.jpg",
        svg: "/ropa.svg",
        titulo: "Ropa y calzado",
        texto: <p className="text-lg">Vuestra ropa esconde mucho de vuestra belleza y, sin embargo, no cubre lo que no es bello”- Khalil Gibran La compra compulsiva de ropa se debe en gran parte a la obsesión por la moda y la necesidad de tener muchas opciones de outfit inspiradas por los medios y tendencias. <Link href="https://www.greenpeace.org/mexico/blog/9514/fast-fashion/" target="_blank" className="underline">La moda rápida</Link> solo es una parte de una de las formas más terribles del <Link href="https://sds.uanl.mx/2022/12/14/consumismo-el-mal-del-ultimo-siglo/" target="_blank" className="underline">consumismo.</Link> <Link href="https://lasempresasverdes.com/el-fast-fashion-la-segunda-industria-mas-contaminante/" target="_blank" className="underline">Anualmente, el fast fashion consume aproximadamente 93 billones de litros de agua, la cantidad suficiente para abastecer a cinco millones de personas.</Link></p>,
        data:                            
            <ul>
                <li className="flex flex-col my-4">
                    <p className="text-lg text-verde">1. Intercambia ropa con alguien</p>
                    <p className="indent-4 text-lg">Para alargar la vida de una prenda, puedes regalarla o donarla a alguien que la necesite en lugar de desecharla si ya no te queda o no te gusta.</p>
                </li>
                <li className="flex flex-col my-4">
                    <p className="text-lg text-verde">2. Investiga de donde viene tu ropa</p>
                    <p className="indent-4 text-lg">La moda puede involucrar explotación y agotamiento de recursos en la producción. Al investigar la procedencia y materiales de tu ropa, puedes tomar conciencia y elegir mejor. Busca noticias de fábricas ilegales donde asilan a personas para producir ropa de bajo costo para grandes marcas. Te recomendamos el documental <Link href="https://www.youtube.com/watch?v=5-0zHqYGnlo&ab_channel=ENDEVR" target="_blank" className="underline">“The true cost”.</Link></p>
                </li>
                <li className="flex flex-col my-4">
                    <p className="text-lg text-verde">3. Quiere tu ropa</p>
                    <p className="indent-4 text-lg">Reparar y reutilizar ropa es una alternativa en la moda para reducir emisiones de CO2 y ahorrar recursos como agua y materias primas. Conservar ropa por 1 o 2 años más reduce sus emisiones de CO2 en un 24%. Hacer una camiseta de algodón requiere aproximadamente 2700 litros de agua.</p>
                </li>
                <li className="flex flex-col my-4">
                    <p className="text-lg text-verde">4. No compres pieles ni nada de origen animal</p>
                    <p className="indent-4 text-lg">La moda utiliza animales en prendas como abrigos de piel, lo que representa una práctica cruel y aberrante. Antiguamente se consideraba lujo, pero hoy se reconoce su crueldad. Te presentamos una lista de cómo se utilizan los animales en la moda.</p>
                </li>
                <li className="flex flex-col my-4">
                    <p className="text-lg text-verde">5. Compra en tiendas de segunda mano, artesanía o ferias locales</p>
                    <p className="indent-4 text-lg">Estás ayudando a la localidad de tu entorno (pequeños emprendedores), reduciendo que se produzca más ropa y ayudando al planeta. No todo lo nuevo tiene significado de belleza.</p>
                </li>
                <li className="flex flex-col my-4">
                    <p className="text-lg text-verde">6. No caigas en la publicidad</p>
                    <p className="indent-4 text-lg">La publicidad engañosa de grandes campañas como Black Friday incentivan el consumismo sin conciencia de lo que queda atrás. La vida no se trata solo de consumir, sino de descubrir su esencia.</p>
                </li>
            </ul>
    },
    {
        divClass: "flex flex-col lg:flex-row mb-6 lg:mb-12 lg:h-auto",
        img: "/plastico.jpg",
        svg: "/botella.svg",
        titulo: "El uso del plástico",
        texto: <p className="text-lg">En millones de años cuando el humano se extinga (posiblemente) quizá... lo único que habremos dejado será el plástico como muestra de nuestra existencia.</p>,
        data:                            
            <ul>
                <li className="flex flex-col my-4">
                    <p className="text-lg text-verde">1. Evita productos que tengan envase plástico</p>
                    <p className="indent-4 text-lg">Los productos con plástico innecesario existen porque hay leyes que lo permiten y no regulan su reemplazo, exijamos leyes que avancen hacia un mundo con menos plástico y seamos consumidores conscientes. <Link href="https://lagulateca.com/frutas-peladas-y-envasadas-una-estupidez-que-genera-mas-residuos-o-nuevos-formatos-de-consumo/" target="_blank" className="underline">¿Este producto necesita plástico?</Link></p>
                </li>
                <li className="flex flex-col my-4">
                    <p className="text-lg text-verde">2. Compra tu comida por mayor y/o a granel y evita el exceso de bolsas plásticas</p>
                    <p className="indent-4 text-lg">Un gran ejercicio que podrías hacer es contar cuántas bolsas traes cada vez que vas al mercado, esto se reduciría  si empiezas a comprar por mayor (sacos) o a granel, llevando tú, tu propia bolsa.</p>
                </li>
                <li className="flex flex-col my-4">
                    <p className="text-lg text-verde">3. Busca juguetes de madera, tela, o de látex y caucho natural</p>
                </li>
                <li className="flex flex-col my-4">
                    <p className="text-lg text-verde">4. No uses vasos, platos y cubiertos de plástico cuando estés fuera del hogar</p>
                    <p className="indent-4 text-lg">¡Lleva tus propios utensilios! Si compras comida o bebida para llevar pide que no te la den en implementos de plástico, opta por llevar tus propios recipientes y botella reutilizable.</p>
                </li>
                <li className="flex flex-col my-4">
                    <p className="text-lg text-verde">5. Cambia bolsas de plástico por otras reutilizables, carros o cestas</p>
                    <p className="indent-4 text-lg">Cambia los tuppers de plástico por los de acero inoxidable o vidrio. Recuerda que al comprar cosas de plástico que pueden ser también de otro material, solo alimentan una industria que hace daño.</p>
                </li>
                <li className="flex flex-col my-4">
                    <p className="text-lg text-verde">6. Lleva tu bidón de agua, no compres agua embotellada</p>
                    <p className="indent-4 text-lg">Lastimosamente el agua, un recurso limitado es comercializado de manera indiscriminada mientras ríos y miles de personas alrededor del mundo sufren de la escasez de ella. No compres agua, lleva tu propia agua que sale de la cañería y hiérvela.</p>
                </li>
            </ul>
    },
    {
        divClass: "flex flex-col lg:flex-row-reverse mb-6 lg:mb-12 lg:h-auto",
        img: "/alimentacion.jpg",
        svg: "/fruta.svg",
        titulo: "Alimentación",
        texto: <p className="text-lg">“Que tu alimentación sea tu alimento” - Hipócrates</p>,
        data:                            
            <ul>
                <li className="flex flex-col my-4">
                    <p className="text-lg text-verde">1. Come alimentos que vengan de la naturaleza</p>
                    <p className="indent-4 text-lg">Retira en todo lo posible aquellos alimentos elaborados en fábricas y precocidos. Recuerda que estos dejan de estar ya en su estado natural, pasan a ser procesados y a colocar ingredientes impronunciables. Sumado a ello, al comprar un alimento elaborado estas ayudando a que exista más plástico.</p>
                </li>
                <li className="flex flex-col my-4">
                    <p className="text-lg text-verde">2. Aliméntate de productos de temporada</p>
                    <p className="indent-4 text-lg">Así como existe verano, primavera e invierno, la naturaleza tiene su propio ciclo y nos da lo que necesitamos. Aquellos productos que son consumidos fuera de su temporada, muchas veces pasan por procesos de congelación por semanas o meses, esto puede generar grandes toneladas de CO2.</p>
                </li>
                <li className="flex flex-col my-4">
                    <p className="text-lg text-verde">3. Elimina a los animales de tu plato</p>
                    <p className="indent-4 text-lg">El 85% de la deforestación en la Amazonía es causada por la ganadería y los cultivos. La ganadería emite el 14,5% de los gases de efecto invernadero. El consumo de animales como alimento afecta la biodiversidad del planeta. Todos merecemos respeto. <Link href="https://veganuary.com/es/guia-de-comidas/empezar/" target="_blank" className="underline">Te compartimos una lista de platos vegetarianos y veganos.</Link></p>
                </li>
                <li className="flex flex-col my-4">
                    <p className="text-lg text-verde">4. No desperdicies alimentos</p>
                    <p className="indent-4 text-lg"><Link href="https://www.youtube.com/watch?v=Y0MGlikVJBE&ab_channel=ComunicaRSE-TV" target="_blank" className="underline">Un estudio de la WWF</Link> indica que el 40% de los alimentos cultivados no se consume y termina en la basura, mientras hay gente muriendo de hambre en todo el mundo. No se trata de escasez de alimentos, sino de mala gestión de recursos, lo que produce obesidad en algunas poblaciones y hambruna en otras.</p>
                </li>
                <li className="flex flex-col my-4">
                    <p className="text-lg text-verde">5. Adquiere productos locales</p>
                    <p className="indent-4 text-lg">Comprar alimentos locales ayuda a reducir las emisiones de gases nocivos por el transporte de alimentos, además de mantener la frescura y nutrientes de los alimentos. También apoya la economía local y el desarrollo regional. Por tanto, es una forma eficaz y sabrosa de contribuir a reducir los efectos negativos del transporte en el medio ambiente.</p>
                </li>
            </ul>
    },
    {
        divClass: "flex flex-col lg:flex-row mb-6 lg:mb-12 lg:h-auto",
        img: "/agua.jpg",
        svg: "/agua.svg",
        titulo: "Agua",
        texto: <p className="text-lg">El 97.5% del agua en la tierra se encuentra en los océanos y mares de agua salada , únicamente el restante 2.5% es agua dulce, agua que consumimos.</p>,
        data:                            
            <ul>
                <li className="flex flex-col my-4">
                    <p className="text-lg text-verde">1. Usa filtro o purificador de agua</p>
                    <p className="indent-4 text-lg">Grandes alternativas para reducir nuestro consumo energético y el dinero en la compra de botellas y bidones de agua.</p>
                </li>
                <li className="flex flex-col my-4">
                    <p className="text-lg text-verde">2. No consumas agua embotellada</p>
                    <p className="indent-4 text-lg">El proceso de fabricación de las botellas, del transporte y de todo lo que implica es excesivamente contaminante, más que el agua corriente. Se debe de recordar que al final lo único que pasa con el agua embotellada es crear una gran pila de botellas desechables que tarda más de 1000 años en degradarse.</p>
                </li>
                <li className="flex flex-col my-4">
                    <p className="text-lg text-verde">3. No arrojes aceites de guisos, líquidos de frenos o anticongelante al drenaje</p>
                    <p className="indent-4 text-lg">Son sustancias altamente contaminantes que terminan lamentablemente en los mares y ríos.</p>
                </li>
                <li className="flex flex-col my-4">
                    <p className="text-lg text-verde">4. Repara fugas de agua</p>
                    <p className="indent-4 text-lg">Recuerda que el agua es un recurso que se agota, y solo el 2.5% del agua en todo nuestro planeta es apta para los humanos. Si no estás usando el agua, cierra el caño.</p>
                </li>
            </ul>
    },
    {
        divClass: "flex flex-col lg:flex-row-reverse mb-6 lg:mb-12 lg:h-auto",
        img: "/tierra.jpg",
        svg: "/planta.svg",
        titulo: "Tierra",
        texto: <p className="text-lg">Todo, absolutamente todo tiene vida en nuestro planeta.</p>,
        data:                            
            <ul>
                <li className="flex flex-col my-4">
                    <p className="text-lg text-verde">1. Separación de los residuos</p>
                    <p className="indent-4 text-lg">Separar los residuos no solo es importante para la tierra, sino para el aire y para todos los seres del planeta. Papel y cartón, vidrios, plásticos y metales son indispensables para que los separemos.</p>
                </li>
                <li className="flex flex-col my-4">
                    <p className="text-lg text-verde">2. Compost</p>
                    <p className="indent-4 text-lg">El compost ayuda a reducir la cantidad de basura que acaba en el vertedero y ayuda a recuperar la fertilidad del suelo, a través del abono natural... ¿Cómo hacerlo? Si tienes un jardín o un lugar verde en casa puedes instalar un compostador que esté en contacto con la tierra, y empezar a organizar residuos orgánicos (cáscara de frutas, verduras y etc). <Link href="https://redcompostaje.carrd.co/?gclid=Cj0KCQjw8qmhBhClARIsANAtbofzyGEXWgkErM8D7SgUuDREE1eIcIOTW8cPAxNfQ9VPNSHtJp9GQ10aAtm5EALw_wcB" target="_blank" className="underline">Aquí te dejamos el paso a paso.</Link></p>
                </li>
            </ul>
    },
    {
        divClass: "flex flex-col lg:flex-row mb-6 lg:mb-12 lg:h-auto",
        img: "/arboles.jpg",
        svg: "/arbol.svg",
        titulo: "Arboles",
        texto: <p className="text-lg">Todo, absolutamente todo tiene vida en nuestro planeta.</p>,
        data:                            
            <ul>
                <li className="flex flex-col my-4">
                    <p className="text-lg text-verde">1. Ayuda a reforestar</p>
                    <p className="indent-4 text-lg">Apoya la construcción de viveros, ayuda a reforestar. Hay millones de hectáreas deforestadas alrededor del todo el mundo por empresas que no son reguladas por el estado, importándoles más el dinero que pueden sacar de beneficio por una concesión o favores. Reforestar es una acción que contribuye a luchar contra el cambio climático.</p>
                </li>
                <li className="flex flex-col my-4">
                    <p className="text-lg text-verde">2. Apoya iniciativas de conservación</p>
                    <p className="indent-4 text-lg">En Perú hay 200 iniciativas de conservación de comunidades y familias, además de las áreas naturales protegidas. Puedes apoyar adoptando un árbol a través de una retribución monetaria o donando tu talento si no tienes recursos.</p>
                </li>
            </ul>
    },
]

const Consejos = () => {
    return (
        <div id="consejos" className='flex flex-col lg:w-10/12 lg:mx-auto'>
            <h2 className='text-3xl lg:text-4xl text-center mt-5 lg:mt-8 font-bold px-2 font-titulos'>7 formas de ayudar</h2>
            <p className='font-botones my-6 lg:my-10 text-lg text-center px-4'>¿Sabías que cambiar la forma en cómo vives puede ayudar al planeta?</p>
            <p className='font-botones mb-8 lg:my-10 text-lg text-center px-4'>Te mostramos algunos pequeños cambios que podrás hacer donde estés.</p>
            <TituloConsejos />
            {tips.map((tip) => (
                <div className={tip.divClass} key={tip.titulo}>
                    <div className="h-96 w-full lg:w-6/12 object-cover mb-3 px-6 lg:px-2">
                        <Image width={500} height={500} src={tip.img} className="h-full w-full object-cover rounded-xl" alt={tip.titulo}/>
                    </div>
                    <div className="flex flex-col px-6 w-full lg:w-6/12 lg:mx-auto">
                        <Image width={100} height={100} src={tip.svg} className="w-1/12 mt-4 mx-auto" alt={tip.titulo}/>
                        <h3 className="text-center font-bold text-2xl mb-3 py-3">{tip.titulo}</h3>
                        {tip.texto}
                        {tip.data?
                            <div>
                                {tip.data}
                            </div>
                        : ""}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Consejos