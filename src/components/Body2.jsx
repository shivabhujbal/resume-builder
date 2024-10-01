import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    title: "1. Choose the Right Format",
    description: "Select a format that best highlights your skills and experience. Common formats include chronological, functional, and combination resumes.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&h=500&fit=crop"
  },
  {
    title: "2. Include Your Contact Information",
    description: "Add your full name, phone number, email address, and location at the top of your resume.",
    image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=500&h=500&fit=crop"
  },
  {
    title: "3. Write a Compelling Summary",
    description: "Create a brief, impactful statement that summarizes your professional goals and key qualifications.",
    image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=500&h=500&fit=crop"
  },
  {
    title: "4. List Your Work Experience",
    description: "Detail your work history in reverse chronological order. Include job titles, company names, dates of employment, and key responsibilities or achievements.",
    image: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?w=500&h=500&fit=crop"
  },
  {
    title: "5. Highlight Your Education",
    description: "Include your highest level of education, relevant certifications, and any academic achievements.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=500&fit=crop"
  },
  {
    title: "6. Showcase Your Skills",
    description: "List relevant hard and soft skills that match the job requirements you're applying for.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=500&fit=crop"
  },
  {
    title: "7. Add Optional Sections",
    description: "Consider including sections like 'Volunteer Experience', 'Awards', or 'Publications' if they strengthen your application.",
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=500&h=500&fit=crop"
  },
  {
    title: "8. Proofread and Format",
    description: "Review your resume for errors, ensure consistent formatting, and keep it concise (ideally one to two pages).",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&h=500&fit=crop"
  }
];

export default function Body2() {
  // Remove type annotations if you are using plain JavaScript
  const [visibleSteps, setVisibleSteps] = useState([]); // No need for type in JS
  const stepRefs = useRef([]); // Also no type needed here

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = stepRefs.current.findIndex((ref) => ref === entry.target);
            if (stepIndex !== -1 && !visibleSteps.includes(stepIndex)) {
              setVisibleSteps((prev) => [...prev, stepIndex]);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleSteps]);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          How to Write a Perfect Resume
        </h1>
        <div className="space-y-24">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepRefs.current[index] = el)}
              className={`flex flex-col md:flex-row items-center transition-opacity duration-1000 ${
                visibleSteps.includes(index) ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <img
                  src={step.image}
                  alt={`Illustration for ${step.title}`}
                  width={500}
                  height={500}
                  style={{ borderRadius: '8px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {step.title}
                </h2>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
