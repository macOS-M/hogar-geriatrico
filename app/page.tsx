import Image from "next/image";
import ParallaxHero from "./components/ParallaxHero";
import logomark from "../public/logo.png";

const sedes = [
  {
    nombre: "Nunciatura",
    numero: "La Sabana #1",
    descripcion: "Rohrmoser, 100 metros al sur y 200 metros al oeste de la casa de Óscar Arias.",
  },
  {
    nombre: "Paseo Colón",
    numero: "La Sabana #2",
    descripcion: "Paseo Colón, 225 metros al norte de la Toyota.",
  },
  {
    nombre: "Boulevard Rohrmoser",
    numero: "La Sabana #3",
    descripcion: "Del AMPM del triángulo de Rohrmoser, 25 metros al norte, casa en la acera izquierda, portón crema.",
  },
];

const cuidados = [
  {
    titulo: "Salud y acompañamiento",
    descripcion: "Apoyo profesional para las necesidades de cada persona.",
    servicios: ["Control y seguimiento médico", "Medicina general y enfermería", "Terapia física y ocupacional"],
  },
  {
    titulo: "Alimentación y bienestar",
    descripcion: "La tranquilidad también está en los pequeños cuidados.",
    servicios: ["Cinco tiempos de comida", "Menú balanceado y servicio de nutrición", "Cuidado de la imagen personal"],
  },
  {
    titulo: "Comodidad en el día a día",
    descripcion: "Un entorno pensado para vivir con mayor comodidad.",
    servicios: ["Habitaciones privadas y compartidas", "Baños adaptados", "Lavado y planchado de ropa"],
  },
  {
    titulo: "Compañía y vida cotidiana",
    descripcion: "Espacio para compartir, conversar y seguir conectado.",
    servicios: ["Actividades recreativas", "Wifi para residentes", "Cuidado especializado de larga estancia"],
  },
];

const preguntas = [
  {
    pregunta: "¿Cómo se define la mensualidad?",
    respuesta: "La mensualidad varía según el nivel de dependencia de la persona adulta mayor y el tipo de habitación. Llámenos para consultar una cotización y conocer la disponibilidad en cada sede.",
  },
  {
    pregunta: "¿Qué debo saber sobre los costos adicionales?",
    respuesta: "No se incluyen los medicamentos que no suministre la CCSS ni los complementos nutricionales. Los familiares se encargan de las citas médicas; el acompañamiento tiene un costo adicional y requiere coordinación. Consulte las condiciones y el posible costo del servicio de ambulancia privada para emergencias.",
  },
  {
    pregunta: "¿Qué documentos se necesitan para el ingreso?",
    respuesta: "Se solicita la cédula original de la persona adulta mayor, una copia de la cédula de su representante legal, la epicrisis y la lista de medicamentos con dosis y horarios. Al conversar con el hogar, le indicaremos cómo entregarlos de forma privada.",
  },
  {
    pregunta: "¿Podemos conocer el hogar antes de decidir?",
    respuesta: "Comuníquese con nosotros para coordinar una visita y consultar la sede que le interesa. También podrá preguntar por la disponibilidad de habitaciones, los horarios de visita de familiares y los servicios de cada sede.",
  },
];

