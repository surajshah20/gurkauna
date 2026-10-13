import { useEffect, useRef } from 'react';

/**
 * useScrollReveal — attaches an IntersectionObserver to a container ref.
 * All children with the class `reveal` will animate in on scroll.
 *
 * @param {Object} options
 * @param {string} options.selector   - CSS selector for children to observe (default: '.reveal')
 * @param {number} options.threshold  - IO threshold (default: 0.12)
 * @param {string} options.rootMargin - IO rootMargin (default: '0px 0px -40px 0px')
 */
export function useScrollReveal({
  selector = '.reveal',
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px'
} = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(selector);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, threshold, rootMargin]);

  return containerRef;
}
