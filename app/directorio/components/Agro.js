import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import face from '../../assets/img/facebook2.svg';
import inst from '../../assets/img/instagram2.svg';
import web from '../../assets/img/web2.svg';
import agricultura from '../../assets/img/agricultura.svg';
import {useState, useEffect} from 'react';
import {getArticle} from '../../api/api.js';


const Agro = () => {
    const [empresas, setEmpresas] = useState([]);
    useEffect(() => {
        getArticle().then(data => {
            setEmpresas(data)
        })
    }, []);
    const [ver, setVer] = useState(5);
    const handleClick = () => {
        ver === 5?
        setVer(agro.length)
        :
        setVer(5);
    }
    const agro = empresas.filter(empresa => (empresa.rubro === "agricultura")).sort((a, b) => a.titulo.localeCompare(b.titulo));
    return (
        <div id='agro'>
            {agro.length >= 1 ? 
                <div className='flex flex-col bg-amber-50'>
                    <Image width={100} height={200} className='h-16 w-16 mx-auto mt-4' src={agricultura} alt='Imagen de Agricultura' />
                    <h3 className='text-3xl lg:text-4xl font-bold text-center mt-2 mb-6 font-titulos'>Agricultura</h3> 
                    <div className="flex justify-center gap-4 mb-2 flex-wrap px-2 pb-10">
                        <div className="flex justify-center gap-4 flex-wrap">
                            {agro.slice(0, ver).map((empresa) => (
                                <div key={empresa.titulo} className="flex flex-col rounded-xl shadow-lg bg-amber-50 w-64 h-64 mx-2 my-2">
                                    <Image width={100} height={100} className="rounded-xl w-10 h-10 mx-auto mt-3" src={empresa.img} alt={empresa.titulo}/>
                                    <div className="flex flex-col mx-auto px-3 py-2 items-center">
                                        <p className="font-botones font-bold text-center text-sm mb-2">{empresa.titulo}</p>
                                        <p className="font-botones text-center text-xs mt-4">{empresa.descripcion}</p>
                                    </div>
                                    <div className="flex justify-center items-center gap-x-4 mt-auto mb-4">
                                        {empresa.facebook?<Link href={empresa.facebook} target='_blank'><Image width={200} height={200} className='h-12 w-12' src={face} alt='Logo de Facebook' /></Link>:""}
                                        {empresa.instagram?<Link href={empresa.instagram} target='_blank'><Image width={200} height={200} className='h-12 w-12' src={inst} alt='Logo de Instagram' /></Link>:""}
                                        {empresa.web?<Link href={empresa.web} target='_blank'><Image width={200} height={200} className='h-6 w-6 mx-2' src={web} alt='Logo de Web width={100} height={100}' /></Link>:""}
                                    </div>
                                </div>
                            ))}
                        </div>              
                    </div>
                    {ver === 5 ? <button className='flex mx-auto mb-10 w-[232px] h-[40px] lg:w-[328px] lg:h-[50px] rounded-xl bg-verde lg:hover:bg-verde2 text-blanco' onClick={handleClick}><p className='font-botones font-bold text-blanco text-center m-auto text-sm'>Ver más</p></button> : <a href="/directorio#agro" className='flex mx-auto mb-10 w-[232px] h-[40px] lg:w-[328px] lg:h-[50px] rounded-xl bg-verde lg:hover:bg-verde2 text-blanco' onClick={handleClick}><p className='font-botones font-bold text-blanco text-center m-auto text-sm'>Ver menos</p></a>}
                </div>
            : ""}
        </div>
    )
}

export default Agro
