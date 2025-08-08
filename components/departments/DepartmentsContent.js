'use client';

import { allCategories } from 'routes/MainNavigation';
import Link from 'next/link';

const DepartmentsContent = () => {
  return (
    <div className="container py-4">
      <h1 className="mb-4">All Departments</h1>
      <div className="row g-4">
        {allCategories.map((category) => (
          <div key={category.id} className="col-6 col-md-4 col-lg-3">
            <Link href={`/category/${category.id}`} className="text-decoration-none">
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
    </div>
  );
};

export default DepartmentsContent;
