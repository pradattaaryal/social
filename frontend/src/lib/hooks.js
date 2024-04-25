import { create } from 'zustand';
 
// Define your store
const useStore = create((set) => ({
  userData: null,
  token: null,
  posts: null,
  savedpost: null,
  profiledata: null,
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
}));
 
export default useStore;
