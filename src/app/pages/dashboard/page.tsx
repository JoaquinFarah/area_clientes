import ClientLevel from '@/app/components/ClientLevel';
import ClientMeters from '@/app/components/ClientMeters';


export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      <div className="w-full flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">¡Bienvenido @USUARIO!</h1>
        <div className="text-right">
          <p className="text-lg font-semibold">Saldo a favor: $0.00</p>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Agregar Saldo
          </button>
        </div>
      </div>

      <ClientLevel />

      <div className="bg-cyan-600 w-full h-0.5 my-1"></div>

      <ClientMeters />
    </div>
  );
}