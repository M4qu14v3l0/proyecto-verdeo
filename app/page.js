'use client';
import Actividades from './components/Actividades';
import Nosotros from './components/Nosotros';
import NosotrosFull from './components/NosotrosFull';
import Directorio from './components/Directorio';
import DirectorioFull from './components/DirectorioFull';
import Ayuda from './components/Ayuda';
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
    // comment
  )
}
