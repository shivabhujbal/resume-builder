import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const pageLinks = [
    'Resume Builder',
    'Templates',
    'Examples',
    'Help',
    'About',
    'Contact',
    'Frequently Asked Questions',
    'Privacy Policy',
    'Terms of Service'
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://facebook.com', color: '#1877F2' },
    { icon: <FaTwitter />, url: 'https://twitter.com', color: '#1DA1F2' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com', color: '#0A66C2' },
    { icon: <FaInstagram />, url: 'https://instagram.com', color: '#E4405F' }
  ];

  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate('/login')
  }
  return (
    <footer className="bg-zinc-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 ml-16 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start"
          >
            <img
              src="../reshot-icon-resume-RK2HTZ6GUA.svg"
              alt="Resume Builder Logo"
              width={150}
              height={50}
              className="mb-4"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              onClick={handleLoginClick}
            >
              Create Resume
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-1 lg:col-span-2"
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              {pageLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="text-sm hover:text-blue-400 transition duration-300 ease-in-out"
                >
                  <a href="#">{link}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="text-2xl transition duration-300 ease-in-out"
                >
                  <motion.div
                    whileHover={{ color: social.color }}
                    transition={{ duration: 0.2 }}
                  >
                    {social.icon}
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-gray-700 text-center text-sm"
        >
          © {new Date().getFullYear()} Resume Builder. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
