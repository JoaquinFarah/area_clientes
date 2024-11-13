"use client"
import { useState } from 'react';
import { MdOutlineSpeakerNotesOff } from "react-icons/md";

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

  const handleUpdateClick = (idError: string) => {
    setLoadingId(idError);
    // Call to uipdate work and result handling (results & clienteId) will be get from props or APIs.
    setTimeout(() => setLoadingId(null), 2000); // Mockea response not to go back at charging state
  };

  return (
    <div className="p-4 h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">Estado de los archivos de cada trabajo</h1>

      <input type="hidden" value={clienteId} />
      <input type="hidden" id="pagina" value="estado_archivos" />
      <input type="hidden" id="idCliente" value={clienteId} />
      <input type="hidden" id="nombreCliente" value={nombreCliente} />

      <div className="mb-8 bg-gradient-to-br from-teal-500 to-green-500 p-1 rounded-lg shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80">
        <div className="bg-[#1c1b29] p-4 rounded-lg">
          <div className="flex items-center mb-4">
            <i className="bi bi-tags-fill text-teal-400 text-lg mr-2" />
            <MdOutlineSpeakerNotesOff />
            <h5 className="ml-2 text-lg font-semibold text-white">Trabajos con errores</h5>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-[#1c1b29] border border-[#00ffa2] rounded-lg">
              <thead>
                <tr className="text-center text-white shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80">
                  <th className="px-4 py-2 border-b border-[#00ffa2]">Fecha Creación</th>
                  <th className="px-4 py-2 border-b border-[#00ffa2]">Trabajo</th>
                  <th className="px-4 py-2 border-b border-[#00ffa2]">Mensaje</th>
                  <th className="px-4 py-2 border-b border-[#00ffa2]">Actualizar</th>
                </tr>
              </thead>
              <tbody>
                {results && results.length > 0 ? (
                  results.map((r) => (
                    <tr
                      key={r.idError}
                      className="text-center text-white border-b border-[#00ffa2] bg-gradient-to-r from-[#1c1b29] to-[#1c1b29] hover:bg-gradient-to-r hover:from-teal-500 hover:to-green-500"
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
                  <tr className="text-center text-white">
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
