"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, Expand, ImageIcon, X } from "lucide-react";
import { useEffect, useRef, useState, type PointerEvent, type TouchEvent } from "react";

export type SedePhoto = { src: string; alt: string };

const placeholders = ["Vista principal", "Espacios comunes", "Habitaciones", "Áreas exteriores"];

export default function SedeGallery({ nombre, images }: { nombre: string; images: SedePhoto[] }) {
  const [selected, setSelected] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const swipe = useRef<{ x: number; y: number } | null>(null);
  const drag = useRef<{ pointerId: number; x: number; y: number; left: number; top: number; moved: boolean } | null>(null);
  const suppressClick = useRef(false);
  const suppressPhotoClick = useRef(false);
  const photos = images.length ? images : placeholders.map((label) => ({ src: "", alt: label }));
  const photo = photos[selected] ?? photos[0];

  useEffect(() => {
    if (!open) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    element?.showModal();
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  function nextPhoto(direction: number) {
    setSelected((current) => (current + direction + photos.length) % photos.length);
  }

  function startSwipe(event: TouchEvent<HTMLElement>) {
    suppressPhotoClick.current = false;
    swipe.current = event.touches.length === 1 ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null;
  }

  function moveSwipe(event: TouchEvent<HTMLElement>) {
    if (event.touches.length !== 1) {
      swipe.current = null;
      suppressPhotoClick.current = true;
    }
  }

  function endSwipe(event: TouchEvent<HTMLElement>) {
    const start = swipe.current;
    swipe.current = null;
    if (!start || event.touches.length || !event.changedTouches.length) return;
    const dx = event.changedTouches[0].clientX - start.x;
    const dy = event.changedTouches[0].clientY - start.y;
    suppressPhotoClick.current = Math.hypot(dx, dy) >= 10;
    if (Math.abs(dx) >= 50 && Math.abs(dx) > Math.abs(dy) * 1.5) nextPhoto(dx < 0 ? 1 : -1);
  }

  const swipeHandlers = {
    onTouchStart: startSwipe,
    onTouchMove: moveSwipe,
    onTouchEnd: endSwipe,
    onTouchCancel: () => { swipe.current = null; suppressPhotoClick.current = true; },
  };

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
      <figure className="sede-main-photo sede-swipe-photo" {...swipeHandlers}>
        {photo.src ? (
          <button type="button" className="sede-expand-photo" aria-label={`Ampliar: ${photo.alt}`} onClick={(event) => {
            if (suppressPhotoClick.current && event.detail !== 0) { suppressPhotoClick.current = false; return; }
            setOpen(true);
          }}>
            <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 760px) 90vw, (max-width: 1200px) 70vw, 850px" className="sede-photo" draggable={false} />
            <span className="sede-expand-icon" aria-hidden="true"><Expand size={18} /></span>
          </button>
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
      <dialog ref={dialog} className="activity-lightbox" aria-label={`Fotos de la sede ${nombre}`} onClose={() => setOpen(false)} onClick={(event) => { if (event.target === event.currentTarget) setOpen(false); }} onKeyDown={(event) => {
        if (event.key === "ArrowLeft") { event.preventDefault(); nextPhoto(-1); }
        if (event.key === "ArrowRight") { event.preventDefault(); nextPhoto(1); }
      }}>
        <div className="activity-lightbox-content">
          <button type="button" className="activity-close" aria-label="Cerrar fotografía" onClick={() => setOpen(false)} autoFocus><X size={24} /></button>
          <div className="activity-full-photo sede-swipe-photo" {...swipeHandlers}>
            {open && photo.src && <Image src={photo.src} alt={photo.alt} fill sizes="100vw" draggable={false} />}
          </div>
          <div className="activity-lightbox-footer">
            <p aria-live="polite">{photo.alt}<span>{nombre} · {selected + 1} / {photos.length}</span></p>
            {photos.length > 1 && <>
              <button type="button" aria-label="Fotografía anterior" onClick={() => nextPhoto(-1)}><ArrowLeft size={22} /></button>
              <button type="button" aria-label="Fotografía siguiente" onClick={() => nextPhoto(1)}><ArrowRight size={22} /></button>
            </>}
          </div>
        </div>
      </dialog>
    </div>
  );
}
