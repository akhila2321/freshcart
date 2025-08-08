'use client';

import { Container } from 'react-bootstrap';
import { allCategories } from 'routes/MainNavigation';
import Link from 'next/link';

export default function AllDepartmentsPage() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">All Departments</h1>
      <div className="row g-4">
        {allCategories.map((category) => (
          <div key={category.id} className="col-6 col-md-4 col-lg-3">
            <Link 
              href={`/category/${category.id}`} 
              className="text-decoration-none"
            >
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <div 
                      className="mx-auto rounded-3" 
                      style={{
                        width: '120px',
                        height: '120px',
                        background: '#f8f9fa',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden'
                      }}
                    >
                      {category.icon ? (
                        <img 
                          src={category.icon} 
                          alt={category.title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center'
                          }}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzQzNjVkNCI+PHBhdGggZD0iTTE5IDNINWEyIDIgMCAwMC0yIDJ2MTRhMiAyIDAgMDAyIDJoMTRhMiAyIDAgMDAyLTJWNWEyIDIgMCAwMC0yLTJtMCAxNkg1VjVoMTR2MTR6Ii8+PC9zdmc+';
                          }}
                        />
                      ) : (
                        <span className="display-4 text-muted">{category.title.charAt(0)}</span>
                      )}
                    </div>
                  </div>
                  <h5 className="mb-0">{category.title}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
}
