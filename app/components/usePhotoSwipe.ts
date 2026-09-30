"use client";

import { useRef, type TouchEvent } from "react";

export default function usePhotoSwipe(onSwipe: (direction: number) => void) {
  const start = useRef<{ x: number; y: number } | null>(null);
  return {
    onTouchStart(event: TouchEvent<HTMLElement>) {
      start.current = event.touches.length === 1 ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null;
    },
    onTouchMove(event: TouchEvent<HTMLElement>) {
      if (event.touches.length !== 1) start.current = null;
    },
    onTouchCancel() { start.current = null; },
    onTouchEnd(event: TouchEvent<HTMLElement>) {
      const origin = start.current;
      start.current = null;
      if (!origin || event.touches.length || !event.changedTouches.length) return;
      const dx = event.changedTouches[0].clientX - origin.x;
      const dy = event.changedTouches[0].clientY - origin.y;
      if (Math.abs(dx) >= 50 && Math.abs(dx) > Math.abs(dy) * 1.5) onSwipe(dx < 0 ? 1 : -1);
    },
  };
}
