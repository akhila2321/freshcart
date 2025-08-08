import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-hot-toast';

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
      // Save user data to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(action.payload));
      }
      toast.success('Login successful!');
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      toast.error(action.payload || 'Login failed');
    },
    signupStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signupSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
      if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(action.payload));
      }
      toast.success('Account created successfully!');
    },
    signupFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      toast.error(action.payload || 'Signup failed');
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('user');
      }
      toast.success('Logged out successfully');
    },
    loadUser: (state) => {
      if (typeof window !== 'undefined') {
        const user = localStorage.getItem('user');
        if (user) {
          state.user = JSON.parse(user);
          state.isAuthenticated = true;
        }
      }
    }
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  signupStart,
  signupSuccess,
  signupFailure,
  logout,
  loadUser
} = authSlice.actions;

export default authSlice.reducer;

// Helper function to handle API responses
const handleApiResponse = async (response) => {
  const contentType = response.headers.get('content-type');
  
  if (!contentType || !contentType.includes('application/json')) {
    const text = await response.text();
    throw new Error('Invalid response from server');
  }
  
  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.message || `Request failed with status ${response.status}`);
  }
  
  return data;
};

// Thunks for async operations
export const loginUser = (credentials) => async (dispatch) => {
  try {
    dispatch(loginStart());
    
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
      credentials: 'same-origin',
    });

    const data = await handleApiResponse(response);
    
    if (!data.user) {
      throw new Error('Invalid response format from server');
    }

    dispatch(loginSuccess(data.user));
    return data;
  } catch (error) {
    console.error('Login error:', error);
    const errorMessage = error.message || 'Failed to log in. Please try again.';
    dispatch(loginFailure(errorMessage));
    throw new Error(errorMessage);
  }
};

export const signupUser = (userData) => async (dispatch) => {
  try {
    dispatch(signupStart());
    
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
      credentials: 'same-origin',
    });

    const data = await handleApiResponse(response);
    
    if (!data.user) {
      throw new Error('Invalid response format from server');
    }

    dispatch(signupSuccess(data.user));
    return data;
  } catch (error) {
    console.error('Signup error:', error);
    const errorMessage = error.message || 'Failed to create account. Please try again.';
    dispatch(signupFailure(errorMessage));
    throw new Error(errorMessage);
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch(logout());
};
