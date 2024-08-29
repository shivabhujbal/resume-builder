// src/resumeData.js

const templateData = {
  profileImage: "https://example.com/profile-picture.jpg",
  userId: "1",
  firstname: "John",
  lastname: "Doe",
  profession: "Full Stack Developer",
  city: "New York",
  country: "USA",
  phone: "9999999999",
  email: "john.doe@example.com",
  linkedIn: "https://www.linkedin.com/in/johndoesdasdasdasdasda",
  GitHub: "https://github.com/johndoe",
  
  education: [
    {
      EducationID: "edu1",
      sclName: "Harvard University",
      sclLocation: "Cambridge, MA",
      degree: "Bachelor's",
      fieldOfStudy: "Computer Science",
      gradeYear: "May 2020"
    },
    {
      EducationID: "edu2",
      sclName: "Stanford University",
      sclLocation: "Stanford, CA",
      degree: "Master's",
      fieldOfStudy: "Software Engineering",
      gradeYear: "May 2022"
    },
    {
      EducationID: "edu2",
      sclName: "Stanford University",
      sclLocation: "Stanford, CA",
      degree: "Master's",
      fieldOfStudy: "Software Engineering",
      gradeYear: "May 2022"
    },
    // Add more education entries here
  ],

  experience: [
    {
      title: "Full Stack Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      dateRange: "June 2022 - Present",
      responsibilities: [
        "Developed and maintained scalable web applications using React and Node.js.",
        "Led a team of developers to deliver high-quality software solutions."
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Innovative Solutions Ltd.",
      location: "San Jose, CA",
      dateRange: "June 2021 - August 2021",
      responsibilities: [
        "Assisted in the development of new features and bug fixes for internal tools.",
        "Participated in code reviews and contributed to team discussions.",
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Innovative Solutions Ltd.",
      location: "San Jose, CA",
      dateRange: "June 2021 - August 2021",
      responsibilities: [
        "Assisted in the development of new features and bug fixes for internal tools.",
        "Participated in code reviews and contributed to team discussions.",
      ]
    },
    // Add more job entries here
  ],

  skills: {
    primaryList: [
      "JavaScript",
      "React",
      "Node.js",
      "Express.js"
    ],
    secondaryList: [
      "HTML",
      "CSS",
      "SQL",
      "GraphQL",
      "Docker",
      "AWS",
      "Git"
    ]
  },

  certifications: [
    "AWS Certified Solutions Architect",
    "Certified Kubernetes Administrator",
  ],

  languages: [
    "English (Native)",
    "French (Intermediate)",
    "German (Basic)",
  ],

  summary: `Enthusiastic Full Stack Developer with 3+ years of experience in building modern web applications and backend systems. Adept at collaborating with teams to deliver high-quality solutions and drive continuous improvement.`
};

export default templateData;
