import axios from "axios";
const BASE_URL = 'http://localhost:8080/user';


const getAllDetails = async(userId) =>{

    try {
        const response =await axios.get(`${BASE_URL}/getAllBasicDetails/${userId}`);
        return response.data
    } catch (error) {

        console.error("Error While getting All user Data",error);
        throw error;
              
    }

    
}


export{getAllDetails}