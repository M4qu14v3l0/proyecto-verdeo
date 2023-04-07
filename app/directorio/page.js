'use client';
import { useState, useEffect } from 'react';
import { getArticle } from '../api/api.js';
import Image from 'next/image.js';
import Link from 'next/link.js';
import face from '../assets/img/facebook.png';
import inst from '../assets/img/instagram.png';
import web from '../assets/img/web.svg';
import agricultura from '../assets/img//agricultura.svg';
import moda from '../assets/img//moda.svg';
import personales from '../assets/img//personal.svg';
import social from '../assets/img//social.svg';
import otro from '../assets/img//otro.svg';
import alimentacion from '../assets/img//alimentacion.svg';

export default function Page() {
  const [empresas, setEmpresas] = useState([]);
  useEffect(() => {
    getArticle().then(data => {
        setEmpresas(data)
    })
  }, []);
  const modas =  empresas.filter(empresa => (empresa.rubro === "Moda"));
  const alimentos =  empresas.filter(empresa => (empresa.rubro === "Alimentacion"));
  const sociales =  empresas.filter(empresa => (empresa.rubro === "Social"));
  const agro =  empresas.filter(empresa => (empresa.rubro === "Agricultura"));
  const personal =  empresas.filter(empresa => (empresa.rubro === "Personal"));
  const otros =  empresas.filter(empresa => (empresa.rubro === "Otros"));
  return (
    <div className='flex flex-col w-full bg-[#217948] h-auto'>
      {empresas.length >= 1 ? <h2 className='text-bold text-5xl text-center mt-10 mb-6 px-4 text-blanco'>Directorio ecosostenible</h2> : ""}
      {modas.length >= 1 ? 
        <div id='moda' className='flex flex-col'>
          <Image width={100} height={200} className='h-16 w-16 mx-auto mt-4' src={moda} alt='Imagen de Moda' />
          <h3 className='text-bold text-3xl text-center mt-2 mb-6 text-blanco'>Moda y accesorios</h3>  
          <div className="flex justify-center gap-4 mb-2 flex-wrap bg-[#217948] px-2 pb-10">                  
            {modas.map((empresa) => (
              <div key={empresa.titulo} className="flex flex-col rounded-xl shadow-lg bg-amber-50 w-64 h-64 mx-2 my-2">
                <Image width={100} height={100} className="rounded-xl w-10 h-10 mx-auto mt-3" src={empresa.img} alt={empresa.titulo}/>
                <div className="flex flex-col mx-auto px-3 py-4">
                  <p className="font-bold text-center text-sm mb-1">{empresa.titulo}</p>
                  <p className="text-center text-sm">{empresa.descripcion}</p>
                </div>
                <div className="flex justify-center gap-6 mt-auto mb-4">
                  {empresa.facebook?<Link href={empresa.facebook} target='_blank'><Image width={200} height={200} className='h-6 w-6 lg:w-4 lg:h-4' src={face} alt='Logo de Facebook' /></Link>:""}
                  {empresa.instagram?<Link href={empresa.instagram} target='_blank'><Image width={200} height={200} className='h-6 w-6 lg:w-4 lg:h-4' src={inst} alt='Logo de Instagram' /></Link>:""}
                  {empresa.web?<Link href={empresa.web} target='_blank'><Image width={200} height={200} className='h-6 w-6 lg:w-4 lg:h-4' src={web} alt='Logo de Web width={100} height={100}' /></Link>:""}
                </div>
              </div>
            ))}
          </div>
        </div>
      : ""}
      {alimentos.length >= 1 ? 
        <div id='alimentos' className='flex flex-col bg-amber-50'>
          <Image width={100} height={200} className='h-16 w-16 mx-auto mt-4' src={alimentacion} alt='Imagen de Alimentacion' />
          <h3 className='text-bold text-3xl text-center my-6'>Alimentos y Nutricion</h3>  
          <div className="flex justify-center gap-4 mb-2 flex-wrap px-2 pb-10">                  
            {alimentos.map((empresa) => (
              <div key={empresa.titulo} className="flex flex-col rounded-xl shadow-lg bg-amber-50 w-64 h-64 mx-2 my-2">
                <Image width={100} height={100} className="rounded-xl w-10 h-10 mx-auto mt-3" src={empresa.img} alt={empresa.titulo}/>
                <div className="flex flex-col mx-auto px-3 py-4">
                  <p className="font-bold text-center text-sm mb-1">{empresa.titulo}</p>
                  <p className="text-center text-sm">{empresa.descripcion}</p>
                </div>
                <div className="flex justify-center gap-6 mt-auto pb-4">
                  {empresa.facebook?<Link href={empresa.facebook} target='_blank'><Image width={100} height={100} className='h-6 w-6 lg:w-4 lg:h-4' src={face} alt='Logo de Facebook' /></Link>:""}
                  {empresa.instagram?<Link href={empresa.instagram} target='_blank'><Image width={100} height={100} className='h-6 w-6 lg:w-4 lg:h-4' src={inst} alt='Logo de Instagram' /></Link>:""}
                  {empresa.web?<Link href={empresa.web} target='_blank'><Image width={100} height={100} className='h-6 w-6 lg:w-4 lg:h-4' src={web} alt='Logo de Web width={100} height={100}' /></Link>:""}
                </div>
              </div>
            ))}
          </div>
        </div>
      : ""}
      {personal.length >= 1 ? 
        <div id='personal' className='flex flex-col bg-[#75C495]'>
          <Image width={100} height={200} className='h-16 w-16 mx-auto mt-4' src={personales} alt='Imagen de Cuidado Personal' />
          <h3 className='text-bold text-3xl text-center mt-2 mb-6'>Cosmética y Cuidado Personal</h3> 
          <div className="flex justify-center gap-4 mb-2 flex-wrap px-2 pb-10">                  
            {personal.map((empresa) => (
              <div key={empresa.titulo} className="flex flex-col rounded-xl shadow-lg bg-amber-50 w-64 h-64 mx-2 my-2">
                <Image width={100} height={100} className="rounded-xl w-10 h-10 mx-auto mt-3" src={empresa.img} alt={empresa.titulo}/>
                <div className="flex flex-col mx-auto px-3 py-4">
                  <p className="font-bold text-center text-sm mb-1">{empresa.titulo}</p>
                  <p className="text-center text-sm">{empresa.descripcion}</p>
                </div>
                <div className="flex justify-center gap-6 mt-auto mb-4">
                  {empresa.facebook?<Link href={empresa.facebook} target='_blank'><Image width={100} height={100} className='h-6 w-6 lg:w-4 lg:h-4' src={face} alt='Logo de Facebook' /></Link>:""}
                  {empresa.instagram?<Link href={empresa.instagram} target='_blank'><Image width={100} height={100} className='h-6 w-6 lg:w-4 lg:h-4' src={inst} alt='Logo de Instagram' /></Link>:""}
                  {empresa.web?<Link href={empresa.web} target='_blank'><Image width={100} height={100} className='h-6 w-6 lg:w-4 lg:h-4' src={web} alt='Logo de Web width={100} height={100}' /></Link>:""}
                </div>
              </div>
            ))}
          </div>
        </div>
      : ""}
      {agro.length >= 1 ? 
        <div id='hogar' className='flex flex-col bg-amber-50'>
          <Image width={100} height={200} className='h-16 w-16 mx-auto mt-4' src={agricultura} alt='Imagen de Agricultura' />
          <h3 className='text-bold text-3xl text-center mt-2 mb-6'>Agricultura</h3>  
          <div className="flex justify-center gap-4 mb-2 flex-wrap px-2 pb-10">                  
            {agro.map((empresa) => (
              <div key={empresa.titulo} className="flex flex-col rounded-xl shadow-lg bg-amber-50 w-64 h-64 mx-2 my-2">
                <Image width={100} height={100} className="rounded-xl w-10 h-10 mx-auto mt-3" src={empresa.img} alt={empresa.titulo}/>
                <div className="flex flex-col mx-auto px-3 py-4">
                  <p className="font-bold text-center text-sm mb-1">{empresa.titulo}</p>
                  <p className="text-center text-sm">{empresa.descripcion}</p>
                </div>
                <div className="flex justify-center gap-6 mt-auto mb-4">
                  {empresa.facebook?<Link href={empresa.facebook} target='_blank'><Image width={100} height={100} className='h-6 w-6 lg:w-4 lg:h-4' src={face} alt='Logo de Facebook' /></Link>:""}
                  {empresa.instagram?<Link href={empresa.instagram} target='_blank'><Image width={100} height={100} className='h-6 w-6 lg:w-4 lg:h-4' src={inst} alt='Logo de Instagram' /></Link>:""}
                  {empresa.web?<Link href={empresa.web} target='_blank'><Image width={100} height={100} className='h-6 w-6 lg:w-4 lg:h-4' src={web} alt='Logo de Web width={100} height={100}' /></Link>:""}
                </div>
              </div>
            ))}
          </div>
        </div>
      : ""}
      {sociales.length >= 1 ? 
        <div id='sociales' className='flex flex-col bg-[#B0CBBB]'>
          <Image width={100} height={200} className='h-16 w-16 mx-auto mt-4' src={social} alt='Imagen de Proyectos Sociales' />
          <h3 className='text-bold text-3xl text-center mt-2 mb-6'>Proyectos sociales</h3>  
          <div className="flex justify-center gap-4 mb-2 flex-wrap px-2 pb-10">                  
            {sociales.map((empresa) => (
              <div key={empresa.titulo} className="flex flex-col rounded-xl shadow-lg bg-amber-50 w-64 h-64 mx-2 my-2">
                <Image width={100} height={100} className="rounded-xl w-10 h-10 mx-auto mt-3" src={empresa.img} alt={empresa.titulo}/>
                <div className="flex flex-col mx-auto px-3 py-4">
                  <p className="font-bold text-center text-sm mb-1">{empresa.titulo}</p>
                  <p className="text-center text-sm">{empresa.descripcion}</p>
                </div>
                <div className="flex justify-center gap-6 mt-auto mb-4">
                  {empresa.facebook?<Link href={empresa.facebook} target='_blank'><Image width={100} height={100} className='h-6 w-6 lg:w-4 lg:h-4' src={face} alt='Logo de Facebook' /></Link>:""}
                  {empresa.instagram?<Link href={empresa.instagram} target='_blank'><Image width={100} height={100} className='h-6 w-6 lg:w-4 lg:h-4' src={inst} alt='Logo de Instagram' /></Link>:""}
                  {empresa.web?<Link href={empresa.web} target='_blank'><Image width={100} height={100} className='h-6 w-6 lg:w-4 lg:h-4' src={web} alt='Logo de Web width={100} height={100}' /></Link>:""}
                </div>
              </div>
            ))}
          </div>
        </div>
      : ""}
      {otros.length >= 1 ? 
        <div id='personal' className='flex flex-col bg-amber-50'>
          <Image width={100} height={200} className='h-16 w-16 mx-auto mt-4' src={otro} alt='Imagen de Otros Servicios' />
          <h3 className='text-bold text-3xl text-center mt-2 mb-6'>Otros Servicios</h3>   
          <div className="flex justify-center gap-4 mb-2 flex-wrap px-2 pb-10">                  
            {otros.map((empresa) => (
              <div key={empresa.titulo} className="flex flex-col rounded-xl shadow-lg bg-amber-50 w-64 h-64 mx-2 my-2">
                <Image width={100} height={100} className="rounded-xl w-10 h-10 mx-auto mt-3" src={empresa.img} alt={empresa.titulo}/>
                <div className="flex flex-col mx-auto px-3 py-4">
                  <p className="font-bold text-center text-sm mb-1">{empresa.titulo}</p>
                  <p className="text-center text-sm">{empresa.descripcion}</p>
                </div>
                <div className="flex justify-center gap-6 mt-auto mb-4">
                  {empresa.facebook?<Link href={empresa.facebook} target='_blank'><Image width={100} height={100} className='h-6 w-6 lg:w-4 lg:h-4' src={face} alt='Logo de Facebook' /></Link>:""}
                  {empresa.instagram?<Link href={empresa.instagram} target='_blank'><Image width={100} height={100} className='h-6 w-6 lg:w-4 lg:h-4' src={inst} alt='Logo de Instagram' /></Link>:""}
                  {empresa.web?<Link href={empresa.web} target='_blank'><Image width={100} height={100} className='h-6 w-6 lg:w-4 lg:h-4' src={web} alt='Logo de Web width={100} height={100}' /></Link>:""}
                </div>
              </div>
            ))}
          </div>
        </div>
      : ""}
    </div>
  )
}

