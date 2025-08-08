'use client';

import { useState } from 'react';
import { NavigationProvider } from 'context/NavigationContext';
import NavbarFive from '../freshcartnavbar/NavbarFive/NavbarFive';
import Footer from '../footer/FooterLight';
import HomeContent from '../home/HomeContent';
import DepartmentsContent from '../departments/DepartmentsContent';

const AppLayout = () => {
  const [activeView, setActiveView] = useState('home');

  const renderContent = () => {
    switch (activeView) {
      case 'departments':
        return <DepartmentsContent />;
      case 'home':
      default:
        return <HomeContent />;
    }
  };

  return (
    <NavigationProvider>
      <div className="d-flex flex-column min-vh-100">
        <header className="fixed-top bg-white shadow-sm" style={{ zIndex: 1040 }}>
          <NavbarFive activeView={activeView} onViewChange={setActiveView} />
        </header>
        <main style={{ paddingTop: '120px', flex: 1 }}>
          {renderContent()}
        </main>
        <Footer />
      </div>
    </NavigationProvider>
  );
};

export default AppLayout;
