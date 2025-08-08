'use client';

import React, { useRef, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Link from 'next/link';
import { homeUtilityCategories } from 'routes/MainNavigation';
import Head from 'next/head';

const HomeEssentialsPage = () => {
  const scrollContainerRef = useRef(null);

  // Enable horizontal scrolling with mouse wheel
  useEffect(() => {
    const handleWheel = (e) => {
      if (scrollContainerRef.current) {
        e.preventDefault();
        scrollContainerRef.current.scrollLeft += e.deltaY;
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>Home Essentials | FreshCart</title>
        <meta name="description" content="Browse our home essentials categories" />
      </Head>
      
      <div className="d-flex flex-column" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
        <div className="py-5 bg-white border-bottom">
          <Container>
            <div className="mb-4">
              <h1 className="mb-2">Home Essentials</h1>
              <p className="text-muted mb-0">Everything you need for your home in one place</p>
            </div>

            {/* Horizontal Scrolling Categories */}
            <div 
              style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                overflow: 'hidden',
                padding: '1rem 0',
              }}
            >
              <div 
                ref={scrollContainerRef}
                className="d-flex flex-nowrap"
                style={{
                  overflowX: 'auto',
                  scrollbarWidth: 'none', // For Firefox
                  msOverflowStyle: 'none', // For IE and Edge
                  '&::-webkit-scrollbar': {
                    display: 'none', // For Chrome, Safari and Opera
                  },
                  gap: '1rem',
                  padding: '0 1rem 1rem',
                  WebkitOverflowScrolling: 'touch', // Smooth scrolling on iOS
                  maxWidth: '100%',
                  margin: '0 auto',
                }}
              >
              {homeUtilityCategories.map((category) => (
                <div 
                  key={category.id}
                  className="flex-shrink-0"
                  style={{
                    width: '160px',
                    transition: 'transform 0.2s ease-in-out',
                  }}
                >
                  <Link 
                    href={category.link} 
                    className="text-decoration-none d-block"
                    style={{ height: '100%' }}
                  >
                    <div 
                      className="card h-100 text-center p-4 border-0 shadow-sm"
                      style={{
                        borderRadius: '12px',
                        backgroundColor: 'white',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s ease-in-out',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
                      }}
                    >
                      <div 
                        style={{
                          width: '100px',
                          height: '100px',
                          borderRadius: '50%',
                          backgroundColor: '#f8f9fa',
                          margin: '0 auto 1rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          overflow: 'hidden',
                          border: '1px solid #e9ecef',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                        }}
                      >
                        <div 
                          style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden',
                            borderRadius: '50%'
                          }}
                        >
                          <img 
                            src={category.icon} 
                            alt={category.title}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              objectPosition: 'center',
                              transition: 'transform 0.3s ease-in-out'
                            }}
                            onMouseOver={(e) => {
                              e.target.style.transform = 'scale(1.1)';
                            }}
                            onMouseOut={(e) => {
                              e.target.style.transform = 'scale(1)';
                            }}
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzQzNjVkNCI+PHBhdGggZD0iTTE5IDNINWEyIDIgMCAwMC0yIDJ2MTRhMiAyIDAgMDAyIDJoMTRhMiAyIDAgMDAyLTJWNWEyIDIgMCAwMC0yLTJtMCAxNkg1VjVoMTR2MTR6Ii8+PC9zdmc+';
                            }}
                          />
                        </div>
                      </div>
                      <h5 
                        className="mb-0 fw-bold" 
                        style={{ 
                          color: '#2b2f4c',
                          fontSize: '0.9rem',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          width: '100%',
                          padding: '0.5rem 0'
                        }}
                      >
                        {category.title}
                      </h5>
                    </div>
                  </Link>
                </div>
              ))}
              </div>
            </div>
          </Container>
        </div>
        
        <footer className="bg-white border-top py-4 mt-auto">
          <Container>
            <div className="text-center text-muted">
              <p className="mb-0">© {new Date().getFullYear()} FreshCart. All rights reserved.</p>
            </div>
          </Container>
        </footer>
      </div>
    </>
  );
};

export default HomeEssentialsPage;
