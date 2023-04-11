'use client';
import { useState, useEffect } from 'react';
import { getArticle } from '../api/api.js';
import Moda from './components/Moda.js';
import Alimentos from './components/Alimentos.js';
import Personal from './components/Personal.js';
import Agro from './components/Agro.js';
import Sociales from './components/Sociales.js';
import Otros from './components/Otros.js';

export default function Page() {
  const [empresas, setEmpresas] = useState([]);
  useEffect(() => {
      getArticle().then(data => {
          setEmpresas(data)
      })
  }, []);
  return (
    <div className='flex flex-col w-full bg-[#217948] h-auto'>
      {empresas.length >= 1 ? <h2 className='text-bold text-4xl lg:text-5xl text-center mt-10 mb-6 px-4 text-blanco font-titulos'>Directorio ecosostenible</h2> : ""}
      <Moda />
      <Alimentos />
      <Personal />
      <Agro />
      <Sociales />
      <Otros />
    </div>
  )
}

