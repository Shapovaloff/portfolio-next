import { useCallback, useEffect } from 'react';

interface ScrollOptions {
  offset?: number;
  behavior?: ScrollBehavior;
}

const useScrollTo = (id: string, options?: ScrollOptions) => {
  const { offset = 0, behavior = 'smooth' } = options || {};

  const scroll = useCallback(() => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top,
        behavior,
      });
    }
  }, [id, offset, behavior]);

  useEffect(() => {
    if (window.location.hash === `#${id}`) {
      scroll();
    }
  }, [id, scroll]);

  return scroll;
};

export default useScrollTo;
