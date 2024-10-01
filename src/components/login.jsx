// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './login.css';
// // import Zety from '../../images/cv-format/zety-logo.svg';
// // import Zety from '../../../images/cv-format/zety-logo.svg';
// import { FaGithub, FaGoogle, FaFacebookF } from 'react-icons/fa';
// import { NavLink } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   const navigate = useNavigate();

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validatePassword = (password) => {
//     const passwordRegex = /^[A-Za-z\d@$!%*?&]{6,16}$/;
//     return passwordRegex.test(password);
//   };

//   const handleSubmit = (e) => {
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

//     if (valid) {
//       navigate('/home');
//     }
//   };

//   const handleNextClick = () => {
//     navigate('/templateSelector'); // Navigate back to the home page
//   };

//   return (
//     <div className="login-main">
//       <div className="login-content">
//         <div className="login-top">
//           <div className="login-logo">
//             <div className="login-logo-img">
//               <img src="" alt="" />
//             </div>
//             <p>Sign-in to Your Account</p>
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

//               <button onClick={handleNextClick} className="login-btn" type="submit">
//                 SIGN IN
//               </button>
//               <p className="login-term">
//                 By clicking on Sign In you also agree to our{' '}
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
//               {/* <button className="login-fb">
//                 <FaFacebookF size={20} />
//                 Facebook
//               </button> */}
//               <button className="login-g">
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
//               Don't have an account?{' '}
//               <NavLink to="/signup" className="blue">
//                 Sign Up
//               </NavLink>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react'
// import { motion } from 'framer-motion'

// const resumeTemplates = [
//   { id: 1, color: 'bg-blue-200' },
//   { id: 2, color: 'bg-green-200' },
//   { id: 3, color: 'bg-yellow-200' },
//   { id: 4, color: 'bg-red-200' },
//   { id: 5, color: 'bg-purple-200' },
// ]

// export default function SignInPage() {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [error, setError] = useState('')

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (!email || !password) {
//       setError('Please fill in all fields')
//       return
//     }
//     // Here you would typically handle the sign-in logic
//     console.log('Sign in with', email, password)
//     setError('')
//   }

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Animated Resume Templates */}
//       <div className="hidden lg:flex lg:w-1/2 bg-indigo-600 items-center justify-center relative overflow-hidden">
//         {resumeTemplates.map((template, index) => (
//           <motion.div
//             key={template.id}
//             className={`absolute w-64 h-80 ${template.color} rounded-lg shadow-lg`}
//             initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
//             animate={{
//               opacity: 1,
//               scale: 1,
//               rotate: index % 2 === 0 ? 5 : -5,
//               x: Math.sin(index) * 20,
//               y: Math.cos(index) * 20,
//             }}
//             transition={{
//               duration: 0.8,
//               delay: index * 0.2,
//               repeat: Infinity,
//               repeatType: 'reverse',
//               repeatDelay: 5,
//             }}
//           >
//             <div className="h-full p-6 flex flex-col justify-between">
//               <div className="space-y-2">
//                 <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
//                 <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
//                 <div className="w-1/3 h-4 bg-gray-300 rounded"></div>
//               </div>
//               <div className="space-y-2">
//                 <div className="w-full h-4 bg-gray-300 rounded"></div>
//                 <div className="w-full h-4 bg-gray-300 rounded"></div>
//                 <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//         <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"></div>
//         <h2 className="absolute text-4xl font-bold text-white">
//           Create Your Dream Resume
//         </h2>
//       </div>

//       {/* Sign In Form */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg"
//         >
//           <div className="text-center">
//             <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
//               Sign in to ResumeBuilder
//             </h2>
//             <p className="mt-2 text-sm text-gray-600">
//               Or{' '}
//               <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
//                 start your 14-day free trial
//               </a>
//             </p>
//           </div>
//           <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//             <input type="hidden" name="remember" defaultValue="true" />
//             <div className="rounded-md shadow-sm -space-y-px">
//               <div>
//                 <label htmlFor="email-address" className="sr-only">
//                   Email address
//                 </label>
//                 <input
//                   id="email-address"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                   placeholder="Email address"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="password" className="sr-only">
//                   Password
//                 </label>
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="current-password"
//                   required
//                   className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   id="remember-me"
//                   name="remember-me"
//                   type="checkbox"
//                   className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//                 />
//                 <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
//                   Remember me
//                 </label>
//               </div>

//               <div className="text-sm">
//                 <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
//                   Forgot your password?
//                 </a>
//               </div>
//             </div>

//             {error && (
//               <p className="text-red-500 text-sm text-center">{error}</p>
//             )}

//             <div>
//               <button
//                 type="submit"
//                 className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//               >
//                 Sign in
//               </button>
//             </div>
//           </form>
//         </motion.div>
//       </div>
//     </div>
//   )
// }

// import React, { useState } from 'react'
// import { motion } from 'framer-motion'
// import { FaGoogle, FaLinkedin, FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa'

// const ResumeTemplate = ({ className }) => (
//   <motion.div
//     className={`w-48 h-64 bg-white rounded-lg shadow-lg ${className}`}
//     initial={{ opacity: 0, scale: 0.5 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{ duration: 0.5 }}
//   >
//     <div className="h-full p-4 flex flex-col justify-between">
//       <div className="space-y-2">
//         <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
//         <div className="w-1/2 h-3 bg-gray-200 rounded"></div>
//       </div>
//       <div className="space-y-1">
//         <div className="w-full h-2 bg-gray-200 rounded"></div>
//         <div className="w-full h-2 bg-gray-200 rounded"></div>
//         <div className="w-3/4 h-2 bg-gray-200 rounded"></div>
//       </div>
//     </div>
//   </motion.div>
// )

// export default function Login() {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [showPassword, setShowPassword] = useState(false)
//   const [error, setError] = useState('')

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (!email || !password) {
//       setError('Please fill in all fields')
//       return
//     }
//     // Here you would typically handle the sign-in logic
//     console.log('Sign in with', email, password)
//     setError('')
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
//       <div className="absolute inset-0 bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
      
//       {/* Left Resume Template */}
//       <ResumeTemplate className="absolute left-10 top-1/4 transform -rotate-6" />
      
//       {/* Right Resume Template */}
//       <ResumeTemplate className="absolute right-10 bottom-1/4 transform rotate-6" />
      
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="bg-white p-8 rounded-xl shadow-2xl w-96 z-10"
//       >
//         <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Sign In</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               id="email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
//                          focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
//               placeholder="you@example.com"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <div className="mt-1 relative">
//               <input
//                 id="password"
//                 type={showPassword ? "text" : "password"}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
//                            focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
//                 placeholder="••••••••"
//                 required
//               />
//               <button
//                 type="button"
//                 className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
//               </button>
//             </div>
//           </div>
//           {error && <p className="text-red-500 text-sm">{error}</p>}
//           <button
//             type="submit"
//             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             Sign In
//           </button>
//         </form>
//         <div className="mt-6">
//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 bg-white text-gray-500">Or continue with</span>
//             </div>
//           </div>
//           <div className="mt-6 grid grid-cols-3 gap-3">
//             <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
//               <FaGoogle className="text-red-500" />
//             </button>
//             <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
//               <FaLinkedin className="text-blue-500" />
//             </button>
//             <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
//               <FaGithub className="text-gray-800" />
//             </button>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   )
// }

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGoogle, FaLinkedin, FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa'

const ResumeTemplate = ({ imageSrc, alt, className }) => (
  <motion.div
    className={`w-48 h-64 bg-white rounded-lg shadow-lg overflow-hidden ${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ 
      opacity: 4, 
      y: [0, -20, 0],
      transition: { 
        y: {
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }
      }
    }}
    whileHover={{ scale: 1.05 }}
  >
    <img src={imageSrc} alt={alt} className="w-full h-full object-cover" />
  </motion.div>
)

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }
    // Here you would typically handle the sign-in logic
    console.log('Sign in with', email, password)
    setError('')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="absolute inset-0 bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
      
      {/* Resume Templates */}
      <ResumeTemplate 
        imageSrc="https://static.vecteezy.com/system/resources/previews/007/942/308/original/modern-resume-or-cv-template-free-vector.jpg" 
        alt="Modern Resume Template"
        className="absolute left-16 top-1/4 transform -rotate-6 hidden md:block"
      />
      <ResumeTemplate 
        imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu_STMgjvNu4wgC6K24vDfS6IsEz3B7EWQUw&s" 
        alt="Creative Resume Template"
        className="absolute right-14 top-1/4 transform rotate-6 hidden md:block"
      />
      <ResumeTemplate 
        imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgO61YJr-88wS6KmziUGm5ziBOuPZ2K4iA2Q&s" 
        alt="Professional Resume Template"
        className="absolute left-72 bottom-24 transform -rotate-6 hidden md:block"
      />
      <ResumeTemplate 
        imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgO61YJr-88wS6KmziUGm5ziBOuPZ2K4iA2Q&s" 
        alt="Professional Resume Template"
        className="absolute left-72 top-16 transform -rotate-6 hidden md:block"
      />
      <ResumeTemplate 
        imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFyUJr-bSL9-4V5iwQGaRLiqsYyXXvWA44RQ&s" 
        alt="Minimalist Resume Template"
        className="absolute right-72 bottom-24 transform rotate-6 hidden md:block"
      />
      <ResumeTemplate 
        imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFyUJr-bSL9-4V5iwQGaRLiqsYyXXvWA44RQ&s" 
        alt="Minimalist Resume Template"
        className="absolute right-72 top-16 transform rotate-6 hidden md:block"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md z-10"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Sign In to ResumeBuilder</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                         focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1 relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                           focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
              </button>
            </div>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign In
          </button>
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
          <div className="mt-6 grid grid-cols-3 gap-3">
            <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <FaGoogle className="text-red-500" />
            </button>
            <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <FaLinkedin className="text-blue-500" />
            </button>
            <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <FaGithub className="text-gray-800" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}