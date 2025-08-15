'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './useAuth';

export function useAuthCheck(requireAuth = false, redirectTo = '/login') {
  const { user, isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) return; // Don't do anything while loading
    
    // If authentication is required but user is not authenticated, redirect
    if (requireAuth && !isAuthenticated) {
      router.push(`${redirectTo}?redirect=${encodeURIComponent(window.location.pathname)}`);
    }
    
    // If authentication is not required but user is authenticated, redirect to home
    if (!requireAuth && isAuthenticated) {
      router.push('/account/dashboard');
    }
  }, [isAuthenticated, loading, requireAuth, redirectTo, router]);

  return { user, isAuthenticated, loading };
}
