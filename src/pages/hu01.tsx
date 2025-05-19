export default function hu01() {
  return (
    <div className="contenedor-principal">

    <header className="titulo-contenedor">
      <h1 className="titulo">FLOTAS ACTIVAS</h1>
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
            <th>VELOCIDAD INICIAL (km/h)</th>
            <th>UBICACIÓN INICIAL</th>
            <th>NÚMERO DE ALERTAS</th>
            <th>NÚMERO DE ROTACIONES</th>
            <th>DURACIÓN DEL RECORRIDO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AJH-123</td>
            <td>0</td>
            <td>45.7623, -73.6541</td>
            <td>2</td>
            <td>1</td>
            <td>1h 20m</td>
          </tr>
          <tr>
            <td>CDM-854</td>
            <td>0</td>
            <td>-33.9296, 18.4323</td>
            <td>4</td>
            <td>0</td>
            <td>45m</td>
          </tr>
          <tr>
            <td>HYJ-069</td>
            <td>0</td>
            <td>51.5074, -0.1278</td>
            <td>2</td>
            <td>2</td>
            <td>2h 10m</td>
          </tr>
          <tr>
            <td>OFG-135</td>
            <td>0</td>
            <td>292 865-0126</td>
            <td>1</td>
            <td>1</td>
            <td>1h 45m</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
  );
}