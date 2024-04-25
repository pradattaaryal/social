// Useravatar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { AvatarImage, Avatar } from '@/components/ui/avatar';
 import axios from 'axios';
import useStore from '@/lib/hooks';
const Useravatar = ({ auserPicturePath, aname, friendId,id  ,flist    }) => {
  const { token,setfriends,friends,userData } = useStore(); 
 const usedf=userData.friends
const isFriend = usedf && usedf.find((friend) => friend._id === friendId);
 const checkFriend = async () => {
  try {
    const response = await axios.patch(`https://social-o53m.onrender.com/api/${id}/${friendId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const datax = response.data;
        setfriends(datax);
    
  console.log(userData.friends)
   } catch (error) {
    console.error("Error occurred while checking friend:", error);
     
  }
};

   
  return (
<div className={`flex w-full ${!flist ? 'justify-between' : 'justify-center'}   items-center gap-2 text-sm font-semibold`} >
<div className={`flex items-center ${flist ? ' justify-evenly' : 'gap-3'} w-full `}>
       <Link  to={`/profile/${friendId}`}> <Avatar className="w-8 h-8 border">
          <AvatarImage alt="@shadcn" className="object-cover" src={auserPicturePath} />
        </Avatar></Link>
        {aname}
      </div>
      <button onClick={checkFriend}>
{   !flist ?      ( isFriend ?( <div className='border-black border-2 rounded-lg py-2 px-8 w-full h-full bg-red-500'>Unfollow</div>) :( <div className='border-black border-2 rounded-lg py-2 px-8 w-full h-full bg-green-500'>Follow</div>)):null
}      </button>
    </div>
  );
};

export default Useravatar;
