'use client';
import {useEffect} from 'react';
import { getArticle } from './api/api';
import Actividades from './components/Actividades.js';
import Nosotros from './components/Nosotros.js';
import NosotrosFull from './components/NosotrosFull';
import Directorio from './components/Directorio.js';
import DirectorioFull from './components/DirectorioFull.js';
import Ayuda from './components/Ayuda.js';
import AyudaFull from './components/AyudaFull';
import Hero from './components/Hero';

export default function Home() {
  useEffect(() => {
      getArticle().then(data => {
          setArticulos(data)
      })
  }, []);
  return (
    <main className="flex flex-col pb-6">
      <Hero />
      <Actividades />
      <NosotrosFull />
      <Nosotros />
      <AyudaFull />
      <Ayuda />
      <DirectorioFull />
      <Directorio />
      {/* {articulos.length >= 1 ? 
        <ul className="flex gap-7 mb-2 mx-auto">                        
          {articulos.map((articulo) => (
              <div key={articulo.titulo}>
                  <h4>{articulo.titulo}</h4>
                  <p>{articulo.cuerpo}</p>
                  <p>{articulo.img}</p>
              </div>
          ))}
      </ul>
      : ""} */}
    </main>
  )
}
