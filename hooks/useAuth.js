'use client';

import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { 
  login as loginAction, 
  logout as logoutAction, 
  signup as signupAction,
  clearError,
  loadUser as loadUserAction
} from '@/store/storeSlices/authSlice';

export function useAuth() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { 
    user, 
    isAuthenticated, 
    loading, 
    error 
  } = useSelector((state) => state.auth);

  // Sync with localStorage on mount and when auth state changes
  useEffect(() => {
    const storedUser = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
    const storedToken = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    
    // If we have stored user but not in Redux, update Redux
    if (storedUser && !user) {
      try {
        const parsedUser = JSON.parse(storedUser);
        dispatch({ 
          type: 'auth/loginSuccess', 
          payload: { user: parsedUser, token: storedToken }
        });
      } catch (e) {
        console.error('Failed to parse stored user', e);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      }
    }
    
    // Clean up on unmount
    return () => {
      if (error) {
        dispatch(clearError());
      }
    };
  }, [dispatch, error, user]);

  const login = async (email, password) => {
    try {
      const result = await dispatch(loginAction({ email, password })).unwrap();
      return { success: true, user: result.user };
    } catch (error) {
      console.error('Login error:', error);
      return { 
        success: false, 
        error: error.message || 'Failed to log in. Please try again.' 
      };
    }
  };

  const signup = async (userData) => {
    try {
      const result = await dispatch(signupAction(userData)).unwrap();
      return { success: true, user: result.user };
    } catch (error) {
      console.error('Signup error:', error);
      return { 
        success: false, 
        error: error.message || 'Failed to create account. Please try again.' 
      };
    }
  };

  const logout = useCallback(async () => {
    try {
      await dispatch(logoutAction()).unwrap();
      // Clear all auth related data from localStorage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('cart');
      }
      // Redirect to home page and force a full page reload
      window.location.href = '/';
    } catch (error) {
      console.error('Logout error:', error);
    }
  }, [dispatch]);
  
  /**
   * Check if user has specific role
   * @param {string|string[]} roles - Role or array of roles to check against
   * @returns {boolean}
   */
  const hasRole = useCallback((roles) => {
    if (!user?.role) return false;
    return Array.isArray(roles) 
      ? roles.includes(user.role)
      : user.role === roles;
  }, [user]);
  
  // Check if user is authenticated
  const isAuthenticatedUser = useCallback(() => {
    return isAuthenticated && !!user;
  }, [isAuthenticated, user]);

  // Get authentication token
  const getToken = useCallback(() => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('token');
  }, []);

  // Check if user has verified email
  const isEmailVerified = user?.emailVerified || false;

  // Check if user is admin
  const isAdmin = hasRole('admin');

  return {
    // User data
    user,
    
    // Auth state
    isAuthenticated: isAuthenticatedUser(),
    loading,
    error,
    
    // Auth methods
    login,
    signup,
    logout,
    
    // Role-based access control
    hasRole,
    isAdmin,
    
    // Helper methods
    getToken,
    isEmailVerified,
    
    // Refresh user data
    refreshUser: () => dispatch(loadUserAction()),
  };
}

export default useAuth;
