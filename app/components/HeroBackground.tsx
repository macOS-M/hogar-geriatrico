"use client";

import { useEffect, useRef } from "react";

export default function HeroBackground() {
  const background = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = background.current;
    const hero = element?.parentElement;
    if (!element || !hero) return;
    const mobile = window.matchMedia("(max-width: 760px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    function update() {
      frame = 0;
      if (!element || !hero) return;
      if (!mobile.matches || reducedMotion.matches) {
        element.style.removeProperty("transform");
        return;
      }
      const bounds = hero.getBoundingClientRect();
      if (bounds.bottom <= 0 || bounds.top >= window.innerHeight) return;
      const offset = Math.min(24, Math.max(0, -bounds.top * 0.06));
      element.style.transform = `translate3d(0, ${offset}px, 0)`;
    }

    function schedule() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    mobile.addEventListener("change", schedule);
    reducedMotion.addEventListener("change", schedule);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      mobile.removeEventListener("change", schedule);
      reducedMotion.removeEventListener("change", schedule);
    };
  }, []);

  return <div ref={background} className="hero-background" aria-hidden="true" />;
}
