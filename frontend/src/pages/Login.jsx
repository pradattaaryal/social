// Login.js
import React, { useState } from "react";
import axios from 'axios';
import useStore from "@/lib/hooks";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserDataAndToken, userData } = useStore();
 
  const LoginBtn = async () => {
    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);

      const response = await axios.post(`https://social-o53m.onrender.com/api/login`, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.data;

      // Log the received data from the API
      console.log("Response data:", data);

      // Update userData and token in the store
      await setUserDataAndToken(data.user, data.token);
      
      // Log the userData after update
      console.log("Updated userData:", userData);
 
     } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-[80%] md:max-w-[40%] rounded-xl border-black border-2 space-y-8 p-8 md:p-16">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Login</h2>
          </div>
          <form className="mt-8 space-y-6" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  autoComplete="on"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-2 border-2 rounded-lg py-2 w-full md:w-[300px] border-purple-100 transition-all delay-100 ease-in
