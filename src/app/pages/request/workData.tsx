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
              <div className="flex w-72 flex-col gap-6">  
                <div className="relative h-10 w-full min-w-[200px]">
                  <input
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-teal-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-teal-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-teal-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Nombre del trabajo
                  </label>
                </div>
              </div>
        </div>
      </div>
  )
}





 {/* <button className={`mb-8 p-1 rounded-lg ${theme === 'dark' ? 'bg-gradient-to-br from-teal-500 to-green-500' : 'bg-gradient-to-br from-pink-500 to-yellow-500'}`}>INPUT NOMBRE DEL TRABAJO</button>
            <button className={`mb-8 p-1 rounded-lg ${theme === 'dark' ? 'bg-gradient-to-br from-teal-500 to-green-500' : 'bg-gradient-to-br from-pink-500 to-yellow-500'}`}>DROPDOWN LUGAR DE RETIRO</button>             */}
