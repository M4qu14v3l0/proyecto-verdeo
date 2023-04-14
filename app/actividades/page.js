import React from 'react'
import Proyectos from './components/proyectos/Proyectos'
import Talleres from './components/talleres/Talleres'


const page = () => {
  return (
    <main id='actividades'>
      <Proyectos />
      <Talleres />
      {/* comment */}
    </main>
  )
}

export default page
