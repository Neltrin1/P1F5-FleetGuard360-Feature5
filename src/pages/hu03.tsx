export default function hu03() {
  return (
     <div className="contenedor-principal">

    <header className="titulo-contenedor">
      <h1 className="titulo">FLOTA</h1>
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
            <th>ESTADO</th>
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
            <td>Activo</td>
            <td>0</td>
            <td>45.7623, -73.6541</td>
            <td>2</td>
            <td>1</td>
            <td>1h 20m</td>
          </tr>
         
        </tbody>
      </table>
    </section>
  </div>
  );
}