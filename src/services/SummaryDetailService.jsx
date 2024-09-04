import axios from 'axios';

const BASE_URL = 'http://localhost:8080/user';


 const getBasicDetails = async (userId) => {
   try {
    const response = await axios.get(`${BASE_URL}/getAllBasicDetails/${userId}`);
   console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching basic details:', error);
    throw error;
  }
};
export { getBasicDetails };
