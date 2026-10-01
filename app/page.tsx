import Image from "next/image";
import { ArrowUp, ArrowUpRight, Clock3, HeartPulse, House, MessageCircle, Phone, Utensils, UsersRound } from "lucide-react";
import ParallaxHero from "./components/ParallaxHero";
import SedeSelector from "./components/SedeSelector";
import ActivitiesSection from "./components/ActivitiesSection";
import TrainingSection from "./components/TrainingSection";
import logomark from "../public/logo.png";

const sedes = [
  {
    nombre: "Paseo Colón",
    images: [{
              src: "/PaseoColon/patio1.jpg",
              alt: "Patio de la sede Paseo Colón",
            },
            {
              src: "/PaseoColon/patio2.jpg",
              alt: "Patio de la sede Paseo Colón",
            },
            {
              src: "/PaseoColon/patio3.jpg",
              alt: "Patio de la sede Paseo Colón",
            },
            {
              src: "/PaseoColon/sala1.jpg",
              alt: "Sala de la sede Paseo Colón",
            },
            {
              src: "/PaseoColon/sala2.jpg",
              alt: "Sala de la sede Paseo Colón",
            },
            {
              src: "/PaseoColon/comedor1.jpg",
              alt: "Comedor de la sede Paseo Colón"
            },
            {
              src: "/PaseoColon/cuarto1.jpg",
              alt: "Cuarto de la sede Paseo Colón"
            },
            {
              src: "/PaseoColon/bano1.jpg",
              alt: "Baño de la sede Paseo Colón"
            }],
    numero: "Hogar Geriátrico La Sabana",
    descripcion: "Paseo Colón, 225 metros al norte de la Toyota.",
  },
  {
    nombre: "Boulevard Rohrmoser",
    images: [
      {
        src: "/triangulo/patio1.jpg",
        alt: "Patio de la sede Boulevard Rohrmoser"
      },
      {
        src: "/triangulo/patio2.jpg",
        alt: "Patio de la sede Boulevard Rohrmoser"
      },
      {
        src: "/triangulo/sala1.jpg",
        alt: "Sala de la sede Boulevard Rohrmoser"
      },
      {
        src: "/triangulo/sala2.jpg",
        alt: "Sala de la sede Boulevard Rohrmoser"
      },
      {
        src: "/triangulo/cuarto1.jpg",
        alt: "Cuarto de la sede Boulevard Rohrmoser"
      },
      {
        src: "/triangulo/bano1.jpg",
        alt: "Baño de la sede Boulevard Rohrmoser"
      }
    ],
    numero: "Hogar Geriátrico La Sabana",
    descripcion: "Del AMPM del triángulo de Rohrmoser, 25 metros al norte, casa en la acera izquierda, portón crema.",
  },
  {
    nombre: "Nunciatura",
    images: [],
    numero: "Hogar Geriátrico La Sabana",
    descripcion: "Rohrmoser, 100 metros al sur y 200 metros al oeste de la casa de Óscar Arias.",
  },
];

const cuidados = [
  {
    titulo: "Salud y acompañamiento",
    icon: HeartPulse,
    descripcion: "Apoyo profesional para las necesidades de cada persona.",
    servicios: ["Control y seguimiento médico", "Medicina general y enfermería", "Terapia física y ocupacional", "Ambulancia privada para emergencias incluida"],
  },
  {
    titulo: "Alimentación y bienestar",
    icon: Utensils,
    descripcion: "La tranquilidad también está en los pequeños cuidados.",
    servicios: ["Cinco tiempos de comida", "Menú balanceado y servicio de nutrición", "Cuidado de la imagen personal"],
  },
  {
    titulo: "Comodidad en el día a día",
    icon: House,
    descripcion: "Un entorno pensado para vivir con mayor comodidad.",
    servicios: ["Habitaciones privadas y compartidas", "Baños adaptados", "Lavado y planchado de ropa"],
  },
  {
    titulo: "Compañía y vida cotidiana",
    icon: UsersRound,
    descripcion: "Espacio para compartir, conversar y seguir conectado.",
    servicios: ["Actividades recreativas", "Wifi para residentes", "Cuidado especializado de larga estancia"],
  },
];

const preguntas = [
  {
    pregunta: "¿Cómo se define la mensualidad?",
    respuesta: "La mensualidad varía según el nivel de dependencia de la persona adulta mayor y el tipo de habitación. Contáctenos por WhatsApp para consultar una cotización y conocer la disponibilidad en cada sede.",
  },
  {
    pregunta: "¿Qué debo saber sobre los costos adicionales?",
    respuesta: "No se incluyen los medicamentos que no suministre la CCSS ni los complementos nutricionales. Los familiares se encargan de las citas médicas; el acompañamiento tiene un costo adicional y requiere coordinación.",
  },
  {
    pregunta: "¿Qué documentos se necesitan para el ingreso?",
    respuesta: "Se solicita la cédula original de la persona adulta mayor, una copia de la cédula de su representante legal, la epicrisis y la lista de medicamentos con dosis y horarios. Al conversar con el hogar, le indicaremos cómo entregarlos de forma privada.",
  },
  {
    pregunta: "¿Podemos conocer el hogar antes de decidir?",
    respuesta: "Contáctenos por WhatsApp para coordinar una visita y consultar la sede que le interesa. También podrá preguntar por la disponibilidad de habitaciones, los horarios de visita de familiares y los servicios de cada sede.",
  },
];

