import axios from 'axios';

export const sendEmail = async (email, subject, message) => {
  try {
    const response = await axios.post('http://localhost:3001/api/send-email', {
      email,
      subject,
      message
    });
    return response.data;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
