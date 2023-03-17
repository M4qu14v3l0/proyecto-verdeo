'use client';
import {useEffect, useState} from 'react';
import { getArticle } from './api/api';

export default function Home() {
  const [articulos, setArticulos] = useState({});
  useEffect(() => {
      getArticle().then(data => {
          setArticulos(data)
      })
  }, []);
  return (
    <main className="flex flex-col">
      <h1 className="text-center">Hola mundo</h1>
      {articulos.length >= 1 ? 
        <ul className="flex gap-7 mb-2 mx-auto">                        
          {articulos.map((articulo) => (
              <div key={articulo.titulo}>
                  <h4>{articulo.titulo}</h4>
                  <p>{articulo.cuerpo}</p>
                  <p>{articulo.img}</p>
              </div>
          ))}
      </ul>
      : ""}
    </main>
  )
}
