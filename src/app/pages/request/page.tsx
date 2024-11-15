"use client"
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { PiListStarLight } from "react-icons/pi";
import { IoMdOptions } from "react-icons/io";
import { IoIosImages } from "react-icons/io";

export default function requestPage() {
  const { theme } = useTheme();

  return (
    <div className="p-4 h-screen w-full">
      <h1 className={`text-2xl font-bold mb-6 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        Cargar Nuevo Pedido
      </h1>

      <div className={`mb-8 p-1 rounded-lg ${theme === 'dark' ? 'bg-gradient-to-br from-teal-500 to-green-500' : 'bg-gradient-to-br from-pink-500 to-yellow-500'}`}>
      <p className="ml-2 {`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}">1- Seleccione el tipo de trabajo</p>
        <div className={`${theme === 'dark' ? 'bg-[#1c1b29]' : 'bg-white'} p-4 rounded-lg`}>
          <div className="flex items-center mb-4">
            <IoMdOptions className="w-5 h-5" />
            <i className={`bi bi-tags-fill text-lg mr-2 ${theme === 'dark' ? 'text-teal-400' : 'text-pink-500'}`} />
            <h5 className="{`text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}">Tipo de trabajo:</h5>
          </div>
          <div className="flex flex-row justify-between">
            <button className={`mb-8 p-1 rounded-lg ${theme === 'dark' ? 'bg-gradient-to-br from-teal-500 to-green-500' : 'bg-gradient-to-br from-pink-500 to-yellow-500'}`}>DTF</button>
            <button className={`mb-8 p-1 rounded-lg ${theme === 'dark' ? 'bg-gradient-to-br from-teal-500 to-green-500' : 'bg-gradient-to-br from-pink-500 to-yellow-500'}`}>Sublimación x metro lineal</button>
            <button className={`mb-8 p-1 rounded-lg ${theme === 'dark' ? 'bg-gradient-to-br from-teal-500 to-green-500' : 'bg-gradient-to-br from-pink-500 to-yellow-500'}`}>Impresión Papel</button>
            
          </div>
          <div className="flex flex-row justify-between">
            <p>Valor 1</p>
            <p>Valor 2</p>
            <p>Valor 3</p>
          </div>
        </div>
      </div>

      <div className={`mb-8 p-1 rounded-lg ${theme === 'dark' ? 'bg-gradient-to-br from-teal-500 to-green-500' : 'bg-gradient-to-br from-pink-500 to-yellow-500'}`}>
      <p className="ml-2 {`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}">2- Complete los datos del trabajo</p>
        <div className={`${theme === 'dark' ? 'bg-[#1c1b29]' : 'bg-white'} p-4 rounded-lg`}>
          <div className="flex items-center mb-4">
            <PiListStarLight className="w-5 h-5" />
            <i className={`bi bi-tags-fill text-lg mr-2 ${theme === 'dark' ? 'text-teal-400' : 'text-pink-500'}`} />
            <h5 className="{`text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}">Datos del trabajo:</h5>
          </div>
          <div className="flex flex-row justify-between">
            <button className={`mb-8 p-1 rounded-lg ${theme === 'dark' ? 'bg-gradient-to-br from-teal-500 to-green-500' : 'bg-gradient-to-br from-pink-500 to-yellow-500'}`}>INPUT NOMBRE DEL TRABAJO</button>
            <button className={`mb-8 p-1 rounded-lg ${theme === 'dark' ? 'bg-gradient-to-br from-teal-500 to-green-500' : 'bg-gradient-to-br from-pink-500 to-yellow-500'}`}>DROPDOWN LUGAR DE RETIRO</button>
            
          </div>
        </div>
      </div>

      <div className={`mb-8 p-1 rounded-lg ${theme === 'dark' ? 'bg-gradient-to-br from-teal-500 to-green-500' : 'bg-gradient-to-br from-pink-500 to-yellow-500'}`}>
      <p className="ml-2 {`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}">3- Seleccione las imágenes para el trabajo</p>
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
      
    </div>
  );
};
