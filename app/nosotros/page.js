import Anuario from "./components/anuario/Anuario"
import MisionVision from "./components/misionVision/MisionVision"
import NuestroEquipo from "./components/nuestroEquipo/NuestroEquipo"
import NuestrosValores from "./components/nuestrosValores/NuestrosValores"


const Nosotros = () => {
  return (
    <main>
      <NuestroEquipo />
      <NuestrosValores />
      <MisionVision />
      <Anuario />
    </main>
  )
}

export default Nosotros
