import { useState } from 'react';

type AccordionItemProps = {
  title: string;
  content: string;
};

const AccordionItem = ({ title, content }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 text-neon flex justify-between items-center"
      >
        {title}
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <div className="p-4 bg-gradient-to-r from-purple-800 to-purple-900 text-d3d3e7">{content}</div>}
    </div>
  );
};

const Accordion = () => (
  <div>
    <AccordionItem
      title="🎯 Objetivo del Sistema de Premios"
      content="Nuestro sistema de premios tiene como objetivo reconocer y recompensar la fidelidad y el compromiso de nuestros clientes con nuestros servicios de impresión textil."
    />
    {/* Add more items  */}
  </div>
);

export default Accordion;
