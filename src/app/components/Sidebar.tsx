"use client"
import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`flex flex-col ${isCollapsed ? 'w-20' : 'w-64'} bg-gray-100 dark:bg-gray-800 h-screen p-5 transition-width duration-300`}>
      {/* <button onClick={() => setIsCollapsed(!isCollapsed)} className="mb-4">
        {isCollapsed ? '>' : '<'}
      </button> */}
      <button
        onClick={toggleTheme}
        className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full text-gray-600 dark:text-gray-300"
      >
        {theme === 'light' ? '🌞' : '🌜'}
      </button>

      <div className="relative h-36 w-36 mb-10 mx-auto mt-10">
        <Image
          src={theme === 'light' ? '/logo-astronauta-light.png' : '/logo-astronauta-dark.png'}
          alt="Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <nav>
        <SidebarItem title="Item 1" />
        <SidebarItem title="Item 2" subItems={['Subitem 2.1', 'Subitem 2.2']} />
        <SidebarItem title="Item 3" subItems={['Subitem 3.1', 'Subitem 3.2', 'Subitem 3.3']} />
      </nav>

      {/* <button
        onClick={toggleTheme}
        className="mt-auto bg-gray-200 dark:bg-gray-700 p-2 rounded-full text-gray-600 dark:text-gray-300"
      >
        {theme === 'light' ? '🌞' : '🌜'}
      </button> */}
    </div>
  );
};

const SidebarItem = ({ title, subItems }: { title: string; subItems?: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
      >
        {title}
        {subItems && (
          <div className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>
            <Image src="/chevron.svg" alt="Dropdown Icon" width={20} height={20} />
          </div>
        )}
      </button>
      {isOpen && subItems && (
        <div className="pl-4">
          {subItems.map((subItem) => (
            <p
              key={subItem}
              className="p-2 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
            >
              {subItem}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
