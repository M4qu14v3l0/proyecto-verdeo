
export default function MisionVision() {
  return (
    <section className="mt-10 mb-10 flex flex-col gap-5 h-[100vh] md:h-[50vh] justify-center items-center bg-[#FBE6BF] w-full md:flex-row">
        <div className="flex flex-col p-5 rounded-xl bg-[#F4B847] h-[280px] w-[280px] shadow-xl">
            <h1 className="text-center font-bold text-2xl">Misión</h1>
            <p className="text-center mt-8">
                {
                "Concientizar a las personas sobre la naturaleza (flora y fauna) generando un reflexión en su camino por este mundo e inspirar a través de la información que compartimos y de los programas que realizamos."
                }
            </p>
        </div>
        <div className=" p-5 bg-[#F4B847] rounded-xl h-[280px] w-[280px] shadow-xl">
            <h1 className="text-center font-bold text-2xl">Visión</h1>
            <p className="text-center mt-8">
                {
                "Ser uno de los proyectos referentes en educación ambiental, difusión científica y conservación en el Perú y América Latina."
                }
            </p>
        </div>
    </section>
  )
}
