import axios from 'axios';

const API_BASE_URL = 'https://pusham-api.onrender.com'; 

export const registerUser = async (userData) => {
  try {
    
    const response = await axios.post(`${API_BASE_URL}/api/register`, userData);
    return response;
  } catch (error) {
    throw error;
  }
};
