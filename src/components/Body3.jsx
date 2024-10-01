import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    logo: "GEEKFLARE",
    quote: "Now, you don't have to get into the hassle of creating a template and getting into resume writing. MyPerfectResume is there to help you out in building a perfect resume. You get to choose from several templates to create a job-ready resume effortlessly.",
    link: "See more >"
  },
  {
    logo: "WHAT TO BECOME",
    quote: "This platform is more than an ordinary resume builder. It is also a cover letter builder, resume checker, and a rich source of examples and tips. You can use its job search engine to find relevant job openings, too.",
    link: "See more >"
  },
  {
    logo: "Resume Writing Services",
    quote: "MyPerfectResume provides a step-by-step guide, ensuring every detail, from skills to certifications, is aptly highlighted.",
    link: "See more >"
  }
]

export default function Body3() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [key, setKey] = useState(0)

  useEffect(() => {
    setKey(prevKey => prevKey + 1)
  }, [currentIndex])

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-16">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-blue-900">{testimonials[currentIndex].logo}</h2>
          </div>
          <div className="mb-6 h-48">
            <TypeAnimation
              key={key}
              sequence={[testimonials[currentIndex].quote]}
              wrapper="p"
              speed={50}
              style={{ fontSize: '1em', display: 'inline-block' }}
              repeat={1}
            />
          </div>
          <a href="#" className="text-blue-600 hover:underline">{testimonials[currentIndex].link}</a>
        </motion.div>
      </AnimatePresence>
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
      >
        <ChevronLeft className="w-6 h-6 text-blue-900" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
      >
        <ChevronRight className="w-6 h-6 text-blue-900" />
      </button>
    </div>
  )
}
