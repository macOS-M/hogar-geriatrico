"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { ArrowUpRight, ChevronRight, House, MapPin } from "lucide-react";
import SedeGallery, { type SedePhoto } from "./SedeGallery";

type Sede = { nombre: string; numero: string; descripcion: string; images: SedePhoto[] };

export default function SedeSelector({ sedes }: { sedes: Sede[] }) {
  const [selected, setSelected] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % sedes.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + sedes.length) % sedes.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = sedes.length - 1;
    else return;
    event.preventDefault();
    setSelected(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="sede-selector">
      <p className="sede-selection-hint">Seleccione una sede para ver sus fotos y ubicación.</p>
      <div className="sede-tabs" role="tablist" aria-label="Seleccione una sede">
        {sedes.map((sede, index) => (
          <button
            key={sede.nombre}
            ref={(element) => { tabs.current[index] = element; }}
            type="button"
            role="tab"
            id={`sede-tab-${index}`}
            aria-controls={`sede-panel-${index}`}
            aria-selected={selected === index}
            tabIndex={selected === index ? 0 : -1}
            className="sede-tab"
            onClick={() => setSelected(index)}
            onKeyDown={(event) => navigate(event, index)}
          >
            <House size={22} strokeWidth={1.7} aria-hidden="true" />
            <span className="sede-tab-copy">
              <span className="sede-tab-number">{sede.numero}</span>
              <span className="sede-tab-name">
                {sede.nombre}
                {selected !== index && <ChevronRight className="sede-tab-arrow" size={16} aria-hidden="true" />}
              </span>
            </span>
          </button>
        ))}
      </div>
      {sedes.map((sede, index) => (
        <div key={sede.nombre} role="tabpanel" id={`sede-panel-${index}`} aria-labelledby={`sede-tab-${index}`} hidden={selected !== index} tabIndex={0} className="sede-panel">
          <header className="location-name">
            <h3>{sede.nombre}</h3>
          </header>
          <SedeGallery nombre={sede.nombre} images={sede.images} />
          <div className="sede-details">
            <div className="sede-address"><MapPin size={22} strokeWidth={1.7} aria-hidden="true" /><div><span className="sede-address-label">Ubicación</span><p>{sede.descripcion}</p></div></div>
            <a className="location-link" href="#contacto" aria-label={`Consultar por la sede ${sede.nombre}`}><span>Consultar sede</span><ArrowUpRight className="link-arrow" aria-hidden="true" strokeWidth={1.8} /></a>
          </div>
        </div>
      ))}
    </div>
  );
}
