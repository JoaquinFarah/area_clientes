// import React from "react";

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

// const OrderList: React.FC<Props> = ({  registrosTemporales }) => {
//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-6">Listado de Pedidos</h1>

//       {/* Importante */}
//       <div className="app-card shadow-md mb-4 border border-red-500">
//         <div className="p-4">
//           <strong>IMPORTANTE</strong>
//           <p>
//             Si tiene órdenes en estado de pago <b>PENDIENTE</b>, revise que el
//             N° Operación sea correcto.
//           </p>
//         </div>
//       </div>

//       {/* Tabla de Pedidos */}
//       <div className="mb-4">
//         <div className="flex items-center mb-2">
//           <i className="bi bi-tags-fill text-lg mr-2"></i>
//           <h5 className="text-lg font-semibold">Pedidos</h5>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="table-auto border-collapse border border-gray-200 w-full">
//             <thead>
//               <tr className="bg-gray-100 text-center">
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
//               {/* {orders.length > 0 ? (
//                 orders.map((order) => (
//                   <tr key={order.id} className="text-center">
//                     <td>{order.id}</td>
//                     <td>{order.trabajo}</td>
//                     <td>{order.metros}</td>
//                     <td>{order.clase}</td>
//                     <td>{order.entregaEstimada}</td>
//                     <td>{order.estadoOrden}</td>
//                     <td>{order.estadoPago}</td>
//                     <td>{order.numeroOperacion}</td>
//                     {order.esTemporal && (
//                       <td>
//                         <button className="btn btn-primary">Actualizar</button>
//                       </td>
//                     )}
//                     <td>
//                       <button className="btn btn-secondary">Ver</button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={10} className="text-center">
//                     No hay pedidos realizados
//                   </td>
//                 </tr>
//               )} */}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderList;
"use client";

import React from "react";
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
  orders: Order[];
  registrosTemporales: number;
};

const OrderList: React.FC<Props> = ({ registrosTemporales }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`p-4 h-screen ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h1 className="text-2xl font-bold mb-6">Listado de Pedidos</h1>

      {/* Importante */}
      <div
        className={`app-card shadow-md mb-4 border ${
          theme === "dark"
            ? "border-red-500 bg-gray-800 bg-red-500/20" 
            : "border-red-500 bg-gray-100 bg-red-500/20"
        }`}
      >
        <div className="p-4">
          <strong>IMPORTANTE</strong>
          <p>
            Si tiene órdenes en estado de pago <b>PENDIENTE</b>, revise que el
            N° Operación sea correcto.
          </p>
        </div>
      </div>

      {/* Tabla de Pedidos */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <i
            className={`bi bi-tags-fill text-lg mr-2 ${
              theme === "dark" ? "text-yellow-300" : "text-gray-800"
            }`}
          ></i>
          <h5 className="text-lg font-semibold">Pedidos</h5>
        </div>
        <div className="overflow-x-auto">
          <table
            className={`table-auto border-collapse w-full ${
              theme === "dark" ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <thead>
              <tr
                className={`text-center ${
                  theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-800"
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
              {/* Aquí va la lógica para listar órdenes */}
              <tr>
                <td
                  colSpan={10}
                  className={`text-center ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  No hay pedidos realizados
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
