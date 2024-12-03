// "use client";

// import React, { useState, useEffect } from "react";

// type Order = {
//   id: number;
//   usuarios_id: number;
//   trabajo: string;
//   metros: number;
//   clase: string;
//   entregaEstimada: string;
//   estadoOrden: string;
//   estadoPago: string;
//   numeroOperacion: string;
// };

// const OrdersPage = () => {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [editingId, setEditingId] = useState<number | null>(null);
//   const [newUsuarioId, setNewUsuarioId] = useState<string>("");

//   // Obtener datos
//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await fetch("https://auth-db1526.hstgr.io/index.php?route=/sql&pos=0&db=u942345088_mapos&table=os");
//         const data = await response.json();
//         setOrders(data);
//       } catch (e) {
//         setError("Error fetching orders");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, []);

//   // Actualizar usuario_id
//   const updateUsuarioId = async (id: number) => {
//     try {
//       const response = await fetch("https://auth-db1526.hstgr.io/api.php", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ id, usuario_id: Number(newUsuarioId) }),
//       });

//       const result = await response.json();
//       if (result.success) {
//         setOrders((prev) =>
//           prev.map((order) =>
//             order.id === id ? { ...order, usuario_id: Number(newUsuarioId) } : order
//           )
//         );
//         setEditingId(null);
//         setNewUsuarioId("");
//       } else {
//         throw new Error("Failed to update");
//       }
//     } catch (e) {
//       setError("Error updating usuario_id");
//     }
//   };

//   if (loading) return <p className="text-center">Cargando pedidos...</p>;
//   if (error) return <p className="text-center text-red-500">{error}</p>;

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold mb-4">Listado de Pedidos</h1>
//       <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
//         <thead>
//           <tr className="bg-blue-500 text-white">
//             <th className="px-4 py-2">ID</th>
//             <th className="px-4 py-2">Usuario ID</th>
//             <th className="px-4 py-2">Trabajo</th>
//             <th className="px-4 py-2">Metros</th>
//             <th className="px-4 py-2">Acciones</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order) => (
//             <tr key={order.id} className="border-b">
//               <td className="px-4 py-2 text-center">{order.id}</td>
//               <td className="px-4 py-2 text-center">
//                 {editingId === order.id ? (
//                   <input
//                     type="text"
//                     value={newUsuarioId}
//                     onChange={(e) => setNewUsuarioId(e.target.value)}
//                     className="border rounded p-1 w-20 text-center"
//                   />
//                 ) : (
//                   order.usuarios_id
//                 )}
//               </td>
//               <td className="px-4 py-2 text-center">{order.trabajo}</td>
//               <td className="px-4 py-2 text-center">{order.metros}</td>
//               <td className="px-4 py-2 text-center">
//                 {editingId === order.id ? (
//                   <button
//                     onClick={() => updateUsuarioId(order.id)}
//                     className="bg-green-500 text-white px-2 py-1 rounded"
//                   >
//                     Guardar
//                   </button>
//                 ) : (
//                   <button
//                     onClick={() => setEditingId(order.id)}
//                     className="bg-blue-500 text-white px-2 py-1 rounded"
//                   >
//                     Editar
//                   </button>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default OrdersPage;



"use client";

import React, { useState, useEffect } from "react";

type Data = {
  
  usuarios_id: number;
  clientes_id: number;
};

const TestPage = () => {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://srv1526-files.hstgr.io/e49e8ac54a1d6d46/files/public_html/api.php");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Datos desde la Base de Datos</h1>
      {loading ? (
        <p>Cargando datos...</p>
      ) : (
        <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th>Usuario ID</th>
              <th>Cliente ID</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.usuarios_id} className="border-b">
                <td className="px-4 py-2 text-center">{item.usuarios_id}</td>
                <td className="px-4 py-2 text-center">{item.clientes_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TestPage;


// <?php
// $host = "mysql.hostinger.com";
// $username = "u942345088_joaquin";
// $password = "Digitaltex123";
// $database = "u942345088_testdb";

// try {
//     $conn = new PDO("mysql:host=$host;dbname=$database", $username, $password);
//     $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//     echo "<div align='center'><h1>CONECTION AVAILABLE</h1></div>"
// }
// catch(PDOException $e) {
//    echo "<div align='center'><h1>CONECTION AVAILABLE</h1></div>". $e->getMessage();
// }
// ?>