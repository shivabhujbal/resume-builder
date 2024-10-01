import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, FileText, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Home2 from './Home2'
import Body from './Body'
import Body2 from './Body2'
import Faqs from './Faqs'
import Body3 from './Body3'
import Footer from './Footer'

export default function HomePage() {
  const [currentTemplate, setCurrentTemplate] = useState(0)
  const templates = [
    "../../public/image/resume1.png",
    "../../public/image/resume2.png",
    "../../public/image/resume3.png",
    "../../public/image/resume4.png",
    "../../public/image/resume5.png",
    "../../public/image/resume6.png",
    "../../public/image/resume7.png",
  ]

  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleHomeClick = () => {
    navigate('/') // assuming the start building page route is '/builder'
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTemplate((prev) => (prev + 1) % templates.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <div>
      <div className="min-h-screen flex flex-col ml-20">
        <header className="p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <div className='flex space-x-2'>
              <img 
                src="../../public/reshot-icon-resume-RK2HTZ6GUA.svg" 
                alt="" 
                className='w-16 h-16'
              />
              <motion.h1 
                className="text-2xl font-bold mt-3 text-black cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                onClick={handleHomeClick}
              >
                ResumeBuilder
              </motion.h1>
            </div>
            <div className='space-x-4'>
              <motion.button 
                className="px-4 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.button>
              <motion.button 
                className=" px-4 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                CV
              </motion.button>
              <motion.button 
                className=" px-4 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                About
              </motion.button>
              <motion.button 
                className="bg-white ring-1 ring-purple-700 text-purple-700 px-4 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
                onClick={handleLoginClick} // Login button handler
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Login
              </motion.button>
              <motion.button 
                className="bg-purple-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLoginClick} // Start Building button handler
              >
                Get Started
              </motion.button>
            </div>
          </nav>
        </header>

        <main className="flex-grow container mx-auto px-4 py-8 flex items-center">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-6">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-black leading-tight"
                variants={itemVariants}
              >
                Create Your Professional Resume in Minutes
              </motion.h2>
              <motion.p 
                className="text-xl text-zinc-900"
                variants={itemVariants}
              >
                Stand out from the crowd with our easy-to-use resume builder. Craft a compelling resume that lands you your dream job.
              </motion.p>
              <motion.button 
                className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-colors inline-flex items-center space-x-2"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLoginClick} // Start Building button handler
              >
                <span>Start Building</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
            <motion.div 
              className="relative"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.img 
                key={currentTemplate}
                src={templates[currentTemplate]}
                alt={`Resume Template ${currentTemplate + 1}`}
                className="w-[450px] h-[550px] rounded-lg ml-32 shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div 
                className="absolute ml-28 -top-4 -left-4 bg-yellow-400 rounded-full p-3"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              >
                <Star className="w-6 h-6 text-purple-700" />
              </motion.div>
              <motion.div 
                className="absolute mr-28 -bottom-4 -right-4 bg-green-400 rounded-full p-3"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <FileText className="w-6 h-6 text-purple-700" />
              </motion.div>
            </motion.div>
          </motion.div>
        </main>
      </div>
      <Home2/>
      <Body/>
      <Body2/>
      <Body3 />
      <Faqs/>
      <Footer/>
    </div>
  )
}
