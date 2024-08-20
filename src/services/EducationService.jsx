import axios from "axios";
const BASE_URL = 'http://localhost:8080/user';


const addEducation = async(educationData) =>{
    try{
        const response = await axios.post(`${BASE_URL}/addEducation`,educationData);
        return response.data
    }
    catch(error){
        console.error("Error While adding Education",error);
        throw error;

        
    }
}

const getEducation = async(userId) =>{

    try {
        const response =await axios.get(`${BASE_URL}/${userId}/geteducation`);
        return response.data
    } catch (error) {

        console.error("Error While getting Education",error);
        throw error;
        
        
    }
}

export{addEducation,getEducation};