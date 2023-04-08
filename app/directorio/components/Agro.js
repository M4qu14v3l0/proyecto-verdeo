import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import face from '../../assets/img/facebook.png';
import inst from '../../assets/img/instagram.png';
import web from '../../assets/img/web.svg';
import agricultura from '../../assets/img/agricultura.svg';
import {useState, useEffect} from 'react';
import {getArticle} from '../../api/api.js';


const Agro = () => {
    const [empresas, setEmpresas] = useState([]);
    const [ver, setVer] = useState(false);
    useEffect(() => {
        setVer(false);
    }, []);
    const handleClick = () => {
        setVer(prev => !prev);
    }
    useEffect(() => {
        getArticle().then(data => {
            setEmpresas(data)
        })
    }, []);
    const agro = empresas.filter(empresa => (empresa.rubro === "agricultura"));
    const agroRed = agro.slice(0, 5)
    return (
        <div id='agro'>
            {agro.length >= 1 ? 
                <div className='flex flex-col bg-amber-50'>
                    <Image width={100} height={200} className='h-16 w-16 mx-auto mt-4' src={agricultura} alt='Imagen de Agricultura' />
                    <h3 className='text-bold text-3xl text-center mt-2 mb-6'>Agricultura</h3> 
                    <div className="flex justify-center gap-4 mb-2 flex-wrap px-2 pb-10">
                        {ver === false ? 
                        <div className="flex justify-center gap-4 flex-wrap">
                            {agroRed.map((empresa) => (
                                <div key={empresa.titulo} className="flex flex-col rounded-xl shadow-lg bg-amber-50 w-64 h-64 mx-2 my-2">
                                    <Image width={100} height={100} className="rounded-xl w-10 h-10 mx-auto mt-3" src={empresa.img} alt={empresa.titulo}/>
                                    <div className="flex flex-col mx-auto px-3 py-2 items-center">
                                    <p className="font-bold text-center text-sm mb-2">{empresa.titulo}</p>
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
                        :
                        <div className="flex justify-center gap-4 flex-wrap">
                            {agro.map((empresa) => (
                                <div key={empresa.titulo} className="flex flex-col rounded-xl shadow-lg bg-amber-50 w-64 h-64 mx-2 my-2">
                                    <Image width={100} height={100} className="rounded-xl w-10 h-10 mx-auto mt-3" src={empresa.img} alt={empresa.titulo}/>
                                    <div className="flex flex-col mx-auto px-3 py-2 items-center">
                                    <p className="font-bold text-center text-sm mb-2">{empresa.titulo}</p>
                                    <p className="text-center text-sm">{empresa.descripcion}</p>
                                    </div>
                                    <div className="flex justify-center gap-6 mt-auto mb-4">
                                    {empresa.facebook?<Link href={empresa.facebook} target='_blank'><Image width={200} height={200} className='h-6 w-6 lg:w-4 lg:h-4' src={face} alt='Logo de Facebook' /></Link>:""}
                                    {empresa.instagram?<Link href={empresa.instagram} target='_blank'><Image width={200} height={200} className='h-6 w-6 lg:w-4 lg:h-4' src={inst} alt='Logo de Instagram' /></Link>:""}
                                    {empresa.web?<Link href={empresa.web} target='_blank'><Image width={200} height={200} className='h-6 w-6 lg:w-4 lg:h-4' src={web} alt='Logo de Web width={100} height={100}' /></Link>:""}
                                    </div>
                                </div>
                            ))}
                        </div>}               
                    </div>
                    {ver === false ? <button className='mx-auto mb-10 w-48 h-auto p-2 rounded-xl bg-verde hover:bg-verde2' onClick={handleClick}>Ver mas</button> : <button className='mx-auto mb-10 w-48 h-auto p-2 rounded-xl bg-verde hover:bg-verde2' onClick={handleClick}>Ver menos</button>}
                </div>
            : ""}
        </div>
    )
}

export default Agro
