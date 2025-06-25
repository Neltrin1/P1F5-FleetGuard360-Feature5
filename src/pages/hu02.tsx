import { GetServerSideProps } from "next";
import React from "react";
import axios from "axios";

interface FleetData {
  plate: string;
  velocidadInicial: number;
  ubicacionInicial: string;
  numeroAlertas: number;
  numeroRotaciones: number;
  status: string;
}

const DetalleVehiculo = ({ fleet }: { fleet: FleetData }) => {
  return (
    <div className="bg-gray-100 p-8 font-sans relative">
      {/* Botón volver */}
      <div className="absolute top-10 left-8 z-20">
        <button
          onClick={() => (window.location.href = "/hu01")}
          className="text-gray-700 hover:text-black bg-transparent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>
      </div>

      {/* Título */}
      <div className="relative z-10 max-w-6xl mx-auto -mb-6">
        <div className="bg-white shadow-lg rounded-2xl pt-10 pb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-800">VEHÍCULO &nbsp; {fleet.plate}</h1>
        </div>
      </div>

      {/* Tabla */}
      <div className="w-full max-w-7xl mx-auto bg-white rounded-3xl shadow-md pt-12 px-8 pb-8 mt-2 min-h-[600px]">
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full text-sm text-center text-gray-700">
            <thead className="text-gray-500 uppercase text-center">
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
                <td className="py-2 px-4">{fleet.plate}</td>
                <td className="py-2 px-4">{fleet.velocidadInicial}</td>
                <td className="py-2 px-4">{fleet.ubicacionInicial}</td>
                <td className="py-2 px-4">{fleet.numeroAlertas}</td>
                <td className="py-2 px-4">{fleet.numeroRotaciones}</td>
                <td className={`py-2 px-4 font-semibold ${fleet.status === "Activo" ? "text-green-600" : "text-red-600"}`}>
                  {fleet.status.toUpperCase()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DetalleVehiculo;

// Traer datos desde el backend
export const getServerSideProps: GetServerSideProps = async (context) => {
  const plate = context.params?.plate;
  try {
    const res = await axios.get(`https://api-fleetguard360-doc.onrender.com/api/fleets/${plate}`, {
      headers: {
        Authorization: `Bearer ${process.env.TOKEN || ""}`, // Puedes pasar el token de manera segura si tienes auth
      },
    });
    return { props: { fleet: res.data } };
  } catch {
    return { notFound: true };
  }
};
