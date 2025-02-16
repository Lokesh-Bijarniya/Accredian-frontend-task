import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export const submitReferral = async (referralData) => {
  try {
    const response = await apiClient.post('/referrals', referralData);
    return response.data; 
  } catch (error) {
    if (error.response) {
      // Handle server-side errors
      throw new Error(error.response.data.message || 'Failed to submit referral');
    } else {
      // Handle network or other errors
      throw new Error('Network error. Please try again later.');
    }
  }
};