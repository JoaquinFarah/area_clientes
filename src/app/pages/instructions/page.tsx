import HeaderImage from '@/app/components/HeaderImage';
import Accordion from '@/app/components/Accordion';
import InteractiveExample from '@/app/components/InteractiveExample';

const PoliciesPage = () => (
  <div className=" text-gray-400 min-h-screen p-4">
    <HeaderImage />
    <div className="container mx-auto">
      <div className="content p-6 rounded-lg shadow-lg">
        <h2 className="header text-center text-2xl">📜 Políticas y Reglas del Sistema de Premios 📜</h2>
        <Accordion />
      </div>
      <section id="interactiveSection" className="contact my-10">
        <h2 className="header text-center text-2xl">📊 Ejemplo Interactivo del Sistema 📊</h2>
        <InteractiveExample />
      </section>     
    </div>
  </div>
);

export default PoliciesPage;
