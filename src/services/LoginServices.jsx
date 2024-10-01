import axios from 'axios';

const BASE_URL = 'http://localhost:8080'; // Replace with your backend base URL

// Facebook Login Redirect
export const facebookLogin = async () => {
  try {
    window.location.href = `${BASE_URL}/auth/login/facebook`;
  } catch (error) {
    console.error('Error during Facebook login redirect:', error);
  }
};

// Google Login Redirect
export const googleLogin = async () => {
  try {
    window.location.href = `${BASE_URL}/auth/login/google`;
  } catch (error) {
    console.error('Error during Google login redirect:', error);
  }
};

// Login User
export const loginUser = async (loginData) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/login`, loginData);
    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error.response ? error.response.data : error;
  }
};

// Register User
export const registerUser = async (signupData) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/signUp`, signupData);
    return response.data;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error.response ? error.response.data : error;
  }
};

// Reset User Password
export const resetPassword = async (passwordResetData) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/resetPassword`, passwordResetData);
    return response.data;
  } catch (error) {
    console.error('Error during password reset:', error);
    throw error.response ? error.response.data : error;
  }
};
