import Image from 'next/image';

const ClientLevel = () => {
  return (
    <div className="flex flex-col items-center mb-10">
      <Image
        src="/nivel-1.png" 
        alt="Nivel del cliente"
        width={100}
        height={100}
        className="rounded-lg"
      />
      <p className="mt-2 text-lg">Usted es nivel <strong className="text-blue-500">Neo Iniciado</strong></p>
      <a href="#" className="text-blue-500 underline mt-1">Ver Niveles</a>
    </div>
  );
};

export default ClientLevel;
