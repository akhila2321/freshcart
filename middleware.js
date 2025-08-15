import { NextResponse } from 'next/server';

// List of public paths that don't require authentication
const publicPaths = [
  '/',
  '/signin',
  '/signup', 
  '/forgot-password', 
  '/reset-password',
  '/products',
  '/categories',
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms-of-service'
];

// List of protected paths that require authentication
const protectedPaths = [
  '/account',
  '/checkout',
  '/orders',
  '/wishlist',
  '/settings',
  '/dashboard'
];

// List of admin paths that require admin role
const adminPaths = [
  '/admin',
  '/dashboard/admin'
];

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Skip middleware for API routes and public assets
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/_vercel') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Get the token from cookies
  const token = request.cookies.get('token')?.value;
  let user = null;
  
  // Try to parse user from cookies if token exists
  if (token) {
    try {
      // In a real app, you might want to verify the token here
      // For now, we'll just check if it exists
      const userData = request.cookies.get('user')?.value;
      if (userData) {
        user = JSON.parse(userData);
      }
    } catch (error) {
      console.error('Error parsing user data:', error);
    }
  }

  const isAuthenticated = !!user;
  const isAdmin = user?.role === 'admin';

  // Handle public paths
  if (publicPaths.some(path => path === pathname || pathname.startsWith(path + '/'))) {
    // If user is already logged in and tries to access auth pages, redirect to dashboard
    if (isAuthenticated && ['/signin', '/signup', '/forgot-password', '/reset-password'].some(path => 
      pathname === path || pathname.startsWith(path + '/'))
    ) {
      const url = new URL('/account/dashboard', request.url);
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  // Handle admin paths
  if (adminPaths.some(path => pathname === path || pathname.startsWith(path + '/'))) {
    if (!isAuthenticated) {
      return redirectToSignin(request, pathname);
    }
    if (!isAdmin) {
      const url = new URL('/unauthorized', request.url);
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  // Handle protected paths
  if (protectedPaths.some(path => pathname === path || pathname.startsWith(path + '/'))) {
    if (!isAuthenticated) {
      return redirectToSignin(request, pathname);
    }
    return NextResponse.next();
  }

  // For all other paths, continue
  return NextResponse.next();
}

// Helper function to redirect to signin with callback URL
function redirectToSignin(request, currentPath) {
  const url = new URL('/signin', request.url);
  // Only set callback URL if it's not an API route or static file
  if (!currentPath.startsWith('/api') && !currentPath.startsWith('/_next')) {
    url.searchParams.set('callbackUrl', currentPath);
  }
  return NextResponse.redirect(url);
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public/|_vercel).*)',
  ],
};
