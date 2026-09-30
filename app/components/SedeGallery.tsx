"use client";

import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { useRef, useState, type PointerEvent } from "react";

export type SedePhoto = { src: string; alt: string };

const placeholders = ["Vista principal", "Espacios comunes", "Habitaciones", "Áreas exteriores"];

export default function SedeGallery({ nombre, images }: { nombre: string; images: SedePhoto[] }) {
  const [selected, setSelected] = useState(0);
  const [dragging, setDragging] = useState(false);
  const drag = useRef<{ pointerId: number; x: number; y: number; left: number; top: number; moved: boolean } | null>(null);
  const suppressClick = useRef(false);
  const photos = images.length ? images : placeholders.map((label) => ({ src: "", alt: label }));
  const photo = photos[selected] ?? photos[0];

  function startDrag(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    suppressClick.current = false;
    drag.current = { pointerId: event.pointerId, x: event.clientX, y: event.clientY, left: event.currentTarget.scrollLeft, top: event.currentTarget.scrollTop, moved: false };
  }

  function moveDrag(event: PointerEvent<HTMLDivElement>) {
    const current = drag.current;
    if (!current || current.pointerId !== event.pointerId) return;
    const dx = event.clientX - current.x;
    const dy = event.clientY - current.y;
    if (!current.moved && Math.hypot(dx, dy) < 6) return;
    if (!current.moved) {
      current.moved = true;
      suppressClick.current = true;
      event.currentTarget.setPointerCapture(event.pointerId);
      setDragging(true);
    }
    event.preventDefault();
    event.currentTarget.scrollLeft = current.left - dx;
    event.currentTarget.scrollTop = current.top - dy;
  }

  function endDrag(event: PointerEvent<HTMLDivElement>) {
    if (drag.current?.pointerId !== event.pointerId) return;
    drag.current = null;
    setDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  }

  return (
    <div className="sede-gallery" role="group" aria-label={`Fotos de ${nombre}`}>
      <figure className="sede-main-photo">
        {photo.src ? (
          <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 760px) 90vw, (max-width: 1200px) 70vw, 850px" className="sede-photo" />
        ) : (
          <div className="sede-photo-placeholder"><ImageIcon size={42} strokeWidth={1} aria-hidden="true" /><span>{photo.alt}</span><small>Fotografía pendiente</small></div>
        )}
        <figcaption aria-live="polite"><span>{nombre} · {photo.alt}</span><span>{selected + 1} / {photos.length}</span></figcaption>
      </figure>
      <div
        className={`sede-thumbnails${dragging ? " is-dragging" : ""}`}
        aria-label="Elegir fotografía"
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onLostPointerCapture={() => { drag.current = null; setDragging(false); }}
        onPointerLeave={(event) => { if (!drag.current?.moved) endDrag(event); }}
        onDragStart={(event) => event.preventDefault()}
        onClickCapture={(event) => {
          if (suppressClick.current && event.detail !== 0) {
            event.preventDefault();
            event.stopPropagation();
            suppressClick.current = false;
          }
        }}
      >
        {photos.map((item, index) => (
          <button key={`${item.src}-${index}`} type="button" className="sede-thumbnail" aria-label={`Ver ${item.alt.toLowerCase()} de ${nombre}`} aria-pressed={selected === index} onClick={() => setSelected(index)}>
            {item.src ? <Image src={item.src} alt="" draggable={false} fill sizes="(max-width: 760px) 22vw, 140px" className="sede-photo" /> : <span className="sede-thumbnail-placeholder"><ImageIcon size={22} strokeWidth={1.3} aria-hidden="true" /><span>{item.alt}</span></span>}
          </button>
        ))}
      </div>
    </div>
  );
}
