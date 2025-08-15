'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { NavigationProvider } from 'context/NavigationContext';
import GlobalHeader from '../common/GlobalHeader';
import Footer from '../footer/FooterLight';
import dynamic from 'next/dynamic';

// Dynamically import page components with no SSR
const HomePage = dynamic(() => import('components/home/HomeContent'), { ssr: false });
const StoresPage = dynamic(() => import('components/stores/StoresContent'), { ssr: false });
const MegaMenuPage = dynamic(() => import('components/megamenu/MegaMenuContent'), { ssr: false });

const AppLayout = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [activeView, setActiveView] = useState(pathname || '/');

  // Update active view when pathname changes
  useEffect(() => {
    setActiveView(pathname);
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  // Render the appropriate content based on the active view
  const renderContent = () => {
    switch (activeView) {
      case '/':
        return <HomePage />;
      case '/stores':
        return <StoresPage />;
      case '/mega-menu':
        return <MegaMenuPage />;
      default:
        return children;
    }
  };

  return (
    <NavigationProvider>
      <div className="d-flex flex-column min-vh-100">
        <GlobalHeader />
        <main className="flex-grow-1">
          {renderContent()}
        </main>
        <Footer />
      </div>
    </NavigationProvider>
  );
};

export default AppLayout;
