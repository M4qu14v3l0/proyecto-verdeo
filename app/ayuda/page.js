import Consejos from './components/Consejos.js';
import Donaciones from './components/Donaciones.js';
import Voluntariado from './components/Voluntariado.js';

const ayuda = () => {
  return (
    <div className='flex flex-col'>
      <Voluntariado />
      <Donaciones />
      <Consejos />
    </div>
  )
}

export default ayuda
