import React from 'react';
import { IoMdOptions } from "react-icons/io";
import { useTheme } from '@/context/ThemeContext';


export const WorkSelect = () => {
  const { theme } = useTheme();

  return (
    <div className={`mb-10 p-1 rounded-lg ${theme === 'dark' ? 'bg-gradient-to-br from-teal-500 to-green-500' : 'bg-gradient-to-br from-pink-500 to-yellow-500'}`}>
      <p className="ml-2 p-1 {`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}">1- Seleccione el tipo de trabajo</p>
        <div className={`${theme === 'dark' ? 'bg-[#1c1b29]' : 'bg-white'} p-4 rounded-lg`}>
          <div className="flex items-center mb-4">
            <IoMdOptions className="w-5 h-5" />
            <i className={`bi bi-tags-fill text-lg mr-2 ${theme === 'dark' ? 'text-teal-400' : 'text-pink-500'}`} />
            <h5 className="{`text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}">Tipo de trabajo:</h5>
          </div>
          <div className= {`h-0.5 w-full mb-8 ${theme === 'dark' ? 'bg-white' : 'bg-black'}`}></div>
          <div className="flex flex-row justify-between mx-12">
            <button className={`mb-1 px-20 rounded-md ${theme === 'dark' ? 'bg-gradient-to-br from-teal-500 to-green-500' : 'bg-gradient-to-br from-pink-500 to-yellow-500'}`}>DTF</button>
            <button className={`mb-1 px-16 rounded-md ${theme === 'dark' ? 'bg-gradient-to-br from-teal-500 to-green-500' : 'bg-gradient-to-br from-pink-500 to-yellow-500'}`}>Sublimación x metro lineal</button>
            <button className={`mb-1 px-20 rounded-md ${theme === 'dark' ? 'bg-gradient-to-br from-teal-500 to-green-500' : 'bg-gradient-to-br from-pink-500 to-yellow-500'}`}>Impresión Papel</button>
            
          </div>
          <div className="flex flex-row justify-between mx-32">
            <p>Valor 1</p>
            <p>Valor 2</p>
            <p>Valor 3</p>
          </div>
        </div>
      </div>
  )
}
