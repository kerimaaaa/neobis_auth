import axios from 'axios';
import React, {useEffect,useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import {instance} from '../../API/api';

const VerificationPage = () => {
    const [user, setUser] = useState();
    const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(window.location.search);
  const token = queryParams.get('token');
  console.log(token)

  useEffect(() => {
    if (localStorage.getItem('user') !== null) {
        setUser(JSON.parse(localStorage.getItem("user")))
    }
}, [])


 
  useEffect(() => {
    instance.post('/register/email/verify:?token', { token })
      .then(response => response, 
        navigate('/additionalInfo')
      )
      .catch(error => {
        alert("Token is invalid or expired")
        console.log(token)
      });
      localStorage.setItem('user', JSON.stringify(data))
  }, [token, navigate]);

  return (
    <div className=''>
      <p>Идет верификация</p>
    </div>
  );
};

export default VerificationPage;
