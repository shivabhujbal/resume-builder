import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

const resumeTemplates = [
  "../../public/image/resume1.png",
  "../../public/image/resume2.png",
  "../../public/image/resume3.png",
  "../../public/image/resume4.png",
  "../../public/image/resume5.png",
]

function Body() {
  const [scrollElement, setScrollElement] = useState(null)
  const controls = useAnimation()

  useEffect(() => {
    if (!scrollElement) return
    const scrollWidth = scrollElement.scrollWidth || 0
    const animationWidth = scrollWidth / 2

    const scrollAnimation = async () => {
      await controls.start({
        x: -animationWidth,
        transition: {
          x: {
            duration: 20,
            ease: 'linear',
          },
        },
      })
      controls.set({ x: 0 })
      scrollAnimation()
    }

    scrollAnimation()

    return () => {
      controls.stop()
    }
  }, [scrollElement, controls])

  return (
    <div className="w-full  py-12">
      <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Choose from a Wide Range of Professional Templates
        </h2>
        <p className="text-xl text-center text-gray-600 mb-8">
          Our diverse collection of resume templates caters to every industry and career stage.
        </p>
        <div className="overflow-hidden mb-8" ref={setScrollElement}>
          <motion.div
            className="flex"
            style={{ width: `${resumeTemplates.length * 240 * 2}px` }}
            animate={controls}
          >
            {[...resumeTemplates, ...resumeTemplates].map((template, index) => (
              <div key={index} className="w-60 h-80 flex-shrink-0 mx-2">
                <img
                  src={template}
                  alt={`Resume template ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            ))}
          </motion.div>
        </div>
        
      </div>
    </div>
  )
}

export default Body;