export default function Home() {
  return (
    <main>
      <ParallaxHero />

      <div className="page-shell">
        <section className="section welcome-section" aria-labelledby="welcome-title">
          <div className="welcome-intro">
            <div className="welcome-copy">
              <p className="section-kicker">La vida en La Sabana</p>
              <h2 className="section-title" id="welcome-title">Un hogar para<br />seguir disfrutando<br /><span>la vida.</span></h2>
              <p className="welcome-message">Compartir una conversación, disfrutar del jardín y sentirse acompañado. Aquí, cada persona tiene su lugar.</p>
              <a className="welcome-action" href="#sedes">Encuentre su próximo hogar <ArrowUpRight className="link-arrow" aria-hidden="true" strokeWidth={1.8} /></a>
            </div>
            <div className="welcome-photo">
              <Image src="/Actividades/actividad2.jpg" alt="Residentes y acompañantes de La Sabana reunidos en el jardín" fill sizes="(max-width: 760px) 90vw, 650px" />
            </div>
          </div>
          <div className="welcome-values">
            <div className="welcome-value"><House size={22} strokeWidth={1.6} aria-hidden="true" /><div><h3>Sentirse en casa</h3><p>Espacios para vivir y compartir.</p></div></div>
            <div className="welcome-value"><UsersRound size={22} strokeWidth={1.6} aria-hidden="true" /><div><h3>Estar acompañado</h3><p>Compañía en los momentos cotidianos.</p></div></div>
            <div className="welcome-value"><HeartPulse size={22} strokeWidth={1.6} aria-hidden="true" /><div><h3>Cuidado día y noche</h3><p>Personal a su lado las 24 horas.</p></div></div>
          </div>
        </section>

        <section id="servicios" className="section services-section" aria-labelledby="services-title">
          <header className="services-heading">
            <p className="section-kicker">Nuestros cuidados</p>
            <h2 className="section-title" id="services-title">Cuidar es estar<br />en los <span>detalles.</span></h2>
            <p className="section-lead">Desde la atención personal hasta la hora de compartir la mesa, cada parte del día cuenta.</p>
            <a className="services-action text-link" href="#contacto">Contáctenos para hablar sobre sus necesidades <ArrowUpRight className="link-arrow" aria-hidden="true" strokeWidth={1.8} /></a>
          </header>
          <div className="care-grid">
            {cuidados.map((cuidado) => (
              <article className="care-group" key={cuidado.titulo}>
                <div className="care-group-heading">
                  <span className="care-group-icon" aria-hidden="true"><cuidado.icon size={22} strokeWidth={1.7} /></span>
                  <h3>{cuidado.titulo}</h3>
                </div>
                <p>{cuidado.descripcion}</p>
                <ul>
                  {cuidado.servicios.map((servicio) => <li key={servicio}>{servicio}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="sedes" className="section locations-section" aria-labelledby="locations-title">
          <header className="locations-heading">
            <div><p className="section-kicker">Encuentre su hogar</p><h2 className="section-title" id="locations-title">Nuestras <span>sedes.</span></h2></div>
          </header>
          <SedeSelector sedes={sedes} />
          <p className="location-note">Consulte las habitaciones y los servicios disponibles en cada sede.</p>
        </section>

        <ActivitiesSection />
        <TrainingSection />

        <section className="section questions-section" aria-labelledby="questions-title">
          <header>
            <p className="section-kicker">Preguntas frecuentes</p>
            <h2 className="section-title" id="questions-title">Decidir con<br /><span>tranquilidad.</span></h2>
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
          <div className="contact-copy">
            <p className="section-kicker">Estamos para escucharle</p>
            <h2 className="section-title" id="contact-title">El primer paso es <span>contactarnos.</span></h2>
            <p className="section-lead">Cuéntenos por WhatsApp qué necesita su familia. Le orientamos sobre nuestros cuidados y cómo coordinar una visita.</p>
          </div>
          <div className="contact-card">
            <p className="contact-card-label">Contáctenos por WhatsApp</p>
            <a className="contact-number" href="https://wa.me/50660053095" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp al +506 6005-3095">+506 6005-3095</a>
            <a className="contact-phone" href="https://wa.me/50660053095" target="_blank" rel="noopener noreferrer"><MessageCircle size={18} aria-hidden="true" /><span>Enviar un mensaje</span><ArrowUpRight className="link-arrow" aria-hidden="true" /></a>
            <div className="contact-hours"><Clock3 size={18} strokeWidth={1.7} aria-hidden="true" /><div><span>Horario de consultas</span><p>Lunes a viernes · 8:00 a. m. a 5:00 p. m.</p></div></div>
            <a className="text-link contact-sedes" href="#sedes">Conocer nuestras sedes <ArrowUpRight className="link-arrow" aria-hidden="true" /></a>
          </div>
        </section>

        <footer className="site-footer">
          <a className="footer-brand" href="#inicio">
            <Image src={logomark} alt="" width={48} sizes="48px" />
            <span>Hogar Geriátrico<br /><strong>La Sabana</strong></span>
          </a>
          <p>Bienestar, compañía y confianza.</p>
          <a className="text-link" href="#inicio">Volver al inicio <ArrowUp className="link-arrow" aria-hidden="true" strokeWidth={1.8} /></a>
          <small>La información del sitio está pendiente de validación antes de su publicación.</small>
        </footer>
      </div>
      <a className="whatsapp-float" href="https://wa.me/50660053095" target="_blank" rel="noopener noreferrer" aria-label="Contactar a La Sabana por WhatsApp">
        <span className="whatsapp-symbol" aria-hidden="true"><MessageCircle size={30} strokeWidth={1.8} /><Phone size={15} strokeWidth={2} /></span>
        <span className="whatsapp-float-label">WhatsApp</span>
      </a>
    </main>
  );
}
