import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGoogle, FaFacebook, FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa';
import { googleLogin, facebookLogin , githubLogin, loginUser, findUserIdByEmail  } from '../services/LoginServices';
import { Link } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../redux/actions/authActions';

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
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }
    // Here you would typically handle the sign-in logic
    console.log('Sign in with', email, password)
    setError('');
    handleLogin();
  }




  const handleLogin= async()=>{

    if (!email || !password) {
      setError('Email or Password is missing');
      return;
    }

    setLoading(true);
    const loginData = {
      email:email,
      password:password
    };

    console.log(loginData);
    

    try{
      const response = await loginUser(loginData);

      if (response.email) {
        // Fetch user ID by email
        const userId = await findUserIdByEmail(response.email);

        if (userId) {
          // Store user ID in localStorage
          localStorage.setItem('userId', userId);

          // Dispatch login success with user ID and email
          dispatch(loginSuccess(userId, email));

          // Redirect to home page or another protected route
          navigate('/');
        } else {
          setError('User ID not found.');
        }
      }
      
    }catch(error){
      console.error('Login Failed',error.message);
      setError(error.message || 'An error occurred during login.');

      
    }finally{
      setLoading(false);
    }



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
            disabled={loading}
          >
            {loading ? 'Signing In...': 'Sign In'}
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
            <button onClick={googleLogin} className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <FaGoogle className="text-red-500" />
            </button>
            <button onClick={facebookLogin} className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <FaFacebook className="text-blue-500" />
            </button>
            <button onClick={githubLogin} className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <FaGithub className="text-gray-800" />
            </button>
          </div>
          <p className="mt-4 text-center text-sm text-gray-600">
              Don`t have an account? <a href='/signUp' className="font-medium text-indigo-600 hover:text-indigo-500">Register</a>
            
            </p>
        </div>
      </motion.div>
    </div>
  )
}