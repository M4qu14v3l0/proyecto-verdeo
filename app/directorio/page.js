'use client';
import { useState, useEffect } from 'react';
import { getArticle } from '../api/api.js';
import Image from 'next/image.js';
import Link from 'next/link.js';
import face from '../assets/img/facebook.png';
import inst from '../assets/img/instagram.png';
import web from '../assets/img/web.svg';

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
  const hogar =  empresas.filter(empresa => (empresa.rubro === "Hogar"));
  const personal =  empresas.filter(empresa => (empresa.rubro === "Personal"));
  return (
    <div className='flex flex-col w-full bg-verde h-auto'>
      {empresas.length >= 1 ? <h2 className='text-bold text-5xl text-center my-10 text-blanco'>Directorio ecosostenible</h2> : ""}
      {modas.length >= 1 ? 
        <div id='moda' className='flex flex-col'>
          <h3 className='text-bold text-3xl text-center mt-6 mb-10 text-blanco'>Moda y accesorios</h3>  
          <div className="flex justify-center gap-4 mb-2 flex-wrap bg-verde pb-10">                  
            {modas.map((empresa) => (
              <div key={empresa.titulo} className="flex flex-col rounded-xl shadow-lg bg-amber-50 w-64 h-64 mx-8 my-6">
                <Image width={100} height={100} className="rounded-xl w-10 h-10 mx-auto mt-3" src={empresa.img} alt="Sunset in the mountains"/>
                <div className="flex flex-col mx-auto px-3 py-4">
                  <p className="font-bold text-center text-sm mb-1">{empresa.titulo}</p>
                  <p className="text-center text-sm">{empresa.descripcion}</p>
                </div>
                <div className="flex justify-center gap-6 mt-auto mb-4">
                  {empresa.facebook?<Link href={empresa.facebook} target='_blank'><Image width={100} height={100} className='w-4 h-4' src={face} alt='Logo de Facebook' /></Link>:""}
                  {empresa.instagram?<Link href={empresa.instagram} target='_blank'><Image width={100} height={100} className='w-4 h-4' src={inst} alt='Logo de Instagram' /></Link>:""}
                  {empresa.web?<Link href={empresa.web} target='_blank'><Image width={100} height={100} className='w-4 h-4' src={web} alt='Logo de Web width={100} height={100}' /></Link>:""}
                </div>
              </div>
            ))}
          </div>
        </div>
      : ""}
      {alimentos.length >= 1 ? 
        <div id='alimentos' className='flex flex-col bg-amber-50'>
          <h3 className='text-bold text-3xl text-center mt-6 mb-10'>Alimentación y nutrición</h3>  
          <div className="flex justify-center gap-4 mb-2 flex-wrap pb-10">                  
            {alimentos.map((empresa) => (
              <div key={empresa.titulo} className="flex flex-col rounded-xl shadow-lg bg-amber-50 w-64 h-64 mx-8 my-6">
                <Image width={100} height={100} className="rounded-xl w-10 h-10 mx-auto mt-3" src={empresa.img} alt="Sunset in the mountains"/>
                <div className="flex flex-col mx-auto px-3 py-4">
                  <p className="font-bold text-center text-sm mb-1">{empresa.titulo}</p>
                  <p className="text-center text-sm">{empresa.descripcion}</p>
                </div>
                <div className="flex justify-center gap-6 mt-auto mb-4">
                  {empresa.facebook?<Link href={empresa.facebook} target='_blank'><Image width={100} height={100} className='w-4 h-4' src={face} alt='Logo de Facebook' /></Link>:""}
                  {empresa.instagram?<Link href={empresa.instagram} target='_blank'><Image width={100} height={100} className='w-4 h-4' src={inst} alt='Logo de Instagram' /></Link>:""}
                  {empresa.web?<Link href={empresa.web} target='_blank'><Image width={100} height={100} className='w-4 h-4' src={web} alt='Logo de Web width={100} height={100}' /></Link>:""}
                </div>
              </div>
            ))}
          </div>
        </div>
      : ""}
      {sociales.length >= 1 ? 
        <div id='sociales' className='flex flex-col bg-verde2'>
          <h3 className='text-bold text-3xl text-center text-blanco mt-6 mb-10'>Proyectos Sociales</h3>  
          <div className="flex justify-center gap-4 mb-2 flex-wrap pb-10">                  
            {sociales.map((empresa) => (
              <div key={empresa.titulo} className="flex flex-col rounded-xl shadow-lg bg-amber-50 w-64 h-64 mx-8 my-6">
                <Image width={100} height={100} className="rounded-xl w-10 h-10 mx-auto mt-3" src={empresa.img} alt="Sunset in the mountains"/>
                <div className="flex flex-col mx-auto px-3 py-4">
                  <p className="font-bold text-center text-sm mb-1">{empresa.titulo}</p>
                  <p className="text-center text-sm">{empresa.descripcion}</p>
                </div>
                <div className="flex justify-center gap-6 mt-auto mb-4">
                  {empresa.facebook?<Link href={empresa.facebook} target='_blank'><Image width={100} height={100} className='w-4 h-4' src={face} alt='Logo de Facebook' /></Link>:""}
                  {empresa.instagram?<Link href={empresa.instagram} target='_blank'><Image width={100} height={100} className='w-4 h-4' src={inst} alt='Logo de Instagram' /></Link>:""}
                  {empresa.web?<Link href={empresa.web} target='_blank'><Image width={100} height={100} className='w-4 h-4' src={web} alt='Logo de Web width={100} height={100}' /></Link>:""}
                </div>
              </div>
            ))}
          </div>
        </div>
      : ""}
      {hogar.length >= 1 ? 
        <div id='hogar' className='flex flex-col bg-amber-50'>
          <h3 className='text-bold text-3xl text-center mt-6 mb-10'>Básicos para el hogar</h3>  
          <div className="flex justify-center gap-4 mb-2 flex-wrap pb-10">                  
            {hogar.map((empresa) => (
              <div key={empresa.titulo} className="flex flex-col rounded-xl shadow-lg bg-amber-50 w-64 h-64 mx-8 my-6">
                <Image width={100} height={100} className="rounded-xl w-10 h-10 mx-auto mt-3" src={empresa.img} alt="Sunset in the mountains"/>
                <div className="flex flex-col mx-auto px-3 py-4">
                  <p className="font-bold text-center text-sm mb-1">{empresa.titulo}</p>
                  <p className="text-center text-sm">{empresa.descripcion}</p>
                </div>
                <div className="flex justify-center gap-6 mt-auto mb-4">
                  {empresa.facebook?<Link href={empresa.facebook} target='_blank'><Image width={100} height={100} className='w-4 h-4' src={face} alt='Logo de Facebook' /></Link>:""}
                  {empresa.instagram?<Link href={empresa.instagram} target='_blank'><Image width={100} height={100} className='w-4 h-4' src={inst} alt='Logo de Instagram' /></Link>:""}
                  {empresa.web?<Link href={empresa.web} target='_blank'><Image width={100} height={100} className='w-4 h-4' src={web} alt='Logo de Web width={100} height={100}' /></Link>:""}
                </div>
              </div>
            ))}
          </div>
        </div>
      : ""}
      {personal.length >= 1 ? 
        <div id='personal' className='flex flex-col bg-gray-400'>
          <h3 className='text-bold text-3xl text-center mt-6 mb-10'>Cuidado personal y cosmético</h3>  
          <div className="flex justify-center gap-4 mb-2 flex-wrap pb-10">                  
            {personal.map((empresa) => (
              <div key={empresa.titulo} className="flex flex-col rounded-xl shadow-lg bg-amber-50 w-64 h-64 mx-8 my-6">
                <Image width={100} height={100} className="rounded-xl w-10 h-10 mx-auto mt-3" src={empresa.img} alt="Sunset in the mountains"/>
                <div className="flex flex-col mx-auto px-3 py-4">
                  <p className="font-bold text-center text-sm mb-1">{empresa.titulo}</p>
                  <p className="text-center text-sm">{empresa.descripcion}</p>
                </div>
                <div className="flex justify-center gap-6 mt-auto mb-4">
                  {empresa.facebook?<Link href={empresa.facebook} target='_blank'><Image width={100} height={100} className='w-4 h-4' src={face} alt='Logo de Facebook' /></Link>:""}
                  {empresa.instagram?<Link href={empresa.instagram} target='_blank'><Image width={100} height={100} className='w-4 h-4' src={inst} alt='Logo de Instagram' /></Link>:""}
                  {empresa.web?<Link href={empresa.web} target='_blank'><Image width={100} height={100} className='w-4 h-4' src={web} alt='Logo de Web width={100} height={100}' /></Link>:""}
                </div>
              </div>
            ))}
          </div>
        </div>
      : ""}
    </div>
  )
}

