import React from "react";

const DetalleVehiculo = () => {
  return (
    <div className="bg-gray-100 p-8 font-sans relative">
      {/* Botón volver */}
      <div className="absolute top-10 left-8 z-20">
        <button
          onClick={() => (window.location.href = '/hu01')}
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
          <h1 className="text-3xl font-bold text-gray-800">VEHICULO &nbsp; AJH-123</h1>
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
                <td className="py-2 px-4">AJH-123</td>
                <td className="py-2 px-4">0</td>
                <td className="py-2 px-4">45.7623, -73.5541</td>
                <td className="py-2 px-4">2</td>
                <td className="py-2 px-4">1</td>
                <td className="py-2 px-4 font-semibold text-green-600">ACTIVO</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* KPIs */}
        <h2 className="text-xl font-semibold text-gray-700 mb-6">Indicadores Clave (KPIs)</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Estado y Alertas */}
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
            <h3 className="font-medium text-gray-700 mb-3">Estado y Alertas</h3>
            <div className="flex items-center justify-between">
              <div className="w-1/2">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold mb-2 text-green-600">ACTIVO</div>
                  <div className="text-sm text-gray-500">Estado actual</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <div className="text-3xl font-bold">2</div>
                    <div className="flex gap-1">
                      <span className="alert-dot rounded-full bg-red-500"></span>
                      <span className="alert-dot rounded-full bg-blue-500 animation-delay-1000"></span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">Alertas totales</div>
                </div>
              </div>
              <div className="w-1/2 h-48 flex flex-col justify-center">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
                    <span className="text-xs">Exceso velocidad</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                    <span className="text-xs">Frenado brusco</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-32 h-32 rounded-full border-8 border-blue-100 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full border-8 border-red-100 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-lg font-bold">2</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Velocidad */}
          <div className="bg-white items-center p-4 rounded-xl shadow-md border border-gray-100">
            <h3 className="font-medium text-gray-700 mb-3">Velocidad</h3>
            <div className="flex flex-col h-full">
              <div className="text-center mb-2">
                <div className="text-4xl font-bold">0 <span className="text-xl text-gray-500">km/h</span></div>
                <div className="text-sm text-gray-500">Velocidad actual</div>
              </div>
              <div className="speed-bar w-full my-4 rounded-full"></div>
              <div className="flex justify-between text-xs text-gray-500 px-2">
                <span>0</span>
                <span>40</span>
                <span>80</span>
                <span>120</span>
              </div>
              <div className="mt-4 flex-1">
                <div className="flex items-end h-24 gap-px">
                  <div className="flex-1 bg-blue-100 h-8"></div>
                  <div className="flex-1 bg-blue-200 h-12"></div>
                  <div className="flex-1 bg-blue-300 h-16"></div>
                  <div className="flex-1 bg-blue-400 h-20"></div>
                  <div className="flex-1 bg-blue-500 h-12"></div>
                  <div className="flex-1 bg-blue-300 h-8"></div>
                  <div className="flex-1 bg-blue-100 h-4"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1 px-2">
                  <span>L</span>
                  <span>M</span>
                  <span>M</span>
                  <span>J</span>
                  <span>V</span>
                  <span>S</span>
                  <span>D</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ubicación y Rotaciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
            <h3 className="font-medium text-gray-700 mb-3">Ubicación</h3>
            <div className="h-48 bg-gray-100 rounded-lg flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="text-center p-4 z-10">
                <div className="text-lg font-semibold mb-2">45.7623, -73.5541</div>
                <div className="text-sm text-gray-500 mb-4">Ubicación actual</div>
                <a
                  href="https://www.google.com/maps?q=45.7623,-73.5541"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition"
                >
                  Ver en mapa
                </a>
              </div>
            </div>
          </div>

          {/* Rotaciones */}
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
            <h3 className="font-medium text-gray-700 mb-3">Rotaciones</h3>
            <div className="flex flex-col items-center justify-center h-48">
              <div className="relative w-32 h-32 mb-4">
                <div className="absolute inset-0 rotation-gauge rounded-full"></div>
                <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold">1</div>
                    <div className="text-xs text-gray-500">rotación</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                  <span className="text-xs">Realizadas</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-gray-200 mr-2"></span>
                  <span className="text-xs">Restantes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .speed-bar {
          height: 4px;
          background: linear-gradient(90deg, #3B82F6 0%, #10B981 50%, #EF4444 100%);
        }
        .rotation-gauge {
          background: conic-gradient(#10B981 72deg, #E5E7EB 0deg);
        }
        .alert-dot {
          width: 10px;
          height: 10px;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default DetalleVehiculo;
