import Post from '../models/post.js';
import User from '../models/user.js';

 export const getUser = async (req, res) => {
  try {
    const {id} = req.params;
    const user = await User.findById(id);
    const data=await Post.find({userId:id});
     res.status(200).json({user,data});
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};


export const getUserFriends = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
     
    res.status(200).json(friends);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

 export const addRemoveFriend = async (req, res) => {
  try {
    const { id, friendId } = req.params;
    console.log( id, friendId)
    const user = await User.findById(id);
    const friend = await User.findById(friendId);

    if (user.friends.includes(friendId)) {
      user.friends = user.friends.pull(friendId);
      friend.friends = friend.friends.pull(id);
    } else {
      user.friends.push(friendId);
      friend.friends.push(id);
    }
    await user.save();
    await friend.save();

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
    

    res.status(200).json(friends);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
