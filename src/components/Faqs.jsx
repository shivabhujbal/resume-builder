import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';

const faqs = [
  {
    question: "How do I get started with the resume builder?",
    answer: "To get started, simply click on the 'Create Resume' button on the homepage. You'll be guided through a step-by-step process to input your information and choose a template."
  },
  {
    question: "Is my data safe and secure?",
    answer: "Yes, we take data security seriously. All your information is encrypted and stored securely. We never share your personal data with third parties."
  },
  {
    question: "Can I use the resume builder for free?",
    answer: "We offer a free basic version with limited features. For access to premium templates and advanced features, you can upgrade to our paid plan."
  },
  {
    question: "How many templates are available?",
    answer: "We currently offer 20+ professionally designed templates suitable for various industries and career levels."
  },
  {
    question: "Can I customize the templates?",
    answer: "Our templates are fully customizable. You can change colors, fonts, layouts, and sections to match your preferences and industry standards."
  },
  {
    question: "Is it possible to download my resume in different formats?",
    answer: "Yes, you can download your resume in PDF, DOCX, and TXT formats. This ensures compatibility with various application systems and employer preferences."
  },
  {
    question: "How often can I update my resume?",
    answer: "You can update your resume as often as you like. We recommend keeping your resume up-to-date with your latest experiences and achievements."
  },
  {
    question: "Do you offer ATS-friendly resume templates?",
    answer: "Yes, all our templates are designed to be ATS (Applicant Tracking System) friendly, increasing your chances of getting past initial screening processes."
  },
  {
    question: "Can I create multiple resumes?",
    answer: "Yes, you can create multiple versions of your resume tailored for different job applications or industries."
  },
  {
    question: "Is there a spell-check feature?",
    answer: "We have an integrated spell-check feature that helps you catch and correct spelling errors, ensuring your resume is polished and professional."
  }
];

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <motion.div 
      className="w-full max-w-5xl mx-auto p-4 space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <FAQItem 
          key={index} 
          question={faq.question} 
          answer={faq.answer} 
          isOpen={activeIndex === index} 
          onClick={() => handleToggle(index)} 
        />
      ))}
    </motion.div>
  );
}

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <motion.div
      className={`border-b border-gray-200 pb-4 overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-gray-50' : 'bg-white'} `}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <button
        className="flex justify-between items-center w-full text-left p-4"
        onClick={onClick}
      >
        <span className="text-lg font-medium">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDownIcon className="w-5 h-5" />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-2 text-gray-600 px-4 pb-4"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
