import axios from 'axios';

const BASE_URL = 'http://localhost:8080/user';

/*const addSummaryDetails = async (userId, FormData) => {
    const jsonData = {
        firstname: FormData.first_name,
        lastname: FormData.last_name,
        email: FormData.email,
        phone: FormData.phone,
        profession: FormData.profession,
        city: FormData.city,
        country: FormData.country,
        linkdIn: FormData.linkedin,
        github: FormData.website
    };

    try {
        const response = await axios.put(`${BASE_URL}updateBasicdetails/${userId}`, jsonData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200 || response.status === 201) {
            console.log('Form data sent successfully');
            return { success: true, data: response.data };
        } else {
            console.log('Failed to send form data');
            return { success: false, error: 'Failed to send form data' };
        }
    } catch (error) {
        console.log('Error:', error);
        return { success: false, error };
    }
};*/

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
