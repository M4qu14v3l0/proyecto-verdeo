import Consejos from './components/Cons';
import Donaciones from './components/Dona';
import Voluntariado from './components/Volun';

const ayuda = () => {
  return (
    <div id='ayuda' className='flex flex-col'>
      <Voluntariado />
      <Donaciones />
      <Consejos />
    </div>
  )
}

export default ayuda
