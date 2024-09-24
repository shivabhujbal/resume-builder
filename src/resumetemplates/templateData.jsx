// src/resumeData.js

const templateData = {
    profileImage: "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_1280.png",
    userId: "user123",
    firstname: "Praveen",
    lastname: "vancharla",
    profession: "Software Engineer",
    city: "HYD",
    country: "India",
    phone: "123-456-789",
    email: "Praveen@gmail.com",
    linkedIn: "https://www.linkedin.com",
    GitHub: "https://github.com",
    
    education: [
      {
        EducationID: "edu1",
        sclName: "Avanthi pg and research acadamy",
        sclLocation: "JNTUH",
        degree: "Master's",
        fieldOfStudy: "MBA",
        gradeYear: "June 2020"
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
          "Collaborated with cross-functional teams to design and implement new features."
        ]
      }
      // Add more job entries here
    ],
  
    skills: 
        ['JavaScript', 'React.js', 'Node.js',
        'Python', 'Django', 'Docker']
    
    ,
  
    certifications: [
      "Certified web developer",
      "React Developer Certification"
    ],
  
    languages: [
      "English (Native)",
      "Telugu",
      "Hindi",
      "Marathi"
    ],
  
    summary: `Motivated, proactive, and hands-on developer
     with 5+ years' experience developing and managing 
     information systems for software development and cloud-based.`,
  
    projects: [
      {
        title: "Project Management System",
        description: "Developed a web-based project management system using React, Node.js, and MongoDB.",
        technologies: ["React", "Node.js", "MongoDB"],
        link: "https://github.com/username/project-management-system"
      },
      {
        title: "E-commerce Platform",
        description: "Built a full-featured e-commerce platform with product management, shopping cart, and payment integration.",
        technologies: ["React", "Redux", "Firebase"],
        link: "https://github.com/username/e-commerce-platform"
      }
      // Add more projects here
    ],
     declaration: 'I hereby declare that the information provided is true to the best of my knowledge and belief.'
  };
  
  export default templateData;
