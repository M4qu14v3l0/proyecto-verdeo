'use client';
import Actividades from './components/Actividades.js';
import Nosotros from './components/Nosotros.js';
import NosotrosFull from './components/NosotrosFull';
import Directorio from './components/DIrectorio.js';
import DirectorioFull from './components/DirectorioFull.js';
import Ayuda from './components/Ayuda.js';
import AyudaFull from './components/AyudaFull';
import Hero from './components/Hero';

export default function Home() {
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
    </main>
  )
}
