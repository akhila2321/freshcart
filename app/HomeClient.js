'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Index from "./(home)/homepage-1/Index";

export default function HomeClient() {
  const router = useRouter();

  // Handle back/forward browser navigation
  useEffect(() => {
    const handlePopState = () => {
      // Force a re-render when using browser back/forward
      router.refresh();
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [router]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <main>
        <Index />
      </main>
    </div>
  );
}
