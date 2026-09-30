"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, X, Expand } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const activities = [
  { src: "/Actividades/actividad2.jpg", alt: "Encuentro de residentes y acompañantes en el jardín" },
  { src: "/Actividades/actividad1.jpg", alt: "Juego de aros al aire libre" },
  { src: "/Actividades/actividad3.jpg", alt: "Actividad de dibujo y coloreado en grupo" },
  { src: "/Actividades/actividad4.jpg", alt: "Residentes compartiendo una tarde en el jardín" },
  { src: "/Actividades/actividad5.jpg", alt: "Paseo acompañado entre los jardines del parque" },
  { src: "/Actividades/actividad6.jpg", alt: "Ejercicio acompañado en el parque" },
  { src: "/Actividades/actividad7.jpg", alt: "Actividad en los aparatos de ejercicio al aire libre" },
  { src: "/Actividades/actividad8.jpg", alt: "Armado de un rompecabezas en grupo" },
  { src: "/Actividades/actividad9.jpg", alt: "Manualidades y coloreado con residentes" },
  { src: "/Actividades/actividad10.jpg", alt: "Elaboración de manualidades con materiales y colores" },
];

export default function ActivitiesSection() {
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const photo = activities[selected];

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const element = dialog.current;
    document.body.style.overflow = "hidden";
    element?.showModal();
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  function nextPhoto(direction: number) {
    setSelected((current) => (current + direction + activities.length) % activities.length);
  }

  return (
    <section id="actividades" className="section activities-section" aria-labelledby="activities-title">
      <header className="activities-heading">
        <div>
          <p className="section-kicker">Actividades en todas nuestras sedes</p>
          <h2 className="section-title" id="activities-title">Mente y cuerpo,<br /><span>siempre activos.</span></h2>
        </div>
        <p className="section-lead">En todas nuestras sedes, las actividades invitan a crear, moverse y conectar. Acompañamos a cada persona para que disfrute y participe a su propio ritmo.</p>
      </header>
      <div className="activities-mosaic">
        {activities.map((activity, index) => (
          <button key={activity.src} className={"activity-photo activity-tile-" + index} type="button" onClick={() => { setSelected(index); setOpen(true); }} aria-label={"Ampliar: " + activity.alt}>
            <Image src={activity.src} alt={activity.alt} fill sizes={index === 0 || index === 6 || index === 9 ? "(max-width: 600px) 90vw, (max-width: 900px) 45vw, 560px" : "(max-width: 600px) 90vw, (max-width: 900px) 45vw, 280px"} />
            <span className="activity-expand" aria-hidden="true"><Expand size={18} /></span>
          </button>
        ))}
      </div>
      <dialog ref={dialog} className="activity-lightbox" aria-label="Fotos de nuestras actividades" onClose={() => setOpen(false)} onClick={(event) => { if (event.target === event.currentTarget) setOpen(false); }} onKeyDown={(event) => {
        if (event.key === "ArrowLeft") { event.preventDefault(); nextPhoto(-1); }
        if (event.key === "ArrowRight") { event.preventDefault(); nextPhoto(1); }
      }}>
        <div className="activity-lightbox-content">
          <button type="button" className="activity-close" aria-label="Cerrar fotografía" onClick={() => setOpen(false)} autoFocus><X size={24} /></button>
          <div className="activity-full-photo"><Image src={photo.src} alt={photo.alt} fill sizes="90vw" /></div>
          <div className="activity-lightbox-footer">
            <p aria-live="polite">{photo.alt}<span>{selected + 1} / {activities.length}</span></p>
            <button type="button" aria-label="Fotografía anterior" onClick={() => nextPhoto(-1)}><ArrowLeft size={22} /></button>
            <button type="button" aria-label="Fotografía siguiente" onClick={() => nextPhoto(1)}><ArrowRight size={22} /></button>
          </div>
        </div>
      </dialog>
    </section>
  );
}
