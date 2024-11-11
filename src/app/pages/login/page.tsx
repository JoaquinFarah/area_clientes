import React from 'react';
import Image from 'next/image';

export default function loginPage() {
  return (
    
    <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/Niveles.png')" }} >
    <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
            <div className="mb-8 flex flex-col items-center">
             <Image src="/logo-login.png" height={500} width={500} alt="escalera" />
                <h1 className="mb-2 text-2xl">Bienvenido al Futuro</h1>
                    <span className="text-gray-300">Para comenzar, inicie sesión. Si no posee usuario contactese con nuestro soporte técnico.</span>
        </div>
        <form action="#">
            <div className="mb-4 text-lg">
                <input className="bg-black rounded-3xl border-none bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-gray-300 shadow-lg outline-none backdrop-blur-md w-full" type="text" name="name" placeholder="@Email" />
            </div>

            <div className="mb-4 text-lg">
                <input className="bg-black rounded-3xl border-none bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-gray-300 shadow-lg outline-none backdrop-blur-md w-full" type="Password" name="name" placeholder="DNI/CUIT" />
                <button className="text-s font-sans text-cyan-400">Olvido su contraseña?</button>
            </div>
                <div className="mt-8 flex justify-center text-lg text-black">
                <button type="submit" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Iniciar Sesión
            </span>
            </button>
            </div>            
            
        </form>
        </div>
    </div>
    </div>
  )
}
