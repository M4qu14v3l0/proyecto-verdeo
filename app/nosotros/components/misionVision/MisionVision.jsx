
export default function MisionVision() {
  return (
    <section className="mt-10 mb-10 flex flex-col gap-5 h-fit justify-center rounded-xl bg-[#F4B847] w-[90%] m-auto md:bg-transparent md:flex-row">
        <div className="h-full flex flex-col p-5 rounded-xl md:bg-[#F4B847] md:h-[280px] md:w-[360px]">
            <h1 className="text-center font-bold text-2xl">Misión</h1>
            <p className="text-center mt-8">
                {
                "Concientizar a las personas sobre la naturaleza (flora y fauna) generando un reflexión en su camino por este mundo e inspirar a través de la información que compartimos y de los programas que realizamos."
                }
            </p>
        </div>
        <div className=" p-5 md:bg-[#F4B847] rounded-xl md:h-[280px] md:w-[360px]">
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
