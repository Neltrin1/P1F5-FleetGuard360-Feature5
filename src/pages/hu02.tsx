export default function hu02() {
  return (
    <div className="contenedor-principal">

    <header className="titulo-contenedor">
      <h1 className="titulo">FLOTAS INACTIVAS</h1>
    </header>

    <section className="panel-flotas">
      <div className="barra-superior">
        <input type="text" className="buscador" placeholder="🔍 Search" />
        <select className="ordenar">
          <option value="az">Sort by: A-Z</option>
          <option value="za">Sort by: Z-A</option>
        </select>
      </div>

      <table className="tabla-flotas">
        <thead>
          <tr>
            <th>PLACA</th>
            <th>FECHA Y HORA DE ÚLTIMA ACTIVIDAD</th>
            <th>ESTADO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AJH-123</td>
            <td>23/03/2005  03:20 PM</td>
            <td>Disponible</td>
          </tr>
          <tr>
            <td>CDM-854</td>
            <td>13/05/2025   09:45 AM</td>
            <td>No disponible</td>
          </tr>
          <tr>
            <td>HYJ-069</td>
            <td>11/09/2001    07:45 AM</td>
            <td>Disponible</td>
          </tr>
          <tr>
            <td>OFG-135</td>
            <td>13/05/2025    03:42 AM</td>
            <td>No disponible</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
  );
}