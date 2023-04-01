'use client';
import { useState, useEffect } from 'react';
import { getArticle } from '../api/api.js';
import Image from 'next/image.js';

export default function Page() {
  const [empresas, setEmpresas] = useState([]);
  useEffect(() => {
    getArticle().then(data => {
        setEmpresas(data)
    })
  }, []);
  return (
    <div>
      <p className='text-center'>Directorio Ecosostenible</p>
      {empresas.length >= 1 ? 
        <ul className="flex gap-7 mb-2 mx-auto">                        
          {empresas.map((empresa) => (
              <div key={empresa.titulo}>
                  <h4>{empresa.titulo}</h4>
                  <Image width={500} height={500} src={empresa.img} alt={empresa.titulo} />
                  <p>{empresa.texto}</p>
                  <p>{empresa.facebook}</p>
                  <p>{empresa.instagram}</p>
                  <p>{empresa.web}</p>
              </div>
          ))}
        </ul>
      : ""}
    </div>
  )
}

