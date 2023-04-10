import Consejos from './components/Cons';
import Donaciones from './components/Dona';
import Voluntariado from './components/Volun';

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
