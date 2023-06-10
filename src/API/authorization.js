import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authApi } from './api';

export default function AuthUser(){
    const navigate = useNavigate();
    const [token,setToken] = useState(getToken());
    const [user,setUser] = useState(getUser());

    useEffect(() => {
        if (localStorage.getItem('user') !== null) {
            setUser(JSON.parse(localStorage.getItem("user")))
        }
      }, [])

    const getToken = () =>{
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    }

    const getUser = () =>{
        const userString = localStorage.getItem('user');
        const user_detail = JSON.parse(userString);
        return user_detail;
    }

    const saveToken = (user,token) =>{
        localStorage.setItem('token',JSON.stringify(token));
        localStorage.setItem('user',JSON.stringify(user));

        setToken(token);
        setUser(user);
        navigate('/dashboard');
    }

    const logout = () => {
        localStorage.clear();
        navigate('/login');
    }
    return {
        setToken:saveToken,
        token,
        user,
        getToken,
        logout
    }
}