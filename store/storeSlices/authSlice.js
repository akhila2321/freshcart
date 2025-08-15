import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-hot-toast';

// Load user from localStorage if available
const loadFromLocalStorage = () => {
  if (typeof window === 'undefined') {
    return {
      user: null,
      isAuthenticated: false,
      loading: false,
      error: null,
      token: null
    };
  }
  
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');
    
    return {
      user: user || null,
      isAuthenticated: !!user,
      loading: false,
      error: null,
      token: token || null
    };
  } catch (error) {
    console.error('Failed to parse user data from localStorage', error);
    return {
      user: null,
      isAuthenticated: false,
      loading: false,
      error: null,
      token: null
    };
  }
};

const initialState = loadFromLocalStorage();

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

// Helper function to handle successful authentication
export const handleSuccessfulAuth = (dispatch, responseData) => {
  const userData = responseData.user || responseData;
  const token = responseData.token || '';
  
  // Save to localStorage
  if (userData) {
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', token);
  }
  
  // Update Redux state
  dispatch(loginSuccess(userData));
  
  // Show welcome message
  toast.success(`Welcome${userData.name ? `, ${userData.name.split(' ')[0]}` : ''}! You're now logged in.`);
  
  return { user: userData, token };
};

export const signupUser = (userData) => async (dispatch) => {
  try {
    dispatch(signupStart());
    
    console.log('Starting signup with data:', { 
      ...userData, 
      password: '***' // Don't log actual password 
    });
    
    // Make API request
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    console.log('Signup API response status:', response.status);
    
    // Handle non-JSON responses
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text();
      console.error('Non-JSON response from server:', text);
      throw new Error('Server returned an invalid response');
    }

    const data = await response.json().catch(async (parseError) => {
      console.error('Error parsing JSON response:', parseError);
      const text = await response.text();
      console.error('Response text:', text);
      throw new Error('Failed to parse server response');
    });
    
    console.log('Signup API response data:', data);
    
    // Check for error in response
    if (!response.ok) {
      console.error('Signup API error:', data);
      const error = new Error(data.message || 'Failed to sign up');
      error.response = { data };
      throw error;
    }
    
    // Handle successful signup and automatic login
    const authData = handleSuccessfulAuth(dispatch, data);
    
    // Return the user data for the component to use
    return authData;
  } catch (error) {
    console.error('Signup error:', {
      name: error.name,
      message: error.message,
      stack: error.stack,
      response: error.response,
      code: error.code,
    });
    
    let errorMessage = 'Failed to create account. Please try again.';
    
    try {
      // Handle API error response
      if (error.response) {
        // Handle HTTP error status codes
        if (error.response.status === 400) {
          errorMessage = error.response.data?.message || 'Invalid request. Please check your input.';
        } else if (error.response.status === 401) {
          errorMessage = 'Authentication failed. Please try again.';
        } else if (error.response.status === 409) {
          errorMessage = 'An account with this email already exists. Please log in instead.';
        } else if (error.response.status >= 500) {
          errorMessage = 'Server error. Please try again later.';
        }
      } 
      // Handle specific error messages
      else if (error.message) {
        const msg = error.message.toLowerCase();
        if (msg.includes('user already exists') || 
            msg.includes('email already exists') ||
            msg.includes('duplicate key')) {
          errorMessage = 'An account with this email already exists. Please log in instead.';
        } else if (msg.includes('validation') || 
                  msg.includes('validationerror') ||
                  msg.includes('invalid')) {
          errorMessage = 'Please check your input and try again.';
        } else if (msg.includes('network') || 
                  msg.includes('fetch') || 
                  msg.includes('failed to fetch')) {
          errorMessage = 'Network error. Please check your connection and try again.';
        } else if (msg.includes('timeout') || msg.includes('timed out')) {
          errorMessage = 'Request timed out. Please try again.';
        } else if (msg.includes('json')) {
          errorMessage = 'Invalid server response. Please try again.';
        }
      }
    } catch (e) {
      console.error('Error processing error message:', e);
      errorMessage = 'An unexpected error occurred. Please try again.';
    }
    
    // Show error toast with the determined message
    toast.error(errorMessage);
    
    // Dispatch failure action with the error message
    dispatch(signupFailure(errorMessage));
    
    // Don't re-throw the error to prevent unhandled promise rejection
    // The error is already handled by the toast and state update
    return { error: errorMessage };
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch(logout());
};
