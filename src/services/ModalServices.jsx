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

export const updateEducationDetails = async (id, education) => {
  try {
    const response = await axios.put(`http://localhost:8080/user/updateEducation/${id}`, education);
    console.log('Update successful:', response);
    return response.data;
  } catch (error) {
    console.error('Error updating Education details:', error);
    throw error;
  }
};
  
export const updateExperienceDetails = async (id, experience) => {
  try {
    const response = await axios.put(`http://localhost:8080/user/updateExperiance/${id}`, experience);
    console.log('Update successful:', response);
    return response.data;
  } catch (error) {
    console.error('Error updating experience details:', error);
    throw error;
  }
};

// export const updateCertificationDetails = async (id, certification) => {
//   try {
//     const response = await axios.put(`http://localhost:8080/user/updateEducation/${id}`, certification);
//     console.log('Update successful:', response);
//     return response.data;
//   } catch (error) {
//     console.error('Error updating certification details:', error);
//     throw error;
//   }
// };

export const updateProjectDetails = async (id, project) => {
  try {
    const response = await axios.put(`http://localhost:8080/user/updateProject/${id}`, project);
    console.log('Update successful:', response);
    return response.data;
  } catch (error) {
    console.error('Error updating project details:', error);
    throw error;
  }
};

export const updateSkillDetails = async (id, skills) => {
  try {
    const response = await axios.put(`http://localhost:8080/user/updateSkills/${id}`, skills);
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