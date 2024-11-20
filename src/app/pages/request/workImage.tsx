import React from 'react';
import { IoIosImages } from "react-icons/io";
import { useTheme } from '@/context/ThemeContext';


export const WorkImage = () => {
  const { theme } = useTheme();

  return (
    
    <div className={`mb-8 p-1 rounded-lg ${theme === 'dark' ? 'bg-gradient-to-br from-teal-500 to-green-500' : 'bg-gradient-to-br from-pink-500 to-yellow-500'}`}>
    <p className={`ml-2 p-1 text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>3- Seleccione las imágenes para el trabajo</p>
      <div className={`${theme === 'dark' ? 'bg-[#1c1b29]' : 'bg-white'} p-4 rounded-lg`}>
        <div className="flex items-center mb-4">
          <IoIosImages className="w-5 h-5" />
          <i className={`bi bi-tags-fill text-lg mr-2 ${theme === 'dark' ? 'text-teal-400' : 'text-pink-500'}`} />
          <h5 className="{`text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}">Seleccionar imágenes:</h5>
        </div>
        <div className="flex flex-row justify-between">
          <button className={`mb-8 p-1 rounded-lg ${theme === 'dark' ? 'bg-gradient-to-br from-teal-500 to-green-500' : 'bg-gradient-to-br from-pink-500 to-yellow-500'}`}>BOTON SELECCION DE ARCHIVOS</button>
        </div>
      </div>
    </div>
  )
}
