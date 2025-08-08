import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { loginUser, signupUser, logout, clearError } from '@/store/storeSlices/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, isAuthenticated, loading, error, profile } = useSelector((state) => state.auth);

  // Clear error when component unmounts
  useEffect(() => {
    return () => {
      if (error) {
        dispatch(clearError());
      }
    };
  }, [dispatch, error]);

  const login = async (email, password) => {
    try {
      const result = await dispatch(loginUser({ email, password }));
      if (loginUser.fulfilled.match(result)) {
        return { success: true };
      }
      return { success: false, error: result.error?.message || 'Login failed' };
    } catch (err) {
      console.error('Login error:', err);
      return { success: false, error: err.message || 'An error occurred during login' };
    }
  };

  const signup = async (userData) => {
    try {
      const result = await dispatch(signupUser(userData));
      if (signupUser.fulfilled.match(result)) {
        return { success: true };
      }
      return { success: false, error: result.error?.message || 'Signup failed' };
    } catch (err) {
      console.error('Signup error:', err);
      return { success: false, error: err.message || 'An error occurred during signup' };
    }
  };

  const signout = () => {
    dispatch(logout());
    router.push('/signin');
  };

  return {
    user,
    profile,
    isAuthenticated,
    loading,
    error,
    login,
    signup,
    logout: signout,
  };
};

export default useAuth;
