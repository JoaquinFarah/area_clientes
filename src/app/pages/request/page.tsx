import React from 'react';
import { useTheme } from '@/context/ThemeContext';


export default function requestPage() {
  const { theme } = useTheme();

  
  return (
    <div className="p-4 h-screen w-full">
      <h1 className={`text-2xl font-bold mb-6 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        Estado de los archivos de cada trabajo
      </h1>

      <div
        className={`mb-8 p-1 rounded-lg ${
          theme === 'dark' ? 'bg-gradient-to-br from-teal-500 to-green-500' : 'bg-gradient-to-br from-pink-500 to-yellow-500' 
        }`}
      >
        <div className={`${theme === 'dark' ? 'bg-[#1c1b29]' : 'bg-white'} p-4 rounded-lg`}>
          <div className="flex items-center mb-4">
            <i className={`bi bi-tags-fill text-lg mr-2 ${theme === 'dark' ? 'text-teal-400' : 'text-pink-500'}`} />
            <h5 className="ml-2 {`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}">Trabajos con errores</h5>
          </div>
          <div className="overflow-x-auto">
            <table className={`min-w-full border rounded-lg ${theme === 'dark' ? 'border-[#00ffa2]' : 'border-gray-300'}`}>
              <thead>
                <tr className="{`text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80">
                  <th className={`px-4 py-2 border-b ${theme === 'dark' ? 'border-[#00ffa2]' : 'border-gray-300'}`}>Fecha Creación</th>
                  <th className={`px-4 py-2 border-b ${theme === 'dark' ? 'border-[#00ffa2]' : 'border-gray-300'}`}>Trabajo</th>
                  <th className={`px-4 py-2 border-b ${theme === 'dark' ? 'border-[#00ffa2]' : 'border-gray-300'}`}>Mensaje</th>
                  <th className={`px-4 py-2 border-b ${theme === 'dark' ? 'border-[#00ffa2]' : 'border-gray-300'}`}>Actualizar</th>
                </tr>
              </thead>             
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
