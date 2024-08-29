import axios from 'axios';

const BASE_URL = 'http://localhost:8080/user/';

const addSkills = async (skillData) => {
  try {
    const response = await axios.post(`${BASE_URL}addSkills`, skillData);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : 'Failed to save skills');
  }
};

export { addSkills } ;
