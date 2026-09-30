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
            <a href="#sedes" className="primary">Conoce nuestras sedes</a>
            <a href="tel:+50660053095" className="secondary">Llamar al 6005-3095</a>
          </div>
        </div>
      </section>
    </>
  );
}
