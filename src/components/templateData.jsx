// src/resumeData.js

const templateData = {
  profileImage: "https://example.com/profile-picture.jpg",
  userId: "user123",
  firstname: "Nikita",
  lastname: "Meru",
  profession: "Software Engineer",
  city: "Pune",
  country: "India",
  phone: "9175900267",
  email: "nikita@gmail.com",
  linkedIn: "https://www.linkedin.com/in/nikitameru",
  GitHub: "https://github.com/nikitameru",
  
  education: [
    {
      EducationID: "edu1",
      sclName: "Solapur University",
      sclLocation: "Solapur, Maharashtra",
      degree: "Bachelor's",
      fieldOfStudy: "Computer Science",
      gradeYear: "June 2017"
    }
    // Add more education entries here
  ],

  experience: [
    {
      title: "Software Engineer",
      company: "Numetry Technology",
      location: "Pune, Maharashtra",
      dateRange: "July 2024 - Present",
      responsibilities: [
        "Developed and maintained web applications using React and Node.js.",
        // "Collaborated with cross-functional teams to design and implement new features.",
      ]
    }
    // Add more job entries here
  ],

  skills: {
    primaryList: [
      "JavaScript",
      "React",
      "Node.js"
    ],
    secondaryList: [
      "HTML",
      "CSS",
      "Sass",
      "REST APIs",
      "GraphQL",
      "Agile Development",
      "Git",
    ]
  },

  certifications: [
    "Certified Scrum Master (CSM)",
    "React Developer Certification",
  ],

  languages: [
    "English (Native)",
    "Spanish (Conversational)",
    "Hindi",
    "Marathi"
  ],

  summary: `Motivated, proactive, and hands-on developer
   with 5+ years' experience developing and managing 
   information systems for software development and cloud-based.`
};

export default templateData;
