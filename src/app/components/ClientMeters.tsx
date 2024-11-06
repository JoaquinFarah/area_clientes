

const ClientMeters = () => {
    return (
      <div className="w-full max-w-md mx-auto mt-10">
        <h2 className="text-center text-lg mb-4">Metros</h2>
        <p className="text-center text-sm text-gray-400 mb-2">Últimos 3 meses</p>
        
        {/* Use library chart.js or recharts for graphics */}
        <div className="relative w-64 h-64 mx-auto bg-pink-700 rounded-full flex items-center justify-center">
          <div className="absolute top-4 right-4 w-8 h-8 bg-gray-700 rounded-full"></div>
        </div>
  
        <div className="mt-6">
          <div className="flex items-center text-sm text-gray-400">
            <span className="w-4 h-4 bg-pink-700 mr-2 rounded"></span>
            Octubre/2024
          </div>
          <div className="flex items-center text-sm text-gray-400 mt-2">
            <span className="w-4 h-4 bg-green-700 mr-2 rounded"></span>
            Septiembre/2024
          </div>
          <div className="flex items-center text-sm text-gray-400 mt-2">
            <span className="w-4 h-4 bg-gray-600 mr-2 rounded"></span>
            Sin datos
          </div>
        </div>
      </div>
    );
  };
  
  export default ClientMeters;
  