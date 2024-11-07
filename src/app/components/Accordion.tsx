"use client";
import { useState } from 'react';

type AccordionItemProps = {
  title: string;
  content: string;
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
};

const AccordionItem = ({ title, content, index, isOpen, onToggle }: AccordionItemProps) => {
  return (
    <div className="border-b border-gray-700">
      <button
        onClick={() => onToggle(index)}
        className="w-full text-left text-neon flex justify-between items-center"
      >
        {title}
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <div className="p-4 bg-gradient-to-r from-purple-800 to-purple-900 text-d3d3e7">{content}</div>}
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <AccordionItem
        title="🎯 Objetivo del Sistema de Premios"
        content="Nuestro sistema de premios tiene como objetivo reconocer y recompensar la fidelidad y el compromiso de nuestros clientes con nuestros servicios de impresión textil."
        index={0}
        isOpen={openIndex === 0}
        onToggle={handleToggle}
      />
      <AccordionItem
        title="🏅 Niveles de Premios"
        content="Los niveles de premios son los siguientes:
          <ul>
            <li>Neo Iniciado: Más de 0 metros.</li>
            <li>Explorador: Más de 5 metros.</li>
            <li>Maestro Creativo: Más de 20 metros.</li>
            <li>Alquimista: Más de 100 metros.</li>
            <li>Núcleo Fusión: Más de 500 metros.</li>
          </ul>"
        index={1}
        isOpen={openIndex === 1}
        onToggle={handleToggle}
      />
      <AccordionItem
        title="🔄 Asignación de Niveles"
        content="Los niveles de premios se asignan automáticamente según el volumen de metros cargados por el cliente en los últimos 30   días. No hay excepciones.
              Cuando vence un trabajo, los metros asociados a ese trabajo se eliminan del cálculo de los metros totales cargados por el cliente en los últimos 30 días."
        index={2}
        isOpen={openIndex === 2}
        onToggle={handleToggle}
      />
      <AccordionItem
        title="🎁 Beneficios de los Niveles"
        content="Cada nivel de premio viene con beneficios exclusivos, que incluyen descuentos en los precios de impresión.
              Los porcentajes de descuentos se pueden encontrar en la pestaña &VER NIVELES&, donde se muestra toda la información de precios y descuentos de cada nivel."
        index={3}
        isOpen={openIndex === 3}
        onToggle={handleToggle}
      />
      <AccordionItem
        title="💰 Cambios en los Precios"
        content="El valor del precio por metro inicial puede ser modificado debido a subas de materiales e inflación.
              Los clientes serán notificados por correo electrónico con al menos 7 días de anticipación sobre cualquier modificación en los precios."
        index={4}
        isOpen={openIndex === 4}
        onToggle={handleToggle}
      />
    </div>
  );
};

export default Accordion;
