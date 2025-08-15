import { createContext, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser as loadUserAction } from '@/store/storeSlices/authSlice';

export const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
});

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, loading, error } = useSelector((state) => state.auth);

  // Load user on initial render
  useEffect(() => {
    dispatch(loadUserAction());
  }, [dispatch]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading: loading,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
