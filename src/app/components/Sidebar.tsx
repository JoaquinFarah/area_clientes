"use client";
import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import Link from 'next/link';

const Sidebar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col w-64 bg-gray-100 dark:bg-gray-800 h-screen p-5">
      {/* Botón para alternar el tema */}
      <button
        onClick={toggleTheme}
        className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full text-gray-600 dark:text-gray-300"
      >
        {theme === 'light' ? '🌞' : '🌜'}
      </button>

      {/* Imagen superior */}
      <div className="relative h-36 w-36 mb-10 mx-auto mt-10">
        <Image
          src={theme === 'light' ? '/logo-astronauta-light.png' : '/logo-astronauta-dark.png'}
          alt="Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>

      {/* Menú de Navegación */}
      <nav>
        <SidebarItem title="Pagina Principal" href="/" />
        <SidebarItem
          title="Redes"
          subItems={[
            { label: 'Facebook', href: 'https://www.facebook.com/' },
            { label: 'Gmail', href: 'https://mail.google.com/mail/u/0/#inbox' },
          ]}
        />
        <SidebarItem
          title="Profesional"
          subItems={[
            { label: 'Linkedin', href: 'https://www.linkedin.com/feed/' },
            { label: 'YouTube', href: 'https://www.youtube.com/' },            
          ]}
        />
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
