import axios from 'axios';

const BASE_URL = 'http://localhost:8080/user/';

const addBasicDetails = async (formData) => {
  const formDataToSend = new FormData();

  // Serialize the form fields as JSON (except for the profileImage)
  const detailsJson = JSON.stringify({
    userId: formData.userId,
    first_name: formData.firstName,
    last_name: formData.surname,
    email: formData.email,
    phone: formData.phone,
    profession: formData.profession,
    city: formData.city,
    country: formData.country,
    linkedin: formData.linkedin,
    github: formData.website,
    message:formData.summary // Assuming 'website' refers to GitHub in your form
  });

  // Append the JSON data as a string
  formDataToSend.append('details', detailsJson);

  // Append the profile image if it exists
  if (formData.profileImage) {
    formDataToSend.append('profileImage', formData.profileImage);
  }

  console.log('FormData content:');
for (const pair of formDataToSend.entries()) {
  console.log(`${pair[0]}: ${pair[1]}`);
}


  try {
    const response = await axios.post(`${BASE_URL}addBasicDetails`, formDataToSend, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data.message;
  } catch (error) {
    console.error('Error:', error);
    return { success: false, error };
  }
};

export { addBasicDetails };
