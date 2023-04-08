'use client';
import Actividades from './components/Actividades';
import Nosotros from './components/Nosotros';
import NosotrosFull from './components/NosotrosFull';

import DirectorioFull from './components/DirectorioFull';
import Ayuda from './components/Ayuda';
import AyudaFull from './components/AyudaFull';
import Hero from './components/Hero';
import Directorio from './components/Directorio';

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
    // comment
  )
}
