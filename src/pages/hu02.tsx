import React, { useEffect, useState } from "react";
import axios from "axios";

interface VehicleData {
  plate: string;
  speed: number;
  location: string;
  alerts: number;
  rotations: number;
  status: "ACTIVO" | "INACTIVO";
}

const VehicleDetail: React.FC = () => {
  const [vehicle, setVehicle] = useState<VehicleData | null>(null);

  useEffect(() => {
    axios.get<VehicleData>("/api/vehicle")
      .then(response => setVehicle(response.data))
      .catch(error => console.error("Error al obtener datos del vehículo:", error));
  }, []);

  if (!vehicle) {
    return <div className="p-8">Cargando información del vehículo...</div>;
  }

  return (
    <div className="bg-gray-100 p-8 font-sans relative">
      {/* Botón de regreso */}
      <div className="absolute top-10 left-8 z-20">
        <button onClick={() => window.history.back()} className="text-gray-700 hover:text-black bg-transparent">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-9">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </button>
      </div>

      {/* Título */}
      <div className="relative z-10 max-w-6xl mx-auto -mb-6">
        <div className="bg-white shadow-lg rounded-2xl pt-10 pb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-800">VEHÍCULO &nbsp; {vehicle.plate}</h1>
        </div>
      </div>

      {/* Contenedor principal */}
      <div className="w-full max-w-7xl mx-auto bg-white rounded-3xl shadow-md pt-12 px-8 pb-8 mt-2 min-h-[600px]">
        <div className="flex justify-start items-center mb-4 gap-2 flex-wrap">
          <button className="bg-sky-200 text-black px-4 py-2 rounded-lg text-sm hover:bg-sky-500">
            ACTUALIZAR INFORMACIÓN
          </button>
        </div>

        {/* Tabla de datos */}
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full text-sm text-center text-gray-700">
            <thead className=" text-gray-500 uppercase text-center">
              <tr>
                <th className="py-2 px-4">PLACA</th>
                <th className="py-2 px-4">VELOCIDAD(km/h)</th>
                <th className="py-2 px-4">UBICACIÓN INICIAL</th>
                <th className="py-2 px-4">NÚMERO DE ALERTAS</th>
                <th className="py-2 px-4">NÚMERO DE ROTACIONES</th>
                <th className="py-2 px-4">ESTADO</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="py-2 px-4">{vehicle.plate}</td>
                <td className="py-2 px-4">{vehicle.speed}</td>
                <td className="py-2 px-4">{vehicle.location}</td>
                <td className="py-2 px-4">{vehicle.alerts}</td>
                <td className="py-2 px-4">{vehicle.rotations}</td>
                <td className="py-2 px-4 font-semibold text-green-600">{vehicle.status}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Aquí puedes incluir tus componentes de KPIs, mapas, rotaciones, etc. */}

      </div>
    </div>
  );
};

export default VehicleDetail;
