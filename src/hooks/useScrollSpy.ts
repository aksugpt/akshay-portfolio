import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds: string[], offset = 150) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      let currentActiveId = '';

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          // element is currently in view
          if (top <= offset && bottom > offset) {
            currentActiveId = id;
            break;
          }
        }
      }

      setActiveSection(currentActiveId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}
