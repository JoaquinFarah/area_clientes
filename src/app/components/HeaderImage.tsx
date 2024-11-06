import Image from 'next/image';
import Link from 'next/link';

const HeaderImage = () => (
  <header className="relative text-center text-white">
    <Image
      src="https://clientes.digitaltex.com.ar/assets/images/Imagenessis/Niveles.png"
      alt="Astronauta bajando una escalera de niveles de colores neon"
      width={1200}
      height={600}
      className="w-full h-auto"
    />
    <Link href="#interactiveSection">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/30 text-d3d3e7 border-2 border-d3d3e7 px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-all">
        Ver Ejemplo
      </div>
    </Link>
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black/50 p-4 rounded-lg">
      <h2>Sistema de Niveles</h2>
      <p>Con tu crecimiento reduces tus costos de producción.</p>
    </div>
  </header>
);

export default HeaderImage;
