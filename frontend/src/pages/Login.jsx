import React, { useState,useEffect  } from "react";
import axios from 'axios';
import useStore from "@/lib/hooks";
 
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserDataAndToken ,userData} = useStore();
 
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
console.log(data)
     await setUserDataAndToken(data.user, data.token, () => {
        console.log(userData); // Log inside the callback function
      });
   // window.location.replace('/home')

     } catch (error) {
      console.error(error);
    }
  }
   useEffect(() => {
    console.log(userData);
  }, [userData]);

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
            </div>
            <div>
              <button
                type="button"
                onClick={LoginBtn}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </div>
           </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
