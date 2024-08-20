import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { addEducation } from "../services/EducationService";

function EducationDetail() {
  const [formData, setFormData] = useState({
    schoolName: "",
    schoolLocation: "",
    degree: "",
    fieldOfStudy: "",
    month: "",
    graduationYear: "",
    userId: "3",
    isGapTaken: false,
    gapYear: "",
    certifications: [],
  });

  const [newCertification, setNewCertification] = useState("");
  const [errors, setErrors] = useState({});

  const months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];
  const degrees = [
    {
      value: "BACHELOR_OF_COMPUTER_APPLICATION",
      label: "Bachelor of Computer Application (BCA)",
    },
    {
      value: "BACHELOR_OF_BUSINESS_ADMINISTRATION",
      label: "Bachelor of Business Administration (BBA)",
    },
    { value: "BACHELOR_OF_COMMERCE", label: "Bachelor of Commerce (BCom)" },
    { value: "BACHELOR_OF_SCIENCE", label: "Bachelor of Science (BSc)" },
    { value: "BACHELOR_OF_ARTS", label: "Bachelor of Arts (BA)" },
    { value: "BACHELOR_OF_ENGINEERING", label: "Bachelor of Engineering (BE)" },
    {
      value: "BACHELOR_OF_TECHNOLOGY",
      label: "Bachelor of Technology (BTech)",
    },
    { value: "BACHELOR_OF_EDUCATION", label: "Bachelor of Education (BEd)" },
    { value: "BACHELOR_OF_FINE_ARTS", label: "Bachelor of Fine Arts (BFA)" },
    { value: "BACHELOR_OF_LAW", label: "Bachelor of Law (LLB)" },
    { value: "BACHELOR_OF_MEDICINE", label: "Bachelor of Medicine (MBBS)" },
    {
      value: "MASTER_OF_COMPUTER_APPLICATION",
      label: "Master of Computer Application (MCA)",
    },
    {
      value: "MASTER_OF_BUSINESS_ADMINISTRATION",
      label: "Master of Business Administration (MBA)",
    },
    { value: "MASTER_OF_COMMERCE", label: "Master of Commerce (MCom)" },
    { value: "MASTER_OF_SCIENCE", label: "Master of Science (MSc)" },
    { value: "MASTER_OF_ARTS", label: "Master of Arts (MA)" },
    { value: "MASTER_OF_ENGINEERING", label: "Master of Engineering (ME)" },
    { value: "MASTER_OF_TECHNOLOGY", label: "Master of Technology (MTech)" },
    { value: "MASTER_OF_EDUCATION", label: "Master of Education (MEd)" },
    { value: "MASTER_OF_FINE_ARTS", label: "Master of Fine Arts (MFA)" },
    { value: "MASTER_OF_LAW", label: "Master of Law (LLM)" },
    {
      value: "MASTER_OF_PUBLIC_HEALTH",
      label: "Master of Public Health (MPH)",
    },
    { value: "MASTER_OF_SOCIAL_WORK", label: "Master of Social Work (MSW)" },
    { value: "DOCTOR_OF_PHILOSOPHY", label: "Doctor of Philosophy (PhD)" },
    { value: "DOCTOR_OF_MEDICINE", label: "Doctor of Medicine (MD)" },
    {
      value: "DOCTOR_OF_BUSINESS_ADMINISTRATION",
      label: "Doctor of Business Administration (DBA)",
    },
    { value: "DOCTOR_OF_EDUCATION", label: "Doctor of Education (EdD)" },
    {
      value: "DOCTOR_OF_PUBLIC_HEALTH",
      label: "Doctor of Public Health (DrPH)",
    },
    { value: "other", label: "Other" },
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.schoolName)
      newErrors.schoolName = "School/University name is required.";
    if (formData.schoolName.length < 3)
      newErrors.schoolName = "School Name must be at least 3 characters long.";
    if (!/^[a-zA-Z\s]+$/.test(formData.schoolName))
      newErrors.schoolName =
        "School name must only contain letters and spaces.";

    if (!formData.schoolLocation)
      newErrors.schoolLocation = "School/University location is required.";
    if (!/^[a-zA-Z\s]+$/.test(formData.schoolLocation))
      newErrors.schoolLocation =
        "Location must only contain letters and spaces.";
    if (formData.schoolName.length < 3)
      newErrors.schoolName = "Location must be at least 3 characters long.";

    if (!formData.degree) newErrors.degree = "Degree is required.";

    if (!formData.fieldOfStudy)
      newErrors.fieldOfStudy = "Field of study is required.";
    if (formData.schoolName.length < 3)
      newErrors.schoolName =
        "Field of study must be at least 3 characters long.";

    if (!formData.month) newErrors.month = "Graduation month is required.";
    if (!formData.graduationYear)
      newErrors.graduationYear = "Graduation Year is required.";

    if (formData.isGapTaken && !formData.gapYear) {
      newErrors.gapYear = "Gap years is required."; // Add this line
    }

    if (formData.isGapTaken && !formData.gapYear) {
      newErrors.gapYear = "Gap years is required."; // Add this line
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle adding a new certification to the list

  const handleCertificationChange = (e) => {
    setNewCertification(e.target.value);
  };

  const handleAddCertification = () => {
    if (newCertification.trim() !== "") {
      setFormData((prevData) => ({
        ...prevData,
        certifications: [...prevData.certifications, newCertification],
      }));
      setNewCertification(""); // Clear the input field after adding
    }
  };

  const handleRemoveCertification = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      certifications: prevData.certifications.filter((_, i) => i !== index),
    }));
  };

  // ====================================================

  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      isGapTaken: checked,
      gapYear: checked ? prevData.gapYear : "",
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
    }
  };
  const handleAddEducation = async (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);

      const response = await addEducation(formData);
      console.log("res", response);

      alert("Education Details Submitted");

      setFormData({
        schoolName: '',
        schoolLocation: '',
        degree: '',
        fieldOfStudy: '',
        month: '',
        graduationYear: '',
        certifications:[],
        isGapTaken:false,

      });
    }
  };

  const navigate = useNavigate();

  const handleNextClick = async() => {
    if (validate()) {
      console.log(formData);
      const response = await addEducation(formData);
      console.log("res", response);

      alert("Education Details Submitted");
      navigate("/experience-details"); // Navigate to experience details
    }
  };

  const handleBackClick = () => {
    navigate("/basic-details"); // Navigate back to the home page
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar Component */}
      <div className="flex-shrink-0 w-64">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow overflow-y-auto">
        <div className="w-full h-full flex justify-center items-start py-10">
          <div className="container w-[1120px] py-4 pl-3">
            <button
              onClick={handleBackClick}
              className="text-blue-600 flex items-center mb-2"
            >
              <FaArrowLeft className="mr-2" />
              Go Back
            </button>
            <h1 className="text-4xl font-semibold leading-tight mb-3">
              Tell us about your education
            </h1>
            <p className="mb-6 text-lg text-zinc-900">
              Enter your education experience so far, even if you are a current
              student or did not graduate.
            </p>
            <p className="text-sm font-semibold mt-6 mb-5">
              * indicates a required field
            </p>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 sm:col-span-1">
                  <label className="block mb-1 font-semibold text-gray-700">
                    School/ University Name
                    <span className="text-red-900">*</span>
                  </label>
                  <input
                    type="text"
                    name="schoolName"
                    placeholder="e.g. Delhi University"
                    value={formData.schoolName}
                    onChange={handleChange}
                    className={`mt-1 block h-fit w-full px-3 py-2 bg-white border rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.school_name ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.schoolName && (
                    <p className="text-red-500 text-sm">{errors.schoolName}</p>
                  )}
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block mb-1 font-semibold text-gray-700">
                    School/ University Location
                    <span className="text-red-900">*</span>
                  </label>
                  <input
                    type="text"
                    name="schoolLocation"
                    placeholder="e.g. Delhi, India"
                    value={formData.schoolLocation}
                    onChange={handleChange}
                    className={`mt-1 block h-fit w-full px-3 py-2 bg-white border rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.schoolLocation ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.schoolLocation && (
                    <p className="text-red-500 text-sm">
                      {errors.schoolLocation}
                    </p>
                  )}
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block mb-1 font-semibold text-gray-700">
                    Degree<span className="text-red-900">*</span>
                  </label>
                  <select
                    name="degree"
                    value={formData.degree}
                    onChange={handleChange}
                    className={`mt-1 block h-fit w-full px-3 py-2 bg-white border rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.degree ? "border-red-500" : "border-gray-300"}`}
                  >
                    <option value="">Select</option>
                    {degrees.map((degree, index) => (
                      <option key={index} value={degree.value}>
                        {degree.label}
                      </option>
                    ))}
                  </select>
                  {errors.degree && (
                    <p className="text-red-500 text-sm">{errors.degree}</p>
                  )}
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block mb-1 font-semibold text-gray-700">
                    Field Of Study<span className="text-red-900">*</span>
                  </label>
                  <input
                    type="text"
                    name="fieldOfStudy"
                    placeholder="e.g. Financial Accounting"
                    value={formData.fieldOfStudy}
                    onChange={handleChange}
                    className={`mt-1 block h-fit w-full px-3 py-2 bg-white border rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.fieldOfStudy ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.fieldOfStudy && (
                    <p className="text-red-500 text-sm">
                      {errors.fieldOfStudy}
                    </p>
                  )}
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block mb-1 font-semibold text-gray-700">
                    Graduation Date (Or Expected Graduation Date)
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <select
                      name="month"
                      value={formData.month}
                      onChange={handleChange}
                      className={`mt-1 block h-fit w-full px-3 py-2 bg-white border rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.month ? "border-red-500" : "border-gray-300"}`}
                    >
                      <option value="">Month</option>
                      {months.map((month, index) => (
                        <option key={index} value={month}>
                          {month}
                        </option>
                      ))}
                    </select>
                    <select
                      name="graduationYear"
                      value={formData.graduationYear}
                      onChange={handleChange}
                      className={`mt-1 block h-fit w-full px-3 py-2 bg-white border rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.graduationYear ? "border-red-500" : "border-gray-300"}`}
                    >
                      <option value="">Year</option>
                      {Array.from({ length: 10 }, (_, i) => {
                        const year = new Date().getFullYear() - i;
                        return (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  {errors.month && (
                    <p className="text-red-500 text-sm">{errors.month}</p>
                  )}
                  {errors.graduationYear && (
                    <p className="text-red-500 text-sm">
                      {errors.graduationYear}
                    </p>
                  )}
                </div>
              </div>

              <div className="col-span-2 mt-3 sm:col-span-1">
                <label className="block text-gray-700">
                  Did you take a Gap?
                </label>
                <input
                  type="checkbox"
                  name="isGapTaken"
                  checked={formData.isGapTaken}
                  onChange={handleCheckboxChange}
                  className="mr-2 leading-tight"
                />
              </div>

              {formData.isGapTaken == "1" && (
                <div className="col-span-2 sm:col-span-1">
                  <label className="block mb-1 font-semibold text-gray-700">
                    Gap Year(s) Duration<span className="text-red-900">*</span>
                  </label>
                  <input
                    type="text"
                    name="gapYear"
                    placeholder="e.g. 2020-2021"
                    value={formData.gapYear}
                    onChange={handleChange}
                    className={`mt-1 block h-fit w-full px-3 py-2 bg-white border rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.gapYear ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.gapYear && (
                    <p className="text-red-500 text-sm">{errors.gapYear}</p>
                  )}
                </div>
              )}

              {/* Certifications */}
              <div className="col-span-2 sm:col-span-1">
                <label className="block mb-1 font-semibold text-gray-700">
                  Certifications
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    name="certifications"
                    placeholder="e.g. Certified Java Developer"
                    value={newCertification}
                    onChange={handleCertificationChange}
                    className={`mt-1 h-fit block w-full px-3 py-2 bg-white border rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.certifications ? "border-red-500" : "border-gray-300"}`}
                  />
                  <button
                    type="button"
                    onClick={handleAddCertification}
                    className="py-2 px-4 h-fit bg-blue-600 text-white rounded-sm"
                  >
                    Add
                  </button>
                </div>
                {/* Display the list of added certifications */}
                {formData.certifications.length > 0 && (
                  <ul className="mt-2">
                    {formData.certifications.map((cert, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <span>{cert}</span>
                        <button
                          type="button"
                          onClick={() => handleRemoveCertification(index)}
                          className="text-red-500 text-sm"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-10 pr-5 pb-10 flex justify-end space-x-5">
                <button
                  type="submit"
                  onClick={handleAddEducation}
                  className="py-3 px-5 h-fit border border-blue-800 rounded-full text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Add+
                </button>
                <button
                  type="button" // Changed to button to prevent form submission
                  onClick={handleNextClick}
                  className="items-end px-5 h-fit py-3 text-base font-medium border border-transparent rounded-full shadow-sm text-blue-700 bg-yellow-400 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                 Save & Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationDetail;
