"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logomark from "../../public/logo.png";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function dismiss(event: PointerEvent) {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    }
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
    }
    const desktop = window.matchMedia("(min-width: 761px)");
    function resize() { if (desktop.matches) setOpen(false); }
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", escape);
    desktop.addEventListener("change", resize);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("keydown", escape);
      desktop.removeEventListener("change", resize);
    };
  }, [open]);

  return (
    <header ref={header} className={`site-header${open ? " menu-open" : ""}`} onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
    }}>
      <a className="brand" href="#inicio" aria-label="Hogar Geriátrico La Sabana, inicio" onClick={() => setOpen(false)}>
        <Image className="brand-mark" src={logomark} alt="" sizes="64px" />
        <span className="brand-name"><span>Hogar Geriátrico</span> <strong>La Sabana</strong></span>
      </a>
      <button ref={toggle} className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-navigation" aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen(!open)}>
        <span>{open ? "" : ""}</span>{open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
      </button>
      <nav id="site-navigation" aria-label="Navegación principal" onClick={(event) => {
        if ((event.target as HTMLElement).closest("a")) { setOpen(false); toggle.current?.focus(); }
      }}>
        <a href="#servicios">Servicios</a>
        <a href="#sedes">Sedes</a>
        <a href="#actividades">Actividades</a>
        <a href="#contacto">Contacto</a>
        <a className="mobile-nav-call" href="https://wa.me/50660053095" target="_blank" rel="noopener noreferrer">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
            <path d="M20.52 3.48A11.91 11.91 0 0 0 12.04 0C5.46 0 .1 5.35.1 11.93c0 2.1.55 4.15 1.6 5.96L0 24l6.25-1.64a11.94 11.94 0 0 0 5.79 1.48h.01c6.58 0 11.94-5.35 11.94-11.93 0-3.19-1.24-6.18-3.47-8.43ZM12.05 21.82a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.89 9.89 0 0 1-1.51-5.28c0-5.46 4.44-9.9 9.87-9.9a9.82 9.82 0 0 1 7 2.9 9.84 9.84 0 0 1 2.9 7c0 5.45-4.44 9.89-9.9 9.89Zm5.43-7.41c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
          </svg>
          Contactar por WhatsApp
        </a>
      </nav>
    </header>
  );
}
