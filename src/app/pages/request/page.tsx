"use client"
import React from 'react';
import { useTheme } from '@/context/ThemeContext';


export default function requestPage() {
  const { theme } = useTheme();

  return (
    <div className="p-4 h-screen w-full">
      <h1 className={`text-2xl font-bold mb-6 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        Cargar Pedidos
      </h1>

      <div className={`mb-8 p-1 rounded-lg ${theme === 'dark' ? 'bg-gradient-to-br from-teal-500 to-green-500' : 'bg-gradient-to-br from-pink-500 to-yellow-500'}`}>
        <div className={`${theme === 'dark' ? 'bg-[#1c1b29]' : 'bg-white'} p-4 rounded-lg`}>
          <div className="flex items-center mb-4">
            <i className={`bi bi-tags-fill text-lg mr-2 ${theme === 'dark' ? 'text-teal-400' : 'text-pink-500'}`} />
            <h5 className="ml-2 {`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}">1- Seleccione el tipo de trabajo</h5>
          </div>
          <div className="flex flex-row justify-between">
            <button className={`mb-8 p-1 rounded-lg ${theme === 'dark' ? 'bg-gradient-to-br from-teal-500 to-green-500' : 'bg-gradient-to-br from-pink-500 to-yellow-500'}`}>tela</button>
            <button className={`mb-8 p-1 rounded-lg ${theme === 'dark' ? 'bg-gradient-to-br from-teal-500 to-green-500' : 'bg-gradient-to-br from-pink-500 to-yellow-500'}`}>tela</button>
            <button className={`mb-8 p-1 rounded-lg ${theme === 'dark' ? 'bg-gradient-to-br from-teal-500 to-green-500' : 'bg-gradient-to-br from-pink-500 to-yellow-500'}`}>tela</button>


          </div>
          
        </div>
      </div>
    </div>
  );
};
