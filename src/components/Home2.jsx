import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Home2() {
  const [currentTip, setCurrentTip] = useState(0)
  const tips = [
    { text: "Use a clean, professional layout", highlight: "all" },
    { text: "Tailor your resume to the job", highlight: "summary" },
    { text: "Highlight your achievements", highlight: "experience" },
    { text: "Use action verbs", highlight: "experience" },
    { text: "Keep it concise", highlight: "all" },
    { text: "Proofread carefully", highlight: "all" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prevTip) => (prevTip + 1) % tips.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex flex-col p-4">
      <h1 className="text-4xl font-bold text-center my-8 text-black">
        Create Your Perfect ATS-Friendly Resume
      </h1>
      
      <main className="flex-grow flex flex-col md:flex-row gap-8 mx-32 mb-14">
        <div className="bg-white rounded-lg shadow-xl p-8 flex-1">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Key Tips</h2>
          <ul className="space-y-4">
            {tips.map((tip, index) => (
              <li 
                key={index} 
                className={`flex items-center space-x-2 transition-all duration-300 ease-in-out ${
                  index === currentTip ? 'text-indigo-600 font-semibold scale-105' : 'text-gray-600'
                }`}
              >
                <ArrowRight 
                  className={`h-5 w-5 transition-opacity duration-300 ease-in-out ${
                    index === currentTip ? 'opacity-100' : 'opacity-0'
                  }`} 
                />
                <span>{tip.text}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-xl p-8 flex-1 overflow-y-auto max-h-[calc(100vh-rem)]">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">ATS-Friendly Sample Resume</h2>
          <div className="space-y-4 text-sm">
            <section className={`transition-all duration-300 ${tips[currentTip].highlight === 'all' ? 'bg-yellow-100 p-2 rounded' : ''}`}>
              <h1 className="text-2xl font-bold">John Doe</h1>
              <p>Email: john.doe@email.com | Phone: (123) 456-7890 | Location: New York, NY</p>
              <p>LinkedIn: linkedin.com/in/johndoe | GitHub: github.com/johndoe</p>
            </section>

            <section className={`transition-all duration-300 ${tips[currentTip].highlight === 'summary' || tips[currentTip].highlight === 'all' ? 'bg-yellow-100 p-2 rounded' : ''}`}>
              <h2 className="text-xl font-semibold">Professional Summary</h2>
              <p>Results-driven software developer with 5+ years of experience in creating efficient and scalable web applications. Proficient in JavaScript, React, Node.js, and SQL. Committed to delivering high-quality code and improving user experiences.</p>
            </section>

            <section className={`transition-all duration-300 ${tips[currentTip].highlight === 'experience' || tips[currentTip].highlight === 'all' ? 'bg-yellow-100 p-2 rounded' : ''}`}>
              <h2 className="text-xl font-semibold">Work Experience</h2>
              <div className="mt-2">
                <h3 className="font-semibold">Senior Software Developer - Tech Solutions Inc.</h3>
                <p className="italic">January 2018 - Present</p>
                <ul className="list-disc list-inside mt-1">
                  <li>Developed and maintained large-scale web applications using React and Node.js, resulting in a 40% increase in user engagement</li>
                  <li>Implemented automated testing strategies, reducing bug reports by 30% and improving overall code quality</li>
                  <li>Mentored junior developers, leading to a 25% increase in team productivity and faster onboarding processes</li>
                  <li>Optimized database queries and implemented caching solutions, improving application response times by 50%</li>
                </ul>
              </div>
              <div className="mt-32 mb-24">
                <h3 className="font-semibold">Software Developer - Innovative Apps Co.</h3>
                <p className="italic">June 2015 - December 2017</p>
                <ul className="list-disc list-inside mt-1">
                  <li>Collaborated with cross-functional teams to design and develop mobile applications using React Native</li>
                  <li>Implemented RESTful APIs using Express.js, facilitating seamless communication between front-end and back-end systems</li>
                  <li>Contributed to open-source projects, enhancing the company's reputation in the developer community</li>
                </ul>
              </div>
            </section>

            <section className={`transition-all duration-300 ${tips[currentTip].highlight === 'all' ? 'bg-yellow-100 p-2 rounded' : ''}`}>
              <h2 className="text-xl font-semibold">Skills</h2>
              <p>JavaScript (ES6+), React, Node.js, Express.js, SQL, MongoDB, Git, Agile methodologies, RESTful APIs, Test-Driven Development</p>
            </section>

            <section className={`transition-all duration-300 ${tips[currentTip].highlight === 'all' ? 'bg-yellow-100 p-2 rounded' : ''}`}>
              <h2 className="text-xl font-semibold">Education</h2>
              <p><strong>Bachelor of Science in Computer Science</strong> - Tech University, Graduated May 2015</p>
            </section>
          </div>
        </div>
      </main>
      
      <div className="text-center mb-8">
        <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors duration-300">
          Start Building Your ATS-Friendly Resume
        </button>
      </div>
    </div>
  )
}