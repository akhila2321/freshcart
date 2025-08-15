'use client';

import { Container } from 'react-bootstrap';

export default function StoresContent() {
  return (
    <Container className="py-5">
      <h1 className="mb-4">Our Stores</h1>
      <div className="row">
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Downtown Store</h5>
              <p className="card-text">123 Main Street, City Center</p>
              <p className="card-text">Open: 9:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Westside Mall</h5>
              <p className="card-text">456 Oak Avenue, West District</p>
              <p className="card-text">Open: 10:00 AM - 10:00 PM</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">East End Plaza</h5>
              <p className="card-text">789 Pine Road, East End</p>
              <p className="card-text">Open: 8:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
