import Image from "next/image";
import logo from "../../public/sabana.png";
import logomark from "../../public/logo.png";

export default function ParallaxHero() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Hogar Geriátrico La Sabana, inicio">
          <Image className="brand-mark" src={logomark} alt="" sizes="64px" />
          <span>Hogar Geriátrico La Sabana</span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#servicios">Servicios</a>
          <a href="#sedes">Sedes</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <section id="inicio" className="hero" aria-labelledby="hero-title">
        <div className="hero-background" aria-hidden="true" />
        <div className="hero-overlay" aria-hidden="true" />

        <div className="hero-content">
          <div className="hero-emblem">
            <Image src={logo} alt="Hogar Geriátrico La Sabana" sizes="160px" priority />
          </div>
          <p className="eyebrow">Bienestar, compañía y confianza</p>
          <h1 id="hero-title">Atención con la calidez de un hogar.</h1>
          <p className="hero-lead">
            Acompañamiento integral para personas adultas mayores, en espacios
            seguros y llenos de calidez.
          </p>
          <div className="actions">
            <a href="#sedes" className="primary">Conoce nuestras sedes</a>
            <a href="tel:+50660053095" className="secondary">Llamar al 6005-3095</a>
          </div>
        </div>
      </section>
    </>
  );
}
