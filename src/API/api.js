import axios from "axios";
//import React, { useState, useEffect } from "react";



export const instance = axios.create({
  baseURL: 'http://35.242.202.126/api',
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${token}`
  }
})
