import React from 'react';
import { PiListStarLight } from "react-icons/pi";
import { useTheme } from '@/context/ThemeContext';


export const WorkData = () => {
  const { theme } = useTheme();

  return (
    <div className={`mb-10 p-1 rounded-lg ${theme === 'dark' ? 'bg-gradient-to-br from-teal-500 to-green-500' : 'bg-gradient-to-br from-pink-500 to-yellow-500'}`}>
      <p className="ml-2 p-1 {`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}">2- Complete los datos del trabajo</p>
        <div className={`${theme === 'dark' ? 'bg-[#1c1b29]' : 'bg-white'} p-4 rounded-lg`}>
          <div className="flex items-center mb-4">
            <PiListStarLight className="w-5 h-5" />
            <i className={`bi bi-tags-fill text-lg mr-2 ${theme === 'dark' ? 'text-teal-400' : 'text-pink-500'}`} />
            <h5 className="{`text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}">Datos del trabajo:</h5>
          </div>
          <div className= {`h-0.5 w-full mb-8 ${theme === 'dark' ? 'bg-white' : 'bg-black'}`}></div>
          <div className="flex flex-row justify-between">
            <button className={`mb-8 p-1 rounded-lg ${theme === 'dark' ? 'bg-gradient-to-br from-teal-500 to-green-500' : 'bg-gradient-to-br from-pink-500 to-yellow-500'}`}>INPUT NOMBRE DEL TRABAJO</button>
            <button className={`mb-8 p-1 rounded-lg ${theme === 'dark' ? 'bg-gradient-to-br from-teal-500 to-green-500' : 'bg-gradient-to-br from-pink-500 to-yellow-500'}`}>DROPDOWN LUGAR DE RETIRO</button>            
          </div>
        </div>
      </div>

  )
}
