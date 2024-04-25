import { create } from 'zustand';
import { useEffect } from 'react';

// Define your store
const useStore = create((set) => {
  const storedUserData = JSON.parse(localStorage.getItem('userData'));
  const storedToken = localStorage.getItem('token');
  const storedPosts = JSON.parse(localStorage.getItem('posts'));
  const storedSavedPost = JSON.parse(localStorage.getItem('savedpost'));
  const storedProfileData = JSON.parse(localStorage.getItem('profiledata'));

  return {
    userData: storedUserData || null,
    token: storedToken || null,
    posts: storedPosts || null,
    savedpost: storedSavedPost || null,
    profiledata: storedProfileData || null,
    setUserDataAndToken: (userData, token) => {
      set({ userData, token });
      localStorage.setItem('userData', JSON.stringify(userData));
      localStorage.setItem('token', token);
    },
    setpost: (fetcheddata) => {
      set({ posts: fetcheddata });
      localStorage.setItem('posts', JSON.stringify(fetcheddata));
    },
    setsavedpost: (fetcheddata) => {
      set({ savedpost: fetcheddata });
      localStorage.setItem('savedpost', JSON.stringify(fetcheddata));
    },
    setfriends: (friendId) =>
      set((state) => ({
        userData: {
          ...state.userData,
          friends: friendId,
        },
      })),
    setprofiledata: (data) => {
      set({ profiledata: data });
      localStorage.setItem('profiledata', JSON.stringify(data));
    },
  };
});

// Save and load data from localStorage
useEffect(() => {
  const storedUserData = JSON.parse(localStorage.getItem('userData'));
  const storedToken = localStorage.getItem('token');
  const storedPosts = JSON.parse(localStorage.getItem('posts'));
  const storedSavedPost = JSON.parse(localStorage.getItem('savedpost'));
  const storedProfileData = JSON.parse(localStorage.getItem('profiledata'));

  useStore.setState({
    userData: storedUserData || null,
    token: storedToken || null,
    posts: storedPosts || null,
    savedpost: storedSavedPost || null,
    profiledata: storedProfileData || null,
  });
}, []);

export default useStore;
