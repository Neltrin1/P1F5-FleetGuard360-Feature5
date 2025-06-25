// pages/fleets/[placa].tsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

interface Fleet {
  id: number;
  plate: string;
  name: string;
  type: string;
  status: string;
  location: string;
}

const FleetDetail = () => {
  const router = useRouter();
  const { placa } = router.query;

  const [fleet, setFleet] = useState<Fleet | null>(null);

  useEffect(() => {
    if (placa) {
      axios
        .get<Fleet>(`${process.env.NEXT_PUBLIC_API_URL}/api/fleets/plate/${placa}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => setFleet(res.data))
        .catch((err) => console.error("Error al obtener flota:", err));
    }
  }, [placa]);

  if (!fleet) return <div>Cargando...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Detalles de la Flota</h1>
      <p><strong>ID:</strong> {fleet.id}</p>
      <p><strong>Placa:</strong> {fleet.plate}</p>
      <p><strong>Nombre:</strong> {fleet.name}</p>
      <p><strong>Tipo:</strong> {fleet.type}</p>
      <p><strong>Estado:</strong> {fleet.status}</p>
      <p><strong>Ubicación:</strong> {fleet.location}</p>
    </div>
  );
};

export default FleetDetail;
