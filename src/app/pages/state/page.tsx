// "use client"
// import { useState } from 'react';
// import { MdOutlineSpeakerNotesOff } from "react-icons/md";

// interface Trabajo {
//   idError: string;
//   idCliente: string;
//   cliente: string;
//   trabajo: string;
//   mensaje: string;
//   fecha: string;
// }

// interface EstadoArchivosProps {
//   results: Trabajo[] | null;
//   clienteId: string;
//   nombreCliente: string;
// }

// const EstadoArchivos: React.FC<EstadoArchivosProps> = ({ results, clienteId, nombreCliente }) => {
//   const [loadingId, setLoadingId] = useState<string | null>(null);

//   const handleUpdateClick = (idError: string) => {
//     setLoadingId(idError);
//     // Call to uipdate work and result handling (results & clienteId) will be get from props or APIs.
//     setTimeout(() => setLoadingId(null), 2000); // Mockea response not to go back at charging state
//   };

//   return (
//     <div className="p-4 h-screen">
//       <h1 className="text-2xl font-bold mb-6 text-center">Estado de los archivos de cada trabajo</h1>

//       <input type="hidden" value={clienteId} />
//       <input type="hidden" id="pagina" value="estado_archivos" />
//       <input type="hidden" id="idCliente" value={clienteId} />
//       <input type="hidden" id="nombreCliente" value={nombreCliente} />

//       <div className="mb-8 bg-gradient-to-br from-teal-500 to-green-500 p-1 rounded-lg shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80">
//         <div className="bg-[#1c1b29] p-4 rounded-lg">
//           <div className="flex items-center mb-4">
//             <i className="bi bi-tags-fill text-teal-400 text-lg mr-2" />
//             <MdOutlineSpeakerNotesOff />
//             <h5 className="ml-2 text-lg font-semibold text-white">Trabajos con errores</h5>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-[#1c1b29] border border-[#00ffa2] rounded-lg">
//               <thead>
//                 <tr className="text-center text-white shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80">
//                   <th className="px-4 py-2 border-b border-[#00ffa2]">Fecha Creación</th>
//                   <th className="px-4 py-2 border-b border-[#00ffa2]">Trabajo</th>
//                   <th className="px-4 py-2 border-b border-[#00ffa2]">Mensaje</th>
//                   <th className="px-4 py-2 border-b border-[#00ffa2]">Actualizar</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {results && results.length > 0 ? (
//                   results.map((r) => (
//                     <tr
//                       key={r.idError}
//                       className="text-center text-white border-b border-[#00ffa2] bg-gradient-to-r from-[#1c1b29] to-[#1c1b29] hover:bg-gradient-to-r hover:from-teal-500 hover:to-green-500"
//                     >
//                       <td className="px-4 py-2">{new Date(r.fecha).toLocaleDateString('es-AR')}</td>
//                       <td className="px-4 py-2">{r.trabajo}</td>
//                       <td className="px-4 py-2">{r.mensaje}</td>
//                       <td className="px-4 py-2">
//                         <button
//                           onClick={() => handleUpdateClick(r.idError)}
//                           className="btn btn-outline-primary btn-sm p-2 flex items-center justify-center"
//                           disabled={loadingId === r.idError}
//                         >
//                           {loadingId === r.idError ? (
//                             <span className="spinner-border spinner-border-sm animate-spin" aria-hidden="true"></span>
//                           ) : (
//                             <i className="bi bi-arrow-clockwise text-lg"></i>
//                           )}
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr className="text-center text-white">
//                     <td colSpan={4} className="py-4">
//                       No hay trabajos con errores
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EstadoArchivos;




"use client"

import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

interface Trabajo {
  idError: string;
  idCliente: string;
  cliente: string;
  trabajo: string;
  mensaje: string;
  fecha: string;
}

interface EstadoArchivosProps {
  results: Trabajo[] | null;
  clienteId: string;
  nombreCliente: string;
}

const EstadoArchivos: React.FC<EstadoArchivosProps> = ({ results, clienteId, nombreCliente }) => {
  const [loadingId, setLoadingId] = useState<string | null>(null);  
  const { theme } = useTheme();

  const handleUpdateClick = (idError: string) => {
    setLoadingId(idError);
    // Call to uipdate work and result handling (results & clienteId) will be get from props or APIs.
    setTimeout(() => setLoadingId(null), 2000); // Mockea response to don´t go back at charging state
  };

  return (
    <div className="p-4">
      <h1 className={`text-2xl font-bold mb-6 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        Estado de los archivos de cada trabajo
      </h1>

      <input type="hidden" value={clienteId} />
      <input type="hidden" id="pagina" value="estado_archivos" />
      <input type="hidden" id="idCliente" value={clienteId} />
      <input type="hidden" id="nombreCliente" value={nombreCliente} />

      <div
        className={`mb-8 p-1 rounded-lg ${
          theme === 'dark' ? 'bg-gradient-to-br from-teal-500 to-green-500' : 'bg-gradient-to-br from-pink-500 to-yellow-500' 
        }`}
      >
        <div className={`${theme === 'dark' ? 'bg-[#1c1b29]' : 'bg-white'} p-4 rounded-lg`}>
          <div className="flex items-center mb-4">
            <i className={`bi bi-tags-fill text-lg mr-2 ${theme === 'dark' ? 'text-teal-400' : 'text-pink-500'}`} />
            <h5 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Trabajos con errores</h5>
          </div>
          <div className="overflow-x-auto">
            <table className={`min-w-full border rounded-lg ${theme === 'dark' ? 'border-[#00ffa2]' : 'border-gray-300'}`}>
              <thead>
                <tr className={`text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  <th className={`px-4 py-2 border-b ${theme === 'dark' ? 'border-[#00ffa2]' : 'border-gray-300'}`}>Fecha Creación</th>
                  <th className={`px-4 py-2 border-b ${theme === 'dark' ? 'border-[#00ffa2]' : 'border-gray-300'}`}>Trabajo</th>
                  <th className={`px-4 py-2 border-b ${theme === 'dark' ? 'border-[#00ffa2]' : 'border-gray-300'}`}>Mensaje</th>
                  <th className={`px-4 py-2 border-b ${theme === 'dark' ? 'border-[#00ffa2]' : 'border-gray-300'}`}>Actualizar</th>
                </tr>
              </thead>
              <tbody>
                {results && results.length > 0 ? (
                  results.map((r) => (
                    <tr
                      key={r.idError}
                      className={`text-center border-b ${
                        theme === 'dark'
                          ? 'text-white border-[#00ffa2] bg-gradient-to-r from-[#1c1b29] to-[#1c1b29] hover:from-teal-500 hover:to-green-500'
                          : 'text-gray-900 border-gray-300 bg-white hover:bg-pink-100'
                      }`}
                    >
                      <td className="px-4 py-2">{new Date(r.fecha).toLocaleDateString('es-AR')}</td>
                      <td className="px-4 py-2">{r.trabajo}</td>
                      <td className="px-4 py-2">{r.mensaje}</td>
                      <td className="px-4 py-2">
                        <button
                          onClick={() => handleUpdateClick(r.idError)}
                          className="btn btn-outline-primary btn-sm p-2 flex items-center justify-center"
                          disabled={loadingId === r.idError}
                        >
                          {loadingId === r.idError ? (
                            <span className="spinner-border spinner-border-sm animate-spin" aria-hidden="true"></span>
                          ) : (
                            <i className="bi bi-arrow-clockwise text-lg"></i>
                          )}
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className={`text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    <td colSpan={4} className="py-4">
                      No hay trabajos con errores
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstadoArchivos;
