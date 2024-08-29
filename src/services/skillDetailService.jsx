import axios from 'axios';

const BASE_URL = 'http://localhost:8080/user/';

const addSkills = async (skills, skillType, userId, languages) => {
  try {
    const response = await axios.post(`${BASE_URL}addSkills`, {
      skills: skills.split(", ").map((skill) => skill.trim()),
      skillType: skillType,
      userId: userId,
      languages: languages.join(", "), // Convert the array to a comma-separated string
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : 'Failed to save skills and languages');
  }
};

export { addSkills };

