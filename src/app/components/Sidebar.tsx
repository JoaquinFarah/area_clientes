"use client";
import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import Link from 'next/link';
import { FaHome  } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BsDoorOpenFill } from "react-icons/bs";
import { RiStickyNoteAddLine } from "react-icons/ri";
//Icons from reacticons

const Sidebar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col w-64 bg-gray-100 dark:bg-gray-800 h-screen p-5">

      {/* Button theme */}
      <button
        onClick={toggleTheme}
        className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full text-gray-600 dark:text-gray-300"
      >
        {theme === 'light' ? '🌞' : '🌜'}
      </button>

      {/* Image */}
      <div className="relative h-36 w-36 mb-10 mx-auto mt-10">
        <Image
          src={theme === 'light' ? '/logo-astronauta-light.png' : '/logo-astronauta-dark.png'}
          alt="Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>

      {/* Sidebar */}
      <nav>
        <Link href="/" className="flex items-center justify-start w-full p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
          <FaHome className="w-5 h-5" aria-hidden="true" />
            <span className="pl-2">Página Principal</span>
        </Link>
        <div className="flex items-center justify-start w-full p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
        <RiStickyNoteAddLine className="w-5 h-5" aria-hidden="true" />
        <SidebarItem 
          title="Pedidos"
          subItems={[
            { label: 'Instrucciones', href: '/pages/instructions' },
            { label: 'Cargar Pedido', href: '/pages/request' },
            { label: 'Ver Pedido', href: '/pages/watcher' },
            { label: 'Estado Archivos', href: '/pages/state' },
          ]}
        />
        </div>

        <div className="bg-blue-600 w-full h-0.5 my-1"></div>


        <Link href="/pages/profile" className="flex items-center justify-start w-full p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
            <CgProfile  className="w-5 h-5" aria-hidden="true" />
              <span className="pl-2">Perfil</span>
        </Link>

        <Link href="/" className="flex items-center justify-start w-full p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
            <BsDoorOpenFill className="w-5 h-5" aria-hidden="true" />
              <span className="pl-2">Salir</span>
        </Link>
      </nav>
    </div>
  );
};

type SidebarItemProps = {
  title: string;
  href?: string;
  subItems?: { label: string; href: string }[];
};

const SidebarItem = ({ title, href, subItems }: SidebarItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <Link href={href || '#'} passHref>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
        >
          {title}
          {subItems && (
            <div className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>
              <Image src="/LineMdChevronDownSquareTwotone.svg" alt="Dropdown Icon" width={20} height={20} />
            </div>
          )}
        </button>
      </Link>
      {isOpen && subItems && (
        <div className="pl-4">
          {subItems.map((subItem) => (
            <Link key={subItem.href} href={subItem.href} passHref>
              <div className="block p-2 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
                {subItem.label}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
