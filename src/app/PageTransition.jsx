"use client";
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function PageTransition({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <div className="page-transition" key={pathname}>
      {children}
    </div>
  );
}
