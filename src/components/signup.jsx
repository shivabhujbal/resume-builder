import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGoogle } from 'react-icons/fa'
import { useNavigate, Link } from 'react-router-dom' // Use useNavigate instead of useHistory
import { registerUser, googleLogin } from '../services/LoginServices'

const resumeImages = [
  "/image/resume1.png",
    "/image/resume2.png",
    "/image/resume3.png",
    "/image/resume4.png",
    "/image/resume5.png",
    "/image/resume6.png",
    "/image/resume7.png",
]

export default function SignupForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState({ email: '', password: '', confirmPassword: '', general: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const navigate = useNavigate() // Use navigate for routing

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % resumeImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const validateForm = () => {
    let isValid = true
    const newErrors = { email: '', password: '', confirmPassword: '', general: '' }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address.'
      isValid = false
    }

    if (!/^[A-Za-z\d@$!%*?&]{6,16}$/.test(password)) {
      newErrors.password = 'Password must be 6-16 characters and may include @$!%*?&'
      isValid = false
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateForm()) {
      const signUpData = {
        email: email,
        password: password,
        confirmpassword: confirmPassword
      }
      setIsLoading(true)
      try {
        await registerUser(signUpData)
        alert('Registration Successful! Redirecting to login...')
        navigate('/login')
      } catch (error) {
        console.error('Registration Failed:', error)
        setErrors((prev) => ({ ...prev, general: 'Registration failed. Please try again.' }))
      } finally {
        setIsLoading(false)
      }
    }
  }

  const handleGoogleLogin = async () => {
    setIsLoading(true)
    try {
      await googleLogin()
    } catch (error) {
      console.error('Google Login Failed:', error)
      setErrors((prev) => ({ ...prev, general: 'Google login failed. Please try again.' }))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-6xl bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="hidden md:block md:w-1/2 relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={resumeImages[currentImageIndex]}
              alt={`Resume Template ${currentImageIndex + 1}`}
              className="absolute inset-0 mx-auto my-auto w-[100%] h-[97%] object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>
        </div>
        <div className="w-full md:w-1/2 p-8">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create Your Account</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  id="password"
                  type="password"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
              </div>
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                  id="confirm-password"
                  type="password"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
              </div>
              {errors.general && <p className="text-sm text-red-600">{errors.general}</p>}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                {isLoading ? 'Signing up...' : 'Sign up'}
              </motion.button>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>
              <div className="mt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleGoogleLogin}
                  disabled={isLoading}
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
                >
                  <FaGoogle className="mr-2" />
                  {isLoading ? 'Signing in...' : 'Sign up with Google'}
                </motion.button>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                Log in
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
