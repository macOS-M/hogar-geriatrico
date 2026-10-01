import Image from "next/image";
import logo from "../../public/sabana.png";
import SiteHeader from "./SiteHeader";
import HeroBackground from "./HeroBackground";

export default function ParallaxHero() {
  return (
    <>
      <SiteHeader />

      <section id="inicio" className="hero" aria-labelledby="hero-title">
        <HeroBackground />
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
            <a href="#sedes" className="primary">Conozca nuestras sedes</a>
            <a href="https://wa.me/50660053095" className="secondary" target="_blank" rel="noopener noreferrer">Contactenos por WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
