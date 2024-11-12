"use client"
import { useState } from 'react';
import Image from 'next/image';

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
        <div className="mt-3"><span className="spaceship">🚀</span></div>
      </div> 
      <p className="text-neon mt-4">Nuestro sistema de premios se basa en la cantidad de metros cargados por el cliente durante los últimos 30 días. Al avanzar el tiempo, los metros cargados anteriormente pueden vencer, afectando el nivel de premio del cliente. Mantén tus cargas de metros constantes para mantener o mejorar tu nivel de premio.</p>
      <div className="text-neon">Ejemplo de cómo se acumulan los metros:
        <ul>
          <li>Si cargas 5 metros hoy, tu nivel será Neo Iniciado.</li>
          <li>Si cargas 10 metros más mañana, tendrás un total de 15 metros y alcanzarás el nivel Explorador.</li>
          <li>Si cargas 20 metros más en una semana, tendrás un total de 35 metros, y alcanzarás el nivel Maestro Creativo.</li>
          <li>Si no realizas más cargas durante 30 días, los metros vencerán y tu nivel bajará de acuerdo con la cantidad de metros restantes.</li>
        </ul>
        <div className="flex flex-col items-center mt-5">
          <Image src="/placeholder500x300.png" alt="Ejemplo de Acumulación de Metros" width={500} height={300}/>
        </div>
      </div>

      <div>
      
      </div>     
    </div>
   
  );
};

export default InteractiveExample;
