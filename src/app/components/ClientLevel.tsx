"use client";
import Image from 'next/image';
import { useState } from 'react';

const ClientLevel = () => {
  const [meters, setMeters] = useState(0);
  const [level, setLevel] = useState('Neo Iniciado');
  const [imageSrc, setImageSrc] = useState('/nivel-1.png');

  const addMeters = (amount: number) => {
    setMeters((prev) => prev + amount);
    updateLevel(meters + amount);
    updateImage(meters + amount);
  };

  const updateLevel = (meters: number) => {
    if (meters >= 500) setLevel('Núcleo Fusión');
    else if (meters >= 100) setLevel('Alquimista');
    else if (meters >= 20) setLevel('Maestro Creativo');
    else if (meters >= 5) setLevel('Explorador');    
    else setLevel('Neo Iniciado');
  };

  const updateImage = (meter: number) => {
    if (meter >= 500) setImageSrc('/nivel-5.png');
    else if (meter >= 100) setImageSrc('/nivel-4.png');
    else if (meter >= 20) setImageSrc('/nivel-3.png');
    else if (meter >= 5) setImageSrc('/nivel-2.png');
    else setImageSrc('/nivel-1.png');
  };

  return (
    <div className="flex flex-col items-center mb-10">
      <Image
        src={imageSrc} 
        alt="Nivel del cliente"
        width={100}
        height={100}
        className="rounded-lg"
      />
      <p className="mt-2 text-lg">Usted es nivel <strong className="text-blue-500">{level}</strong></p>
      <a href="#" className="text-blue-500 underline mt-1">Ver Niveles</a>
    
      <div className="region mt-5">
        <button onClick={() => addMeters(5)} className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 pr-3">Agregar 5 metros</button>
        <button onClick={() => addMeters(10)} className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 pr-3">Agregar 10 metros</button>
        <button onClick={() => addMeters(20)} className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 pr-3">Agregar 20 metros</button>
        <button onClick={() => {setMeters(0); setImageSrc('/nivel-1.png')}} className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 pr-3">REINICIAR</button>
        <div className="mt-4">
          <p>Metros cargados: {meters}</p>
          <p>Nivel: {level}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientLevel;
