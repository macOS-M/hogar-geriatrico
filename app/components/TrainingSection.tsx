"use client";

import Image from "next/image";
import { HeartHandshake, Expand, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const trainingPhotos = [
  { src: "/capacitaciones/capacitacion1.jpg", alt: "Demostración de primeros auxilios durante una capacitación del equipo" },
  { src: "/capacitaciones/capacitacion2.jpg", alt: "Práctica de compresiones torácicas con un maniquí de entrenamiento" },
  { src: "/capacitaciones/capacitacion3.jpg", alt: "Personal practicando técnicas de primeros auxilios con un maniquí" },
];

export default function TrainingSection() {
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const isOpen = selected !== null;

  useEffect(() => {
    if (!isOpen) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    element?.showModal();
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <section id="capacitacion" className="section training-section" aria-labelledby="training-title">
      <div className="training-copy">
        <p className="section-kicker">Formación continua</p>
        <h2 className="section-title" id="training-title">Nos capacitamos<br />para <span>cuidar mejor.</span></h2>
        <p className="section-lead">Todo nuestro personal recibe capacitación continua. En cada sede, seguimos aprendiendo y reforzando nuestras habilidades para acompañar a las personas adultas mayores.</p>
        <p className="training-description">Estos encuentros combinan aprendizaje y práctica, como las sesiones de primeros auxilios que compartimos aquí.</p>
        <span className="training-footnote">Formación continua en todas nuestras sedes</span>
      </div>
      <div className="training-gallery">
        {trainingPhotos.map((photo, index) => (
          <figure key={photo.src} className={"training-moment training-moment-" + index}>
            <button type="button" className="training-photo" aria-label={"Ampliar: " + photo.alt} onClick={() => setSelected(index)}>
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 600px) 90vw, 550px" />
              <span className="training-expand" aria-hidden="true"><Expand size={18} /></span>
            </button>
          </figure>
        ))}
      </div>
      <dialog className="training-lightbox" ref={dialog} aria-label="Fotografía de capacitación" onClose={() => setSelected(null)} onClick={(event) => { if (event.target === event.currentTarget) setSelected(null); }}>
        <div className="training-lightbox-content">
          <button type="button" aria-label="Cerrar fotografía" onClick={() => setSelected(null)} autoFocus><X size={24} /></button>
          <div className="training-full-photo">{selected !== null && <Image src={trainingPhotos[selected].src} alt={trainingPhotos[selected].alt} fill sizes="90vw" />}</div>
          <p>{selected !== null && trainingPhotos[selected].alt}</p>
        </div>
      </dialog>
    </section>
  );
}
