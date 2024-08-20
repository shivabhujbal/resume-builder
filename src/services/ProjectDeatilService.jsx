import axios from "axios";

const BASE_URL = 'http://localhost:8080/user';

const addProject = async (projectData) => {
    try {
        const response = await axios.post(`${BASE_URL}/addProject`, projectData);
        return response.data;
    } catch (error) {
        console.error("Error while adding project:", error);
        throw error;
    }
};

export { addProject };
