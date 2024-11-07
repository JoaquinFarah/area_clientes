"use client"
import { useState } from 'react';

const InteractiveExample = () => {
  const [meters, setMeters] = useState(0);
  const [level, setLevel] = useState('Neo Iniciado');

  const addMeters = (amount: number) => {
    setMeters((prev) => prev + amount);
    updateLevel(meters + amount);
  };

  
  const updateLevel = (meters: number) => {
    if (meters >= 500) setLevel('Núcleo Fusión');
    else if (meters >= 100) setLevel('Alquimista');
    else if (meters >= 20) setLevel('Maestro Creativo');
    else if (meters >= 5) setLevel('Explorador');
    else setLevel('Neo Iniciado');
  };

  return (
    <div className="region mt-5">
      <button onClick={() => addMeters(5)} className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 pr-3">Agregar 5 metros</button>
      <button onClick={() => addMeters(10)} className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 pr-3">Agregar 10 metros</button>
      <button onClick={() => addMeters(20)} className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 pr-3">Agregar 20 metros</button>
      <div className="mt-4">
        <p>Metros de ejemplo cargados: {meters}</p>
        <p>Nivel de ejemplo: {level}</p>
      </div>
    </div>
  );
};

export default InteractiveExample;
