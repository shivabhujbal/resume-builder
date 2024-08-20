import React, { useState, useEffect } from 'react';
import { getAllDetails } from '../services/UserData';

const UserDetails = () => {                     // use id as a props {id}
  const [userData, setUserData] = useState(null);

  useEffect(() => {
   
    const fetchUserData = async () => {
        const response =await getAllDetails(1);
        setUserData(response);  
    }

    fetchUserData()

  });

  console.log(userData);
  

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">

        <h1>User Data is Fetched</h1>
 
  </div>
  );
};

export default UserDetails;
