const sedes = [
  {
    nombre: "La Sabana #1 · Nunciatura",
    descripcion: "Rohrmoser, 100 metros al sur y 200 metros al oeste de la casa de Óscar Arias.",
  },
  {
    nombre: "La Sabana #2 · Paseo Colón",
    descripcion: "Paseo Colón, 225 metros al norte de la Toyota.",
  },
  {
    nombre: "La Sabana #3 · Boulevard Rohrmoser",
    descripcion: "Del AMPM del triángulo de Rohrmoser, 25 metros al norte, casa en la acera izquierda, portón crema.",
  },
];

const servicios = [
  "Cuidado especializado de larga estancia",
  "Personal capacitado las 24 horas",
  "Control y seguimiento médico",
  "Terapia física, ocupacional y nutrición",
  "Cinco tiempos de comida",
  "Lavado y planchado de ropa",
  "Actividades recreativas",
  "Wifi para residentes",
  "Baños adaptados",
  "Ambulancia privada para emergencias",
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Hogar Geriátrico La Sabana</p>
          <h1>Cuidado digno, cercano y seguro para personas adultas mayores.</h1>
          <p className="lead">
            Sitio informativo para familias que buscan conocer el hogar, sus servicios,
            sedes y condiciones de admisión.
          </p>
          <div className="actions">
            <a href="#sedes" className="primary">Ver sedes</a>
            <a href="#contacto" className="secondary">Contactar</a>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Servicios</h2>
        <ul className="service-list">
          {servicios.map((servicio) => (
            <li key={servicio}>{servicio}</li>
          ))}
        </ul>
      </section>

      <section id="sedes" className="section">
        <h2>Sedes</h2>
        <div className="cards">
          {sedes.map((sede) => (
            <article key={sede.nombre} className="card">
              <h3>{sede.nombre}</h3>
              <p>{sede.descripcion}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contacto" className="section">
        <h2>Contacto</h2>
        <div className="contact-box">
          <p>
            <strong>Teléfono:</strong> 6005-3095
          </p>
          <p>
            <strong>Horario:</strong> lunes a viernes, 8:00 a. m. a 5:00 p. m.
          </p>
          <p>
            Este sitio se encuentra en etapa inicial y requiere validación de información
            antes de publicación.
          </p>
        </div>
      </section>
    </main>
  );
}
