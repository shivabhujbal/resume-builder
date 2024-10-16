import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { findUserIdByEmail } from '../services/LoginServices';
import { useDispatch,useSelector } from 'react-redux';
import { loginSuccess } from '../redux/actions/authActions';

const LoginSuccess = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn );

    useEffect(()=>{
        const urlParams = new URLSearchParams(window.location.search);
        const email = urlParams.get('email');

        if(email){
            
            setId(email)
              .then(() => {
                const userId = localStorage.getItem('userID');
                dispatch(loginSuccess(userId,email))
                navigate('/');
              })
              .catch((err) => {
                console.error('Error setting user ID:', err);
                navigate('/login');
              });
            
        }else{
            console.log('Something went wrong with google login'); 
            navigate('/login');
        }
    },[navigate])

    const setId = async(email) =>{
        try {
            const id = await findUserIdByEmail(email);
            if (id) {
                localStorage.setItem('userId', id);
                console.log('User ID is saved:', id);
            } else {
                throw new Error('No ID returned for the provided email');
            }
        } catch (error) {
            console.error('Error fetching user ID:', error);
            throw error;
        }
    };
    
  return (
    <div> LoginSuccessful , redirecting to home page </div>
  )
}

export default LoginSuccess