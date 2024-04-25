// Profilepage.jsx

import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import useStore from '@/lib/hooks';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Profile from '@/components/Profile/Profile';
import Feed from '@/components/Feed/Feed';
import {ScrollArea} from '@/components/ui/scroll-area';
import Ads from '@/components/Ads/Ads';
const Profilepage = () => {
  const { userData, setpost, posts } = useStore();
  const { friendId } = useParams(); // Using useParams hook to get friendId from URL params
  const [profiledata,setprofiledata]=useState();
  const [postdata,setpostdata]=useState();

  const fetchPosts = async () => {
    try {
       const response = await axios.get(`https://social-o53m.onrender.com/api/profile/${friendId}`);
      const postData = response.data;
      setprofiledata(postData.user);
      setpostdata(postData.data);
      console.log(postData)
     } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  

  return (
    <>
      <Header />
      <div className='md:h-screen w-full flex flex-col md:flex-row justify-evenly gap-5 px-4 pt-16'>
      {profiledata && <Profile className="fixed" name={profiledata.name} image={profiledata.image} />}
      <ScrollArea className="w-full md:px-14">{postdata && postdata.map((post ) => (  
      <Feed
        postid={post._id}
        postuserid={post.userId}
        key={post._id}  
        image={post.image}
        userPicturePath={post.userPicturePath}
        name={post.name}
        title={post.title}
        description={post.description}
           />))}
      </ScrollArea> 
      <div className='gap-5 hidden md:flex md:flex-col w-full max-w-full md:max-w-[25%]'><Ads /></div>
      </div>
    </>
  );
  
};

export default Profilepage;
 
