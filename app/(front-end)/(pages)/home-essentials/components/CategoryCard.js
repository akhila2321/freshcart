import Link from 'next/link';
import Image from 'next/image';

export default function CategoryCard({ category }) {
  return (
    <Link 
      href={`/category/${category.id}`} 
      className="text-decoration-none d-block h-100"
    >
      <div className="card card-hover h-100">
        <div className="d-flex flex-column align-items-center p-4">
          <div className="mb-3" style={{ width: '80px', height: '80px' }}>
            <Image
              src={category.icon}
              alt={category.title}
              width={80}
              height={80}
              className="img-fluid"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <h3 className="fs-6 text-center text-dark mb-0">{category.title}</h3>
        </div>
      </div>
    </Link>
  );
}
