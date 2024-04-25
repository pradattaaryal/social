import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import Profile from '@/components/Profile/Profile';
import Feed from '@/components/Feed/Feed';
import Friends from '@/components/FriendList/FriendList';
import Ads from '@/components/Ads/Ads';
import useStore from '@/lib/hooks';
import { ScrollArea } from "@/components/ui/scroll-area"
import axios from 'axios';

const Home = () => {
  const { userData, setpost, posts } = useStore();

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://social-o53m.onrender.com/api/posts');
      const postdata = response.data;
      const fetchedData = postdata.reverse();
      console.log(fetchedData)
console.log(userData)
      setpost(fetchedData);
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
        {userData && <Profile className="fixed" name={userData.name} image={userData.image} />}
        <ScrollArea className="w-full md:px-14">
         {posts && posts.map((post, index) => (  
            <Feed
              postid={post._id}
              postuserid={post.userId}
              key={index}  
              image={post.image}
              userPicturePath={post.userPicturePath}
              name={post.name}
              title={post.title}
              description={post.description}
            />
          ))}
        </ScrollArea> 
            </div>   
    </>
  );
};

export default Home;
