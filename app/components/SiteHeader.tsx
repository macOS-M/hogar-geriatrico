"use client";

import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
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
        <a className="mobile-nav-call" href="tel:+50660053095"><Phone size={18} aria-hidden="true" />Llamar al 6005-3095</a>
      </nav>
    </header>
  );
}
