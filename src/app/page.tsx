// export default function Home() {
//   return (
//     <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center justify-between gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
//       <h1 className="text-2xl font-bold">DASHBOARD</h1>
//       <p>Saldo a Favor: $0.00</p>
//       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Agregar saldo</button>
      
//     </div>
//   );
// }


import ClientLevel from '@/app/components/ClientLevel';
import ClientMeters from '@/app/components/ClientMeters';
export default function HomePage() {
  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      {/* Título y saludo */}
      <div className="w-full flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">¡Bienvenido @USUARIO!</h1>
        <div className="text-right">
          <p className="text-lg font-semibold">Saldo a favor: $0.00</p>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Agregar Saldo
          </button>
        </div>
      </div>
      

      {/* Componente de nivel del cliente */}
      <ClientLevel />
      <div className="bg-green-500 w-full h-0.5"></div>
      {/* Componente de metros del cliente */}
      <ClientMeters />
    </div>
  );
}