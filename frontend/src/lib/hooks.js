// useStore.js
import { create } from 'zustand';

const useStore = create((set) => ({
  userData: null,
  token: null,
  posts: null,
  savedpost: null,
  profiledata: null,
  setUserDataAndToken: (userData, token) => {
    // Log the received userData and token
    console.log("Received userData:", userData);
    console.log("Received token:", token);
    
    // Update the store state
    set({ userData, token });
  },
  // Other state setters...
}));

export default useStore;
