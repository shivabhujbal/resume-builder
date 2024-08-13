import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Country, State, City } from 'country-state-city';
import '../App.css';
import Sidebar from './Sidebar';
import { addBasicDetails} from '../services/BasicDetailService';

function BasicDetail() {
  // State to manage dynamically added fields
  const [linkedinFields, setLinkedinFields] = useState([]);
  const [websiteFields, setWebsiteFields] = useState([]);

  // Initialize the useNavigate hook
  const navigate = useNavigate();

  // State to manage form fields
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    profession: '',
    city: '',
    country: '',
    phone: '',
    email: '',
    linkedin: '',
    website: '',
  });

  // State to manage form errors
  const [formErrors, setFormErrors] = useState({});

  // State to store countries and cities
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  // Fetch countries when component mounts
  useEffect(() => {
    const countryList = Country.getAllCountries();
    setCountries(countryList);
  }, []);

  // Fetch cities whenever the selected country changes
  useEffect(() => {
    if (formData.country) {
      const selectedCountry = Country.getCountryByCode(formData.country);
      const cityList = City.getCitiesOfCountry(selectedCountry?.isoCode);
      setCities(cityList || []);
    }
  }, [formData.country]);

  // Handler to update form data state
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Validation function
  const validateForm = () => {
    const errors = {};

    // Validate First Name
    if (formData.firstName.length < 3 || formData.firstName.length > 15) {
      errors.firstName = 'First name must be between 3 and 15 characters.';
    }

    // Validate Surname
    if (formData.surname.length < 3 || formData.surname.length > 15) {
      errors.surname = 'Surname must be between 3 and 15 characters.';
    }

    // Validate City
    if (!formData.city) {
      errors.city = 'City is required.';
    }

    // Validate Country
    if (!formData.country) {
      errors.country = 'Country is required.';
    }

    // Validate Phone Number
    if (!/^[789]\d{9}$/.test(formData.phone)) {
      errors.phone = 'Phone number must be a valid 10-digit number.';
    }

    // Validate Email
    if (!formData.email.endsWith('@gmail.com')) {
      errors.email = 'Email must be a valid Gmail address.';
    }

    setFormErrors(errors);

    // Return true if no errors
    return Object.keys(errors).length === 0;
  };

  const handleNextClick = async () => {
    if (validateForm()) {
      const result = await addBasicDetails(formData); // Use the service

      if (result.success) {
        navigate('/education-details');
      } else {
        console.error(result.error);
      }
    }
  };
   
  const handleBackClick = () => {
    navigate('/'); // Navigate back to the home page
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar Component */}
      <div className="sticky top-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow overflow-y-auto mx-auto w-full h-screen">
        <div className="container w-[1120px] h-screen ml-[4.5rem] py-14">
          <div className="px-4">
            {/* Arrow alignment fix using flex properties */}
            <button onClick={handleBackClick} className="text-blue-600 relative flex items-center mb-1">
              <FaArrowLeft className="mr-2" /> {/* Add margin-right for spacing */}
              Go Back
            </button>
            <h1 className="text-4xl font-semibold leading-tight">
              What’s the best way for employers to
            </h1>
            <h1 className="text-4xl font-semibold">contact you?</h1>
            <p className="text-zinc-900 text-lg pt-4">
              We suggest including an email and phone number.
            </p>
          </div>
          <p className="text-sm font-semibold px-4 mt-6">
            * indicates a required field
          </p>
          <form className="px-4 mt-5 space-y-5">
            <div className="flex gap-8">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-md font-semibold text-gray-700"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="e.g. Saanvi"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`mt-1 block w-80 h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    formErrors.firstName ? 'border-red-500' : ''
                  }`}
                />
                {formErrors.firstName && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.firstName}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="surname"
                  className="block text-md font-semibold text-gray-700"
                >
                  Surname *
                </label>
                <input
                  type="text"
                  id="surname"
                  placeholder="e.g. Patel"
                  value={formData.surname}
                  onChange={handleInputChange}
                  className={`mt-1 block w-80 h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    formErrors.surname ? 'border-red-500' : ''
                  }`}
                />
                {formErrors.surname && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.surname}</p>
                )}
              </div>
            </div>

            <div className="grid">
              <div>
                <label
                  htmlFor="profession"
                  className="block text-md font-semibold text-gray-700"
                >
                  Profession
                </label>
                <input
                  type="text"
                  id="profession"
                  placeholder="e.g. Software Engineer"
                  value={formData.profession}
                  onChange={handleInputChange}
                  className="mt-1 block w-[675px] h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="grid">
              <div>
                <label
                  htmlFor="summary"
                  className="block text-md font-semibold text-gray-700"
                >
                  Summary
                </label>
                <textarea
                  id="summary"
                  placeholder="Write a short summary about yourself..."
                  className="mt-1 block w-[675px] h-24 px-3 pt-2 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  style={{ resize: 'none' }}
                />
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex gap-4">
                <div>
                  <label
                    htmlFor="country"
                    className="block text-md font-semibold text-gray-700"
                  >
                    Country *
                  </label>
                  <select
                    id="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className={`mt-1 block w-80 h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                      formErrors.country ? 'border-red-500' : ''
                    }`}
                  >
                    <option value="">Select a country</option>
                    {countries.map((country) => (
                      <option key={country?.isoCode} value={country?.isoCode}>
                        {country?.name}
                      </option>
                    ))}
                  </select>
                  {formErrors.country && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.country}</p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block text-md font-semibold text-gray-700"
                >
                  City *
                </label>
                <select
                  id="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={`mt-1 block w-80 h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    formErrors.city ? 'border-red-500' : ''
                  }`}
                >
                  <option value="">Select a city</option>
                  {cities.map((city) => (
                    <option key={city?.name} value={city?.name}>
                      {city?.name}
                    </option>
                  ))}
                </select>
                {formErrors.city && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.city}</p>
                )}
              </div>
            </div>

            <div className="flex gap-8">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-md font-semibold text-gray-700"
                >
                  Phone *
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="e.g. +91 22 1234 5677"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`mt-1 block w-80 h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    formErrors.phone ? 'border-red-500' : ''
                  }`}
                />
                {formErrors.phone && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-md font-semibold text-gray-700"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="e.g. saanvipatel@sample.in"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`mt-1 block w-80 h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    formErrors.email ? 'border-red-500' : ''
                  }`}
                  required
                />
                {formErrors.email && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                )}
              </div>
            </div>

            <div className="flex gap-8">
              <div>
                <label
                  htmlFor="linkedin"
                  className="block text-md font-semibold text-gray-700"
                >
                  LinkedIn
                </label>
                <input
                  type="url"
                  id="linkedin"
                  placeholder="e.g. linkedin.com/in/saanvi-patel"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  className="mt-1 block w-80 h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="website"
                  className="block text-md font-semibold text-gray-700"
                >
                  Github
                </label>
                <input
                  type="url"
                  id="website"
                  placeholder="e.g. http://medium.com/saanvi-patel"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="mt-1 block w-80 h-9 px-3 bg-white border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            {/* Flexbox for aligning the last three buttons */}
            <div className="flex justify-between pt-6 pb-16">
              {/* Left-aligned button */}
              <div></div>

              {/* Right-aligned buttons */}
              <div className="flex gap-4">
                <button
                  type="button"
                  className="items-end w-32 py-3 px-5 border border-blue-800 rounded-full text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Preview
                </button>

                <button
                  type="button"
                  onClick={handleNextClick} // Use navigate handler for routing
                  className="py-3 px-5 text-base font-medium border border-transparent rounded-full shadow-sm text-blue-700 bg-yellow-400 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Next: Education
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BasicDetail;
