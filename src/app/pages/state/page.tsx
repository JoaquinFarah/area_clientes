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
    // Llamada para actualizar el trabajo y manejar el resultado, (results y clienteId) se obtienen a través de props o desde un API
    setTimeout(() => setLoadingId(null), 2000); // Mockea una espera para volver al estado de no cargando
  };

  return (
    <div className="p-4 h-screen w-full">
      <h1 className="text-2xl font-bold mb-6">Estado de los archivos de cada trabajo</h1>

      <input type="hidden" value={clienteId} />
      <input type="hidden" id="pagina" value="estado_archivos" />
      <input type="hidden" id="idCliente" value={clienteId} />
      <input type="hidden" id="nombreCliente" value={nombreCliente} />

      <div className="mb-8">
        <div className="flex items-center mb-4">
          <i className="bi bi-tags-fill text-lg mr-2" />
          <MdOutlineSpeakerNotesOff />
          <h5 className="ml-2 text-lg font-semibold">Trabajos con errores</h5>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border-2 border-cyan-600">
            <thead>
              <tr className="text-center bg-pink-500 text-white">
                <th className="px-4 py-2 border-b">Fecha Creación</th>
                <th className="px-4 py-2 border-b">Trabajo</th>
                <th className="px-4 py-2 border-b">Mensaje</th>
                <th className="px-4 py-2 border-b">Actualizar</th>
              </tr>
            </thead>
            <tbody>
              {results && results.length > 0 ? (
                results.map((r) => (
                  <tr
                    key={r.idError}
                    className="text-center border-b bg-gradient-to-r from-pink-400 to-pink-600 text-white shadow-lg"
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
                <tr className="text-center bg-gradient-to-r from-pink-400 to-pink-600 text-white shadow-lg">
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
  );
};

export default EstadoArchivos;