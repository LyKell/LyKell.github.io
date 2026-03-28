import { useEffect, useRef } from 'react';

export function useStaggerReveal<T extends HTMLElement>(selector: string, delay = 150, threshold = 0.05) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          container.querySelectorAll<HTMLElement>(selector).forEach((item, i) => {
            setTimeout(() => item.classList.add('visible'), i * delay);
          });
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [selector, delay, threshold]);

  return ref;
}
