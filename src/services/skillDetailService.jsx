import axios from 'axios';

const BASE_URL = 'http://localhost:8080/users/';

const addSkills = async (skills, skillType, userId) => {
  try {
    const response = await axios.post(`${BASE_URL}addSkills`, {
      skills: skills.split(", ").map((skill) => skill.trim()),
      skillType: skillType,
      userId: userId,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : 'Failed to save skills');
  }
};

export { addSkills } ;
