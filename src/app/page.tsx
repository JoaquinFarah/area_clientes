export default function Home() {
  return (
    <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center justify-between gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <h1 className="text-2xl font-bold">DASHBOARD</h1>
      <p>Saldo a Favor: $0.00</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Agregar saldo</button>
      
    </div>
  );
}
