import { useEffect, useRef } from 'react';

const useScrollLock = () => {
  const scrollTop = useRef<number | null>(null);
  const fixedBlockElements = useRef<NodeListOf<HTMLElement> | null>(null);
  const lockClass = 'scroll-lock';

  const getScrollbarWidth = (): number => {
    if (typeof window === 'undefined') return 0;
    return window.innerWidth - document.documentElement.clientWidth;
  };

  const getBodyScrollTop = (): number => {
    if (typeof window === 'undefined') return 0;
    return (
      window.pageYOffset ||
      (document.documentElement && document.documentElement.scrollTop) ||
      (document.body && document.body.scrollTop) ||
      0
    );
  };

  const disableScrolling = (): void => {
    if (typeof document === 'undefined') return;

    fixedBlockElements.current = document.querySelectorAll('[data-fix-block]');

    scrollTop.current = document.body.dataset.scroll
      ? parseInt(document.body.dataset.scroll, 10)
      : getBodyScrollTop();

    document.body.dataset.scroll = scrollTop.current.toString();

    const scrollbarWidth = getScrollbarWidth();
    if (scrollbarWidth) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      fixedBlockElements.current.forEach((block) => {
        block.style.paddingRight = `${scrollbarWidth}px`;
      });
    }

    document.body.style.top = `-${scrollTop.current}px`;
    document.body.classList.add(lockClass);
  };

  const enableScrolling = (): void => {
    if (typeof document === 'undefined') return;

    document.body.classList.remove(lockClass);

    if (scrollTop.current !== null) {
      window.scrollTo(0, scrollTop.current);
    }

    document.body.style.paddingRight = '';
    document.body.style.top = '';

    fixedBlockElements.current?.forEach((block) => {
      block.style.paddingRight = '';
    });

    document.body.removeAttribute('data-scroll');
    scrollTop.current = null;
  };

  useEffect(() => {
    return () => {
      enableScrolling();
    };
  }, []);

  return { disableScrolling, enableScrolling };
};

export default useScrollLock;
