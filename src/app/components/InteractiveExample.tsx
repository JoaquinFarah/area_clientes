"use client"
import { useState } from 'react';

const InteractiveExample = () => {
  const [meters, setMeters] = useState(0);
  const [daysPassed, setDaysPassed] = useState(0);
  const [level, setLevel] = useState('Neo Iniciado');

  const addMeters = (amount: number) => {
    setMeters((prev) => prev + amount);
    updateLevel(meters + amount);
  };

  const advanceTime = () => {
    setDaysPassed((prev) => prev + 1);
    if (daysPassed >= 30) {
      setMeters(0);
      setDaysPassed(0);
      setLevel('Neo Iniciado');
    } else {
      updateLevel(meters);
    }
  };

  const updateLevel = (meters: number) => {
    if (meters >= 500) setLevel('Núcleo Fusión');
    else if (meters >= 100) setLevel('Alquimista');
    else if (meters >= 20) setLevel('Maestro Creativo');
    else if (meters >= 5) setLevel('Explorador');
    else setLevel('Neo Iniciado');
  };

  return (
    <div className="region">
      <button onClick={() => addMeters(5)} className="btn btn-green">Agregar 5 metros</button>
      <button onClick={() => addMeters(10)} className="btn btn-green">Agregar 10 metros</button>
      <button onClick={() => addMeters(20)} className="btn btn-green">Agregar 20 metros</button>
      <button onClick={advanceTime} className="btn btn-violet">Avanzar 1 día</button>
      <div className="mt-4">
        <p>Metros de ejemplo cargados: {meters}</p>
        <p>Nivel de ejemplo: {level}</p>
      </div>
    </div>
  );
};

export default InteractiveExample;
