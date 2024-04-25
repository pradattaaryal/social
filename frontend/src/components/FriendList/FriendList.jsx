import React, { useEffect, useState } from "react";
import axios from "axios";
import Useravatar from "../ui/Useravatar";
import useStore from "@/lib/hooks";

export default function Friends({ userid, list }) {
  const [frienddata, setFriendData] = useState([]);
  const { userData } = useStore();

  const fetchFriends = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/friends/${userid}`);
      const friend = response.data;
      setFriendData(friend);
    } catch (error) {
      console.error("Error fetching friends:", error);
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
        <div className="flex-1 overflow-auto py-6 grid gap-4">
          {frienddata &&
            frienddata.map((item, index) => (
              <React.Fragment key={index}>
                {userData && (
                  <Useravatar
                    auserPicturePath={item.image}
                    flist={list}
                    aname={item.name}
                    friendId={item._id}
                    id={userData._id}
                  />
                )}
              </React.Fragment>
            ))}
        </div>
      </div>
    </div>
  );
}
