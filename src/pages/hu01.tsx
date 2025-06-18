import React, { useEffect, useState } from "react";
import axios from "axios";

interface FleetReport {
  id: number;
  placa: string;
  velocidadInicial: number;
  ubicacionInicial: string;
  numeroAlertas: number;
  numeroRotaciones: number;
  duracionRecorrido: string;
}

const FleetInfo: React.FC = () => {
  const [reports, setReports] = useState<FleetReport[]>([]);

  useEffect(() => {
    axios.get<FleetReport[]>("/api/reports", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      setReports(response.data);
    })
    .catch((error) => {
      console.error("Error al obtener reportes:", error);
    });
  }, []);

  return (
    <div className="bg-gray-100 p-8 font-sans min-h-screen">
      <div className="relative z-10 max-w-6xl mx-auto -mb-6">
        <div className="bg-white shadow-lg rounded-2xl pt-10 pb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-800">INFORMACIÓN FLOTAS</h1>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto bg-white rounded-3xl shadow-md pt-12 px-8 pb-8 mt-2 min-h-[600px]">
        <div className="flex justify-end items-center mb-4 gap-2 flex-wrap">
          <button className="bg-sky-200 text-black px-4 py-2 rounded-lg text-sm hover:bg-sky-500">
            ACTUALIZAR INFORMACIÓN
          </button>
          <input
            type="text"
            placeholder="Buscar..."
            className="bg-gray-100 pl-9 pr-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
          />
          <select className="bg-gray-100 border border-gray-300 rounded-lg px-3 py-1 text-sm">
            <option>Short by A-Z</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-center text-gray-700">
            <thead className="text-gray-500 uppercase text-center">
              <tr>
                <th className="px-4 py-2">PLACA</th>
                <th className="px-4 py-2">VELOCIDAD INICIAL (km/h)</th>
                <th className="px-4 py-2">UBICACIÓN INICIAL</th>
                <th className="px-4 py-2">NÚMERO DE ALERTAS</th>
                <th className="px-4 py-2">NÚMERO DE ROTACIONES</th>
                <th className="px-4 py-2">DURACIÓN DEL RECORRIDO</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {reports.map((report) => (
                <tr key={report.id}>
                  <td className="px-4 py-2">{report.placa}</td>
                  <td className="px-4 py-2">{report.velocidadInicial}</td>
                  <td className="px-4 py-2">{report.ubicacionInicial}</td>
                  <td className="px-4 py-2">{report.numeroAlertas}</td>
                  <td className="px-4 py-2">{report.numeroRotaciones}</td>
                  <td className="px-4 py-2">{report.duracionRecorrido}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FleetInfo;
