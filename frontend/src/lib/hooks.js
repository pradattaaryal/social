import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Define your store
const useStore = create(
  persist(
    (set) => ({
      userData: [],
      token: [],
      posts: [],
      savedpost:[],
      profiledata: [],
      setUserDataAndToken: (userData, token) => set({ userData, token }),
      setpost: (fetcheddata) => set({ posts: fetcheddata }),
      setsavedpost: (fetcheddata) => set({ savedpost: fetcheddata }),
      setfriends: (friendId) =>
        set((state) => ({
          userData: {
            ...state.userData,
            friends: friendId,
          },
        })),
      setprofiledata: (data) => set({ profiledata: data }),
    }),
    {
      name: 'your-store-name', // Choose a unique name for your store
      // Use localStorage for persistence
      storage: localStorage,
    }
  )
);

export default useStore;
