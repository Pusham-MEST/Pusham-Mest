import axios from 'axios';

export const fetchOutageData = async () => {
  try {
    const response = await axios.get('https://your-backend-endpoint/api/outages');
    return response.data;
  } catch (error) {
    console.error('Error fetching outage data:', error);
    throw error;
  }
};
