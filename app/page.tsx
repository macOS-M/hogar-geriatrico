import ParallaxHero from "./components/ParallaxHero";

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

const cuidados = [
  {
    titulo: "Cuidado cercano, cada día",
    descripcion: "Cuidado especializado de larga estancia y personal capacitado las 24 horas. Acompañamiento para las necesidades de cada residente, con control y seguimiento médico.",
    imagen: "https://picsum.photos/seed/sabana-cuidado/900/700",
    icono: "heart",
  },
  {
    titulo: "Bienestar en cada etapa",
    descripcion: "Terapia física, ocupacional y nutrición forman parte de nuestros servicios. Cinco tiempos de comida y apoyo en las tareas cotidianas para vivir con tranquilidad.",
    imagen: "https://picsum.photos/seed/sabana-bienestar/900/700",
    icono: "leaf",
  },
  {
    titulo: "Un espacio para compartir",
    descripcion: "Actividades recreativas, compañía y espacios para disfrutar del día a día. Tres sedes para que su familia encuentre un hogar cercano.",
    imagen: "https://picsum.photos/seed/sabana-compartir/900/700",
    icono: "home",
  },
];

export default function Home() {
  return (
    <main>
      <ParallaxHero />

      <div className="page-shell">
        <section id="servicios" className="section section-intro">
          <header className="body-intro">
          <p className="section-kicker">Atención integral</p>
          <h2>Todo lo necesario para vivir con tranquilidad.</h2>
          <p className="section-lead">
            Un equipo cercano acompaña cada etapa del día, respetando la
            historia, autonomía y necesidades de cada residente.
          </p>
          </header>
          <div className="feature-rows">
            {cuidados.map((cuidado) => (
              <article className="feature-row" key={cuidado.titulo}>
                {/* Decorative placeholder: replace with an authorized photograph. */}
                <div className="feature-photo" style={{ backgroundImage: `url("${cuidado.imagen}")` }} aria-hidden="true">
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    {cuidado.icono === "heart" ? (
                      <path d="M32 53 10 32C-4 17 17 3 32 20 47 3 68 17 54 32Z" />
                    ) : cuidado.icono === "leaf" ? (
                      <><path d="M52 10C18 5 6 23 17 43S58 45 52 10Z" /><path d="M12 55 42 24M25 41V27M25 41H39" /></>
                    ) : (
                      <><path d="m7 29 25-21 25 21M14 25v30h36V25" /><path d="M26 55V37h12v18" /></>
                    )}
                  </svg>
                </div>
                <div className="feature-copy">
                  <h3>{cuidado.titulo}</h3>
                  <p>{cuidado.descripcion}</p>
                </div>
              </article>
            ))}
          </div>
          <ul className="service-list">
            {servicios.map((servicio, index) => (
              <li key={servicio}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                {servicio}
              </li>
            ))}
          </ul>
        </section>

        <section id="sedes" className="section">
          <p className="section-kicker">Tres ubicaciones</p>
          <h2>Un hogar cerca de su familia.</h2>
          <div className="cards">
            {sedes.map((sede, index) => (
              <article key={sede.nombre} className="card">
                <span className="card-number" aria-hidden="true">0{index + 1}</span>
                <h3>{sede.nombre}</h3>
                <p>{sede.descripcion}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contacto" className="section contact-section">
          <div>
            <p className="section-kicker">Estamos para escucharle</p>
            <h2>Conversemos sobre el cuidado que su familia necesita.</h2>
          </div>
          <div className="contact-box">
            <a href="tel:+50660053095">6005-3095</a>
            <p>Lunes a viernes, de 8:00 a. m. a 5:00 p. m.</p>
            <small>
              La información del sitio está pendiente de validación antes de su publicación.
            </small>
          </div>
        </section>
      </div>
    </main>
  );
}
