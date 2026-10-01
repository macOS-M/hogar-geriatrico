"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches || !("IntersectionObserver" in window)) return;

    const animations = new Set<Animation>();
    const pending = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        pending.delete(entry.target);
        entry.target.classList.remove("scroll-reveal-pending");
        const animation = entry.target.animate(
          [
            { opacity: 0, transform: "translateY(24px) scale(0.98)" },
            { opacity: 1, transform: "translateY(0) scale(1)" },
          ],
          { duration: 1200, easing: "cubic-bezier(0.16, 0.65, 0.3, 1)" },
        );
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      }
    }, { rootMargin: "0px 0px -15% 0px", threshold: 0.15 });

    document.querySelectorAll(".page-shell > .section > :not(dialog)").forEach((element) => {
      // Keep content already on screen steady when the page loads.
      if (element.getBoundingClientRect().top >= window.innerHeight) {
        element.classList.add("scroll-reveal-pending");
        pending.add(element);
        observer.observe(element);
      }
    });

    function revealFocusedContent(event: FocusEvent) {
      for (const element of pending) {
        if (event.target instanceof Node && element.contains(event.target)) {
          element.classList.remove("scroll-reveal-pending");
          pending.delete(element);
          observer.unobserve(element);
        }
      }
    }

    function clearPending() {
      pending.forEach((element) => element.classList.remove("scroll-reveal-pending"));
      pending.clear();
    }

    function stopMotion() {
      if (!motion.matches) return;
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
      clearPending();
    }
    document.addEventListener("focusin", revealFocusedContent);
    motion.addEventListener("change", stopMotion);
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      clearPending();
      document.removeEventListener("focusin", revealFocusedContent);
      motion.removeEventListener("change", stopMotion);
    };
  }, []);

  return null;
}
