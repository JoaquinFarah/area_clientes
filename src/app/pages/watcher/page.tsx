// "use client";

// import React from "react";
// import { useTheme } from "@/context/ThemeContext";

// type Order = {
//   id: number;
//   trabajo: string;
//   metros: number;
//   clase: string;
//   entregaEstimada: string;
//   estadoOrden: string;
//   estadoPago: string;
//   numeroOperacion: string;
//   esTemporal: boolean;
// };

// type Props = {
//   orders: Order[];
//   registrosTemporales: number;
// };

// const OrderList: React.FC<Props> = ({ registrosTemporales }) => {
//   const { theme } = useTheme();

//   return (
//     <div
//       className={`p-4 h-screen ${
//         theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
//       }`}
//     >
//       <h1 className="text-2xl font-bold mb-6 text-center">Listado de Pedidos</h1>

//       {/* Important */}
//       <div
//         className={`app-card shadow-md mb-4 border ${
//           theme === "dark"
//             ? "border-red-500 bg-gray-800 hover:bg-red-500/20" 
//             : "border-red-500 bg-gray-100 hover:bg-red-500/20"
//         }`}
//       >
//         <div className="p-4">
//           <strong className="text-2xl">IMPORTANTE</strong>
//           <p>
//             Si tiene órdenes en estado de pago <b className="text-red-600 underline">PENDIENTE</b>, revise que el
//             N° Operación sea correcto.
//           </p>
//         </div>
//       </div>

//       {/* Request table */}
//       <div className="mb-4">
//         <div className="flex items-center mb-2">
//           <i
//             className={`bi bi-tags-fill text-lg mr-2 ${
//               theme === "dark" ? "text-yellow-300" : "text-gray-800"
//             }`}
//           ></i>
//           <h5 className="text-lg font-semibold">Pedidos</h5>
//         </div>
//         <div className="overflow-x-auto rounded-md">
//           <table
//             className={`table-auto border-collapse w-full ${
//               theme === "dark" ? "border-gray-700" : "border-gray-200"
//             }`}
//           >
//             <thead>
//               <tr
//                 className={`text-center ${
//                   theme === "dark" ? "bg-gradient-to-br from-teal-500 to-green-500 text-gray-300" : "bg-gradient-to-br from-pink-500 to-yellow-500 text-gray-800"
//                 }`}
//               >
//                 <th>#</th>
//                 <th>Trabajo</th>
//                 <th>Metros</th>
//                 <th>Clase</th>
//                 <th>Entrega Estimada</th>
//                 <th>Estado Orden</th>
//                 <th>Estado Pago</th>
//                 <th>N° Operación</th>
//                 {registrosTemporales > 0 && <th>Actualizar</th>}
//                 <th>Ver Orden</th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* list orders logic */}
//               <tr>
//                 <td
//                   colSpan={10}
//                   className={`text-center ${
//                     theme === "dark" ? "text-gray-400" : "text-gray-600"
//                   }`}
//                 >
//                   No hay pedidos realizados
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderList;




"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

type Order = {
  id: number;
  trabajo: string;
  metros: number;
  clase: string;
  entregaEstimada: string;
  estadoOrden: string;
  estadoPago: string;
  numeroOperacion: string;
  esTemporal: boolean;
};

type Props = {
  registrosTemporales: number;
};

const OrderList: React.FC<Props> = ({ registrosTemporales }) => {
  const { theme } = useTheme();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from your API
    const fetchOrders = async () => {
      try {
        const response = await fetch(
          // "https://auth-db1526.hstgr.io/get_orders.php"
          "https://srv1526-files.hstgr.io/d586583ae76e5f4c/files/public_html/"
        );
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div
      className={`p-4 h-screen ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h1 className="text-2xl font-bold mb-6 text-center">Listado de Pedidos</h1>

      <div
        className={`app-card shadow-md mb-4 border ${
          theme === "dark"
            ? "border-red-500 bg-gray-800 hover:bg-red-500/20"
            : "border-red-500 bg-gray-100 hover:bg-red-500/20"
        }`}
      >
        <div className="p-4">
          <strong className="text-2xl">IMPORTANTE</strong>
          <p>
            Si tiene órdenes en estado de pago{" "}
            <b className="text-red-600 underline">PENDIENTE</b>, revise que el
            N° Operación sea correcto.
          </p>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center mb-2">
          <i
            className={`bi bi-tags-fill text-lg mr-2 ${
              theme === "dark" ? "text-yellow-300" : "text-gray-800"
            }`}
          ></i>
          <h5 className="text-lg font-semibold">Pedidos</h5>
        </div>
        <div className="overflow-x-auto rounded-md">
          {loading ? (
            <p className="text-center">Cargando pedidos...</p>
          ) : orders.length > 0 ? (
            <table
              className={`table-auto border-collapse w-full ${
                theme === "dark" ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <thead>
                <tr
                  className={`text-center ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-teal-500 to-green-500 text-gray-300"
                      : "bg-gradient-to-br from-pink-500 to-yellow-500 text-gray-800"
                  }`}
                >
                  <th>#</th>
                  <th>Trabajo</th>
                  <th>Metros</th>
                  <th>Clase</th>
                  <th>Entrega Estimada</th>
                  <th>Estado Orden</th>
                  <th>Estado Pago</th>
                  <th>N° Operación</th>
                  {registrosTemporales > 0 && <th>Actualizar</th>}
                  <th>Ver Orden</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.trabajo}</td>
                    <td>{order.metros}</td>
                    <td>{order.clase}</td>
                    <td>{order.entregaEstimada}</td>
                    <td>{order.estadoOrden}</td>
                    <td>{order.estadoPago}</td>
                    <td>{order.numeroOperacion}</td>
                    {registrosTemporales > 0 && (
                      <td>
                        <button className="text-blue-500">Actualizar</button>
                      </td>
                    )}
                    <td>
                      <button className="text-green-500">Ver Orden</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center">No hay pedidos realizados</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderList;
