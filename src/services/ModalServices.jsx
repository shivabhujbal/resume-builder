import axios from 'axios';

const BASE_URL = 'http://localhost:8080/user';

 export const getModalBasicDetails = async (userId) => {
    try {
     const response = await axios.get(`${BASE_URL}/getAllBasicDetails/${userId}`);
    console.log(response);
     return response.data;
   } catch (error) {
     console.error('Error fetching basic details:', error);
     throw error;
   }
 };

 export const updateBasicDetails = async (userId, basicDetails) => {
  try {
    const response = await axios.put(`http://localhost:8080/user/updateBasicdetails/${userId}`, basicDetails);
    console.log('Update successful:', response);
    return response.data;
  } catch (error) {
    console.error('Error updating basic details:', error);
    throw error;
  }
};

export const updateEducationDetails = async (userId, education) => {
  try {
    const response = await axios.put(`http://localhost:8080/user/updateEducation/${userId}`, education);
    console.log('Update successful:', response);
    return response.data;
  } catch (error) {
    console.error('Error updating Education details:', error);
    throw error;
  }
};
  
export const updateExperienceDetails = async (userId, experience) => {
  try {
    const response = await axios.put(`http://localhost:8080/user/updateExperiance/${userId}`, experience);
    console.log('Update successful:', response);
    return response.data;
  } catch (error) {
    console.error('Error updating experience details:', error);
    throw error;
  }
};

export const updateCertificationDetails = async (userId, certification) => {
  try {
    const response = await axios.put(`http://localhost:8080/user/updateEducation/${userId}`, certification);
    console.log('Update successful:', response);
    return response.data;
  } catch (error) {
    console.error('Error updating certification details:', error);
    throw error;
  }
};

export const updateProjectDetails = async (userId, project) => {
  try {
    const response = await axios.put(`http://localhost:8080/updateProject/${userId}`, project);
    console.log('Update successful:', response);
    return response.data;
  } catch (error) {
    console.error('Error updating project details:', error);
    throw error;
  }
};

export const updateSkillDetails = async (userId, skills) => {
  try {
    const response = await axios.put(`http://localhost:8080/user/updateSkills/${userId}`, skills);
    console.log('Update successful:', response);
    return response.data;
  } catch (error) {
    console.error('Error updating Skill details:', error);
    throw error;
  }
};



/*export const updateSummaryDetail = async (userId, basicDetails) => {
  try {
    const response = await axios.put(`http://localhost:8080/user/updateBasicdetails//${userId}`, basicDetails);
    console.log('Update successful:', response);
    return response.data;
  } catch (error) {
    console.error('Error updating basic details:', error);
    throw error;
  }
};*/