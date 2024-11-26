"use client"
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { WorkSelect } from './workSelect';
import { WorkData } from './workData';
import { WorkImage } from './workImage';



export default function RequestPage() {
  const { theme } = useTheme();

  return (
    <div className="p-4 h-auto w-full">
      <h1 className={`text-2xl font-bold mb-6 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        Cargar Nuevo Pedido
      </h1>
      
      <WorkSelect/>
      
      <div className= {`h-0.5 w-full mb-10 ${theme === 'dark' ? 'bg-fuchsia-300' : 'bg-black' }`}> </div>

      <WorkData/>     

      <div className= {`h-0.5 w-full mb-8 ${theme === 'dark' ? 'bg-fuchsia-300' : 'bg-black'}`}></div>

      <WorkImage/>

    </div>
  );
};
