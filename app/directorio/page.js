'use client';
import { useState, useEffect } from 'react';
import { getArticle } from '../api/api.js';

export default function Page() {
  const [articulos, setArticulos] = useState([]);
  useEffect(() => {
    getArticle().then(data => {
        setArticulos(data)
    })
  }, []);
  return (
    <div>
      <p className='text-center'>Directorio Ecosostenible</p>
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
    </div>
  )
}

