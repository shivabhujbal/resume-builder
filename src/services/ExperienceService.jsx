import axios from "axios";
const BASE_URL = 'http://localhost:8080/user';


const addExperience = async(experienceData) =>{
    try{
        const response = await axios.post(`${BASE_URL}/addExperiance`,experienceData);
        return response.data
    }
    catch(error){
        console.error("Error While adding Experience",error);
        throw error;

        
    }
}

const getExperience = async(userId) =>{

    try {
        const response =await axios.get(`${BASE_URL}/${userId}/getexperience`);
        return response.data
    } catch (error) {

        console.error("Error While getting Experience",error);
        throw error;
        
        
    }
}

export{addExperience,getExperience};