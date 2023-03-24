import Consejos from './components/consejos.js';
import Donaciones from './components/donaciones.js';
import Voluntariado from './components/voluntariado.js';

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
