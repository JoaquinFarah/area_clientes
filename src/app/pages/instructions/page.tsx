import HeaderImage from '@/app/components/HeaderImage';
import Accordion from '@/app/components/Accordion';
import InteractiveExample from '@/app/components/InteractiveExample';

const PoliciesPage = () => (
  <div className="bg-gray-900 text-gray-300 min-h-screen p-4">
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
      <footer className="app-footer text-center mt-10 py-3">
        <small>&copy; <a href="https://digitaltex.com.ar" target="_blank" className="text-teal-400">DigitalTex EstampadosMendoza</a></small>
      </footer>
    </div>
  </div>
);

export default PoliciesPage;
