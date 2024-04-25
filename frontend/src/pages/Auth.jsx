import React, { useState } from "react";
import axios from 'axios';
import upload from '../assets/upload_area.svg';
 
const Sign = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);  
 
  const Register = async () => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('image', image);

      const lodata = await axios.post(`https://social-o53m.onrender.com/api/Register`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      const data = await lodata.data;
      console.log(data);
  window.location.replace('/login')
    } catch (error) {
      console.error(error);
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  }

  return (
    <div className="flex flex-col p-5 h-screen">
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-md w-full rounded-xl border-black border-2 space-y-8 p-8 md:p-16">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Register</h2>
          </div>
          <form className="mt-8 space-y-6" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  autoComplete="on"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-2 border-2 rounded-lg py-2 w-full md:w-[300px] border-purple-100 transition-all delay-100 ease-in-out focus:border-purple-500 outline-none"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Email address</label>
                <input
                  autoComplete="on"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-2 border-2 rounded-lg py-2 w-full md:w-[300px] border-purple-100 transition-all delay-100 ease-in-out focus:border-purple-500 outline-none"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  autoComplete="on"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-2 border-2 rounded-lg py-2 w-full md:w-[300px] border-purple-100 transition-all delay-100 ease-in-out focus:border-purple-500 outline-none"
                />
              </div>
              <div className="w-full flex justify-center text-gray-700 text-base">
                <label htmlFor="file-input" className="relative inline-block cursor-pointer">
                  <img src={image ? URL.createObjectURL(image) : upload} alt="" className="border-black border-2 object-cover w-24 h-24 md:w-36 md:h-36 rounded-full" />
                  <input
                    type="file"
                    name="image"
                    id="file-input"
                    onChange={handleImageChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </label>
              </div>
            </div>
            <div>
              <button
                type="button"
                onClick={Register}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sign;
