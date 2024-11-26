import React from "react";
import { IoIosImages } from "react-icons/io";
import { useTheme } from "@/context/ThemeContext";

export const WorkImage: React.FC = () => {
  const { theme } = useTheme();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const invalidFiles = Array.from(files).filter(
        (file) => file.type !== "image/png"
      );

      if (invalidFiles.length > 0) {
        alert("Solo se permiten archivos con formato .png");
      } else {
        alert(`Se han seleccionado ${files.length} archivo(s) .png correctamente.`);
      }
    }
  };

  return (
    <div
      className={`mb-8 p-1 rounded-lg ${
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
        3- Seleccione las imágenes para el trabajo
      </p>
      <div
        className={`${
          theme === "dark" ? "bg-[#1c1b29]" : "bg-white"
        } p-4 rounded-lg`}
      >
        <div className="flex items-center mb-4">
          <IoIosImages className="w-5 h-5" />
          <i
            className={`bi bi-tags-fill text-lg mr-2 ${
              theme === "dark" ? "text-teal-400" : "text-pink-500"
            }`}
          />
          <h5
            className={`text-lg ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Seleccionar imágenes:
          </h5>
        </div>

        <div className="flex flex-col items-center justify-center">
          {/* Files Input  */}
          <input
            type="file"
            multiple
            accept=".png"
            id="file-input"
            onChange={handleFileSelect}
            className="hidden"
          />
          <label
            htmlFor="file-input"
            className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center ${
              theme === "dark"
                ? "dark:bg-teal-500 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
                : ""
            }`}
          >
            Subir Archivos
          </label>

          <p
            className={`mt-2 text-sm ${
              theme === "dark" ? "text-teal-400" : "text-gray-500"
            }`}
          >
            (Solamente archivos .png)
          </p>
        </div>
      </div>
    </div>
  );
};
