import axios from "axios";
import React, { useState, useEffect } from "react";



export const instance = axios.create({
  baseURL: 'http://35.242.202.126/api/',
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${token}`
  }
})

export const getApi = {
  setToken(token) {
    instance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  },
  login(username, pass) {
    return instance.post(`token/`, {
      "Username": username,
      "Password": pass
    })
  },
  registerEmail(data){
return instance.post(`register/email/`,{
  "Email": data
})
  },
  
  registerAddinfo(data) {
    return instance.put(`register/`, {
      "Username": data.username,
      "Name": data.firstName,
      "Surname": data.lastName,
      "PhoneNumber": data.phoneNumber
    })

  },
  registerPassword(password) {
    return instance.put(`/register/set_password/`, {
      "Password": password
    })
  }
}

const registerEmail = (data) => {
  return instance.post(`register/email/`, {
    "Email": data.email,
  })
}