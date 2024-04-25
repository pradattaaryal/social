import React, { useEffect, useState } from "react"; // Import useEffect
import axios from "axios";
import Useravatar from "../ui/Useravatar";
import useStore from "@/lib/hooks";
export default function Friends({ userid,list }) {
   const [frienddata, setFriendData] = useState([]);
const {userData}=useStore();
  const fetchFriends = async () => {
    try {
      const response = await axios.get(`https://social-o53m.onrender.com/api/friends/${userid}`);
      const friend = response.data;
      setFriendData(friend);
    } catch (error) {
      // Handle error
    }
  };

  useEffect(() => {
    fetchFriends();  
  }, [userData.friends]);

  return (
    <div className="w-full border-2 border-black rounded-lg dark:border-gray-800">
      <div className="max-h-[300px] flex flex-col border-t border-b  dark:border-gray-800">
        <header className="flex border-b-2 items-center p-4 border-black dark:border-gray-800">
          <h2 className="text-lg font-medium text-center flex-1">Follow list</h2>
        </header>
        <div className="flex-1 overflow-auto   py-6 grid gap-4">
           {frienddata && frienddata.map((item, index) => (
            <Useravatar key={index} auserPicturePath={item.image} flist={list} aname={item.name} />
            
          ))}
        </div>
      </div>
    </div>
  );
}