export default function Home() {
  return (
    <main>
      <ParallaxHero />

      <div className="page-shell">
        <section className="section welcome-section" aria-labelledby="welcome-title">
          <div className="welcome-copy">
            <p className="section-kicker">La vida en La Sabana</p>
            <h2 id="welcome-title">Sentirse en casa.<br />Sentirse acompañado.</h2>
            <p className="section-lead">Elegir un hogar es una decisión de familia. Aquí, el cuidado parte de algo esencial: conocer a cada persona y respetar su historia, su autonomía y su forma de vivir.</p>
            <a className="text-link" href="#servicios">Conozca nuestros cuidados <span aria-hidden="true">↗</span></a>
          </div>
          <aside className="care-note" aria-label="Cuidado residencial las 24 horas">
            <span className="care-note-label">A su lado, cada día</span>
            <p className="care-hours">24<span>horas</span></p>
            <h3>De día y de noche,<br />hay alguien cerca.</h3>
            <p>Personal capacitado para acompañar y cuidar a las personas adultas mayores.</p>
            <span className="care-note-foot">Cuidado residencial de larga estancia</span>
          </aside>
        </section>

        <section id="servicios" className="section services-section" aria-labelledby="services-title">
          <header className="section-heading">
            <h2 id="services-title">Cuidar es estar en los detalles.</h2>
            <p className="section-lead">Desde la atención personal hasta la hora de compartir la mesa, cada parte del día cuenta.</p>
          </header>
          <div className="care-grid">
            {cuidados.map((cuidado) => (
              <article className="care-group" key={cuidado.titulo}>
                <h3>{cuidado.titulo}</h3>
                <p>{cuidado.descripcion}</p>
                <ul>
                  {cuidado.servicios.map((servicio) => <li key={servicio}>{servicio}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <p className="service-note">La frecuencia de atención profesional y la disponibilidad de los servicios se consultan por sede. El cuidado las 24 horas no implica la presencia permanente de todos los profesionales.</p>
        </section>

        <section id="sedes" className="section locations-section" aria-labelledby="locations-title">
          <header className="section-heading">
            <p className="section-kicker">Nuestras sedes</p>
            <h2 id="locations-title">Tres hogares.<br />La misma calidez.</h2>
            <p className="section-lead">Encuentre una sede cercana a su familia. Conversemos para conocer sus necesidades y coordinar una visita.</p>
          </header>
          <div className="location-list">
            {sedes.map((sede) => (
              <article key={sede.nombre} className="location-row">
                <div className="location-name">
                  <span>{sede.numero}</span>
                  <h3>{sede.nombre}</h3>
                </div>
                <p>{sede.descripcion}</p>
                <a className="location-link" href="#contacto" aria-label={`Consultar por la sede ${sede.nombre}`}><span>Consultar sede</span><span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
          <p className="location-note">Consulte las habitaciones y los servicios disponibles en cada sede.</p>
        </section>

        <section className="section questions-section" aria-labelledby="questions-title">
          <header>
            <h2 id="questions-title">Decidir con tranquilidad.</h2>
            <p className="section-lead">Es natural tener preguntas. Empecemos por las que pueden ayudarle a dar el siguiente paso.</p>
          </header>
          <div className="questions-list">
            {preguntas.map(({ pregunta, respuesta }) => (
              <details key={pregunta} className="question">
                <summary>{pregunta}<span className="question-toggle" aria-hidden="true" /></summary>
                <p>{respuesta}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contacto" className="section contact-section" aria-labelledby="contact-title">
          <p className="section-kicker">Estamos para escucharle</p>
          <h2 id="contact-title">El primer paso es conversar.</h2>
          <p className="section-lead">Cuéntenos qué necesita su familia. Le orientamos sobre nuestros cuidados y cómo coordinar una visita.</p>
          <a className="contact-phone" href="tel:+50660053095">Llamar al 6005-3095 <span aria-hidden="true">↗</span></a>
          <p className="contact-hours">Horario de consultas: lunes a viernes,<br className="mobile-break" /> de 8:00 a. m. a 5:00 p. m.</p>
        </section>

        <footer className="site-footer">
          <a className="footer-brand" href="#inicio">
            <Image src={logomark} alt="" width={48} sizes="48px" />
            <span>Hogar Geriátrico<br /><strong>La Sabana</strong></span>
          </a>
          <p>Bienestar, compañía y confianza.</p>
          <a className="text-link" href="#inicio">Volver al inicio <span aria-hidden="true">↑</span></a>
          <small>La información del sitio está pendiente de validación antes de su publicación.</small>
        </footer>
      </div>
    </main>
  );
}
