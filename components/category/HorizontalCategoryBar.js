'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { allCategories } from 'routes/MainNavigation';
import { Container } from 'react-bootstrap';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import styles from './HorizontalCategoryBar.module.css';

const HorizontalCategoryBar = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const scrollContainerRef = useRef(null);
  const pathname = usePathname();

  // Reset active category when changing routes
  useEffect(() => {
    setActiveCategory('all');
  }, [pathname]);

  // Handle scroll visibility for arrow buttons
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const checkScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    };

    // Initial check
    checkScroll();
    
    // Add scroll event listener
    container.addEventListener('scroll', checkScroll);
    
    // Cleanup
    return () => container.removeEventListener('scroll', checkScroll);
  }, []);

  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      // Initial check
      checkScroll();
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white border-bottom">
      <Container className="py-3 position-relative px-0">
        <div className={styles.wrapper}>
          {/* Left Scroll Button */}
          {showLeftArrow && (
            <button
              onClick={scrollLeft}
              aria-label="Scroll left"
              className={`${styles.arrowButton} ${styles.arrowLeft}`}
            >
              <ChevronLeft size={24} className="text-primary" />
            </button>
          )}

          {/* Right Scroll Button */}
          {showRightArrow && (
            <button
              onClick={scrollRight}
              aria-label="Scroll right"
              className={`${styles.arrowButton} ${styles.arrowRight}`}
            >
              <ChevronRight size={24} className="text-primary" />
            </button>
          )}

          <div 
            ref={scrollContainerRef}
            className={styles.scrollContainer}
          >

            {/* Category Items */}
            {allCategories.filter(category => ![
              'home-utility',
              'bath-laundry',
              'pooja-festive',
              'party-needs',
              'cleaning-aids-tissues',
              'automotive-needs'
            ].includes(category.id)).map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                className={`text-decoration-none text-center ${activeCategory === category.id ? 'text-primary' : 'text-dark'}`}
                onClick={(e) => {
                  // Let the Link component handle the navigation
                  setActiveCategory(category.id);
                }}
                style={{
                  minWidth: '120px',
                  padding: '1rem 0.5rem',
                  borderBottom: activeCategory === category.id ? '2px solid #4365d0' : '2px solid transparent',
                  whiteSpace: 'nowrap',
                  margin: '0 4px',
                  flex: '0 0 auto',
                }}
              >
                <div className="d-flex flex-column align-items-center">
                  <div 
                    style={{
                      width: '90px',
                      height: '90px',
                      borderRadius: '8px',
                      backgroundColor: '#f8f9fa',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '0.5rem',
                      overflow: 'hidden',
                      border: activeCategory === category.id ? '2px solid #4365d0' : '1px solid #e9ecef',
                      transition: 'all 0.2s ease',
                    }}
                    className="hover-scale"
                  >
                    {category.icon ? (
                      <img 
                        src={category.icon} 
                        alt={category.title}
                        style={{
                          width: '110%',
                          height: '110%',
                          objectFit: 'cover',
                          objectPosition: 'center',
                          transform: 'scale(1.1)',
                          transition: 'transform 0.2s ease',
                        }}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzQzNjVkNCI+PHBhdGggZD0iTTE5IDNINWEyIDIgMCAwMC0yIDJ2MTRhMiAyIDAgMDAyIDJoMTRhMiAyIDAgMDAyLTJWNWEyIDIgMCAwMC0yLTJtMCAxNkg1VjVoMTR2MTR6Ii8+PC9zdmc+';
                        }}
                      />
                    ) : (
                      <span className="fs-4">{category.title.charAt(0)}</span>
                    )}
                  </div>
                  <span className="small fw-medium text-center" style={{ width: '110px' }}>
                    {category.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HorizontalCategoryBar;
