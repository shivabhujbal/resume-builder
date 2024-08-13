import axios from 'axios';

const BASE_URL = 'http://localhost:8080/user/';

const addBasicDetails = async (formData) => {
  const jsonData = {
    first_name: formData.firstName,
    last_name: formData.surname,
    email: formData.email,
    phone: formData.phone,
    profession: formData.profession,
    city: formData.city,
    country: formData.country,
    linkedin: formData.linkedin,
    website: formData.website,
  };

  try {
    const response = await axios.post(`${BASE_URL}basicdetails`, jsonData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200 || response.status === 201) {
      console.log('Form data sent successfully');
      return { success: true, data: response.data };
    } else {
      console.error('Failed to send form data');
      return { success: false, error: 'Failed to send form data' };
    }
  } catch (error) {
    console.error('Error:', error);
    return { success: false, error };
  }
};

export { addBasicDetails };
