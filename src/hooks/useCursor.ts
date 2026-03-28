import { useEffect, useRef } from 'react';

export function useCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const onMouseLeave = () => {
      cursor.style.opacity = '0';
      ring.style.opacity = '0';
    };

    const onMouseEnter = () => {
      cursor.style.opacity = '1';
      ring.style.opacity = '0.5';
    };

    const onInteractableEnter = () => document.body.classList.add('hovering');
    const onInteractableLeave = () => document.body.classList.remove('hovering');

    const animate = () => {
      cursor.style.left = `${mx}px`;
      cursor.style.top = `${my}px`;
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      rafId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    const interactables = document.querySelectorAll<HTMLElement>('a, button');
    interactables.forEach((el) => {
      el.addEventListener('mouseenter', onInteractableEnter);
      el.addEventListener('mouseleave', onInteractableLeave);
    });

    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      interactables.forEach((el) => {
        el.removeEventListener('mouseenter', onInteractableEnter);
        el.removeEventListener('mouseleave', onInteractableLeave);
      });
      cancelAnimationFrame(rafId);
    };
  }, []);

  return { cursorRef, ringRef };
}
