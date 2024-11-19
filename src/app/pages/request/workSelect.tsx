// import React from 'react';
// import { IoMdOptions } from "react-icons/io";
// import { useTheme } from '@/context/ThemeContext';


// export const WorkSelect = () => {
//   const { theme } = useTheme();

//   return (
//     <div className={`mb-10 p-1 rounded-lg ${theme === 'dark' ? 'bg-gradient-to-br from-teal-500 to-green-500' : 'bg-gradient-to-br from-pink-500 to-yellow-500'}`}>
//       <p className="ml-2 p-1 {`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}">1- Seleccione el tipo de trabajo</p>
//         <div className={`${theme === 'dark' ? 'bg-[#1c1b29]' : 'bg-white'} p-4 rounded-lg`}>
//           <div className="flex items-center mb-4">
//             <IoMdOptions className="w-5 h-5" />
//             <i className={`bi bi-tags-fill text-lg mr-2 ${theme === 'dark' ? 'text-teal-400' : 'text-pink-500'}`} />
//             <h5 className="{`text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}">Tipo de trabajo:</h5>
//           </div>
//           <div className= {`h-0.5 w-full mb-8 ${theme === 'dark' ? 'bg-white' : 'bg-black'}`}></div>
//           <div className="flex flex-row justify-between mx-12">
//             <button className={`mb-1 px-20 rounded-md ${theme === 'dark' ? 'bg-gradient-to-br from-teal-500 to-green-500' : 'bg-gradient-to-br from-pink-500 to-yellow-500'}`}>DTF</button>
//             <button className={`mb-1 px-16 rounded-md ${theme === 'dark' ? 'bg-gradient-to-br from-teal-500 to-green-500' : 'bg-gradient-to-br from-pink-500 to-yellow-500'}`}>Sublimación x metro lineal</button>
//             <button className={`mb-1 px-20 rounded-md ${theme === 'dark' ? 'bg-gradient-to-br from-teal-500 to-green-500' : 'bg-gradient-to-br from-pink-500 to-yellow-500'}`}>Impresión Papel</button>
            
//           </div>
//           <div className="flex flex-row ">
//             <p className="ml-20">($9.000 el metro)</p>
//             <p className="ml-60">($4241.00 el metro)</p>
//             <p className="ml-72">($1.000 el metro)</p>
//           </div>
//         </div>
//       </div>
//   )
// }








import React, { useState } from "react";
import { IoMdOptions } from "react-icons/io";
import { useTheme } from "@/context/ThemeContext";

export const WorkSelect: React.FC = () => {
  const { theme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className={`mb-10 p-1 rounded-lg ${
        theme === "dark"
          ? "bg-gradient-to-br from-teal-500 to-green-500"
          : "bg-gradient-to-br from-pink-500 to-yellow-500"
      }`}
    >
      <p
        className={`ml-2 p-1 text-2xl font-semibold ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        1- Seleccione el tipo de trabajo
      </p>
      <div
        className={`p-4 rounded-lg ${
          theme === "dark" ? "bg-[#1c1b29]" : "bg-white"
        }`}
      >
        <div className="flex items-center mb-4">
          <IoMdOptions className="w-5 h-5" />
          <h5
            className={`ml-2 text-lg ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Tipo de trabajo:
          </h5>
        </div>
        <div
          className={`h-0.5 w-full mb-4 ${
            theme === "dark" ? "bg-white" : "bg-black"
          }`}
        ></div>
        <button
          onClick={toggleDropdown}
          className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center ${
            theme === "dark"
              ? "dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              : ""
          }`}
        >
          Seleccione el tipo de trabajo
          <svg
            className="w-2.5 h-2.5 ml-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
            aria-hidden="true"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1l4 4 4-4"
            />
          </svg>
        </button>
        {isDropdownOpen && (
          <div className="mt-4 bg-white divide-y divide-gray-100 rounded-lg shadow w-60 dark:bg-gray-700 dark:divide-gray-600">
            <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200">
              {["DTF", "Sublimacion por metro", "Impresion en papel"].map((type, index) => (
                <li key={index}>
                  <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      id={`helper-radio-${index}`}
                      name="helper-radio"
                      type="radio"
                      value={type}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor={`helper-radio-${index}`}
                      className="ml-2 font-medium text-gray-900 dark:text-gray-300"
                    >
                      {type}
                      <p className="text-xs font-normal text-gray-500 dark:text-gray-300">
                        {`Some helpful instruction about ${type.toLowerCase()}.`}
                      </p>
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
