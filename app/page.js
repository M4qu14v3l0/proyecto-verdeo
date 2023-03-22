'use client';
import {useEffect, useState} from 'react';
import { getArticle } from './api/api';
import Hacemos from './components/Hacemos.js';
import Nosotros from './components/Nosotros.js';
import Directorio from './components/Directorio.js';
import Ayuda from './components/Ayuda.js';
import Hero from './components/Hero';

export default function Home() {
  const [articulos, setArticulos] = useState({});
  useEffect(() => {
      getArticle().then(data => {
          setArticulos(data)
      })
  }, []);
  return (
    <main className="flex flex-col pb-6">
      <Hero />
      <Hacemos />
      <Nosotros />
      <Ayuda />
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
