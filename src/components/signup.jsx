// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './login.css';
// // import Zety from '../../../images/cv-format/zety-logo.svg';
// import { FaGithub, FaGoogle, FaFacebookF } from 'react-icons/fa';
// import { NavLink } from 'react-router-dom';
// import { registerUser, googleLogin, facebookLogin } from '../services/LoginServices'; // Import services


// const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [confirmPasswordError, setConfirmPasswordError] = useState('');

//   const navigate = useNavigate();

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validatePassword = (password) => {
//     const passwordRegex = /^[A-Za-z\d@$!%*?&]{6,16}$/;
//     return passwordRegex.test(password);
//   };

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     let valid = true;

//     if (!validateEmail(email)) {
//       setEmailError('Please enter a valid email address.');
//       valid = false;
//     } else {
//       setEmailError('');
//     }

//     if (!validatePassword(password)) {
//       setPasswordError('Password must be between 6 to 16 characters.');
//       valid = false;
//     } else {
//       setPasswordError('');
//     }

//     if (password !== confirmPassword) {
//       setConfirmPasswordError('Passwords do not match.');
//       valid = false;
//     } else {
//       setConfirmPasswordError('');
//     }

//     if (valid) {
//       const singUpData = {
//         email:email,
//         password:password,
//         confirmpassword:confirmPassword
//       }
//       console.log(singUpData);
      
//       try {
//         const res = await registerUser(singUpData);
//         console.log(res);
        
//          // Call register service
//         navigate('/home');
//       } catch (error) {
//         console.error('Registration Failed:', error);
//       }
//     }
//   };

//   return (
//     <div className="login-main">
//       <div className="login-content">
//         <div className="login-top">
//           <div className="login-logo">
//             <div className="login-logo-img">
//               <img src="" alt="" />
//             </div>
//             <p>Sign-up to Your Account</p>
//           </div>

//           <div className="login-form">
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 placeholder="Email address"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               {emailError && <p className="error-message">{emailError}</p>}

//               <input
//                 type="password"
//                 placeholder="Password (Must be between 6 to 16 characters)"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               {passwordError && <p className="error-message">{passwordError}</p>}

//               <input
//                 type="password"
//                 placeholder="Confirm your Password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />
//               {confirmPasswordError && (
//                 <p className="error-message">{confirmPasswordError}</p>
//               )}

//               <button className="login-btn" type="submit">
//                 SIGN UP
//               </button>
//               <p className="login-term">
//                 By clicking on Sign up you also agree to our{' '}
//                 <a href="" className="blue">
//                   Terms of Use
//                 </a>{' '}
//                 and <br />
//                 <a href="" className="blue">
//                   Privacy Policy
//                 </a>
//               </p>
//             </form>
//           </div>

//           <div className="login-through">
//             <div className="through">
//               <p className="through-p">Sign in with</p>
//               {/* <button className="login-apple">
//                 <FaGithub size={20} />
//                 Sign in with Github
//               </button> */}
//             </div>
//             <div className="through">
//               {/* <button className="login-fb" onClick={facebookLogin}>
//                 <FaFacebookF size={20} />
//                 Facebook
//               </button> */}
//               <button className="login-g" onClick={googleLogin}>
//                 <FaGoogle size={20} />
//                 Google
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="login-bottom">
//           <div className="gray-login">
//             <a className="blue">Forgot your password?</a>
//             <p>
//               Already have an account?{' '}
//               <NavLink to="/login" className="blue">
//                 Log in
//               </NavLink>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGoogle } from 'react-icons/fa'
import { useNavigate, Link } from 'react-router-dom' // Use useNavigate instead of useHistory
import { registerUser, googleLogin } from '../services/LoginServices'

const resumeImages = [
  "../../public/image/resume1.png",
    "../../public/image/resume2.png",
    "../../public/image/resume3.png",
    "../../public/image/resume4.png",
    "../../public/image/resume5.png",
    "../../public/image/resume6.png",
    "../../public/image/resume7.png",
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
      setIsLoading(true)
      try {
        await registerUser({ email, password, confirmPassword })
        alert('Registration Successful! Redirecting to home...')
        navigate('/home') // Use navigate for routing
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
      alert('Google Login Successful! Redirecting to home...')
      navigate('/home') // Use navigate for routing
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
