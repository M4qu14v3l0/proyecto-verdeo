import Consejos from './components/Consejos';
import Donaciones from './components/Donaciones';
import Voluntariado from './components/Voluntariado';

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
