import Link from "next/link";

export default function Home() {
  return (
     <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">FleetGuard 360 Feature 5</h1>
      <nav className="flex flex-col items-center gap-4">
        <Link href="/hu01" className="text-blue-600 hover:underline text-lg">
          FLOTAS ACTIVAS
        </Link>
        <Link href="/hu02" className="text-blue-600 hover:underline text-lg">
          FLOTAS INACTIVAS
        </Link>
        <Link href="/hu03" className="text-blue-600 hover:underline text-lg">
          DESCRIPCIÓN FLOTA INDIVIDUAL
        </Link>
      </nav>
    </div>
  );
}
