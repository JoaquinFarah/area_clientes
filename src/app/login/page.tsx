import React from 'react';
import Image from 'next/image';
import { login, signup } from './actions'
import { logout } from '../logout/actions';

export default function LoginPage() {
  return (
   
    <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/Niveles.png')" }} >
    <div className="rounded-xl bg-gray-900 bg-opacity-50 px-16 py-5 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
            <div className="mb-8 flex flex-col items-center">
             <Image src="/logo-login.png" height={500} width={500} alt="escalera" />
                <h1 className="mb-2 text-2xl">Bienvenido al Futuro</h1>
                    <span className="text-gray-300">Para comenzar, inicie sesión. Si no posee usuario contactese con nuestro soporte técnico.</span>
        </div>
        <form action="#">
            <div className="mb-4 text-lg">
                <input className="bg-black rounded-3xl border-none bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-gray-300 shadow-lg outline-none backdrop-blur-md w-full" id="email" type="email" name="email" placeholder="@Email" required />
            </div>

            <div className="mb-4 text-lg">
                <input  className="bg-black rounded-3xl border-none bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-gray-300 shadow-lg outline-none backdrop-blur-md w-full" id="password" type="password" name="password" placeholder="DNI/CUIT" required />
                <button className="text-s font-sans text-cyan-400">Olvido su contraseña?</button>
            </div>
                <div className="mt-8 flex justify-center text-lg text-black">
                <button formAction={login} type="submit" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Iniciar Sesión
                </span>
                </button>
            </div> 



            
            <button formAction={signup}>Register</button>    

            
        </form>

        <form action={logout} className="mt-6">



          
            <button
              type= "submit" 
              className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Cerrar Sesión
            </button>

          </form>    
        </div>
    </div>
    </div>
  )
}

