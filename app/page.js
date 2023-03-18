'use client';
import {useEffect, useState} from 'react';
import { getArticle } from './api/api';
import Image from 'next/image';
import hero from './assets/img/bosque.jpg';
import Hacemos from './components/Hacemos.js';
import Nosotros from './components/Nosotros.js';
import Directorio from './components/Directorio.js';
import Ayuda from './components/Ayuda.js';

export default function Home() {
  const [articulos, setArticulos] = useState({});
  useEffect(() => {
      getArticle().then(data => {
          setArticulos(data)
      })
  }, []);
  return (
    <main className="flex flex-col pb-6 bg-amber-50">
      <Image width={500} height={500} className="w-screen h-2/4" src={hero} alt="Foto Hero" />
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
