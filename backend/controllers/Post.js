 import User from '../models/user.js';
 import Post from '../models/post.js';
 import cloudinary from 'cloudinary';

 export const createPost = async (req, res)=>{
    try {

        const{ _id,description,title}=req.body;
        console.log( description,title)
        const user = await User.findById(_id);
        const result = await cloudinary.uploader.upload(req.file.path);
        const imageURL = result.secure_url;
 
           const newpost=new Post({
            userId:_id,
            title,
            name:user.name,
            description,
            image:imageURL,
            userPicturePath:user.image
             
        });
        await newpost.save();
        const post = await Post.find();
        res.status(201).json(post);        
    } catch (error) {
        res.json({message: error.message})
    }
 };
 export const getFeedPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: 1 });
    res.status(200).json(posts);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
  export const getUserPosts = async (req, res) => {
    try {
      const { userId } = req.params;
      const post = await Post.find({ userId });
      res.status(200).json(post);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };
  export const likePost = async (req, res) => {
    try {
      const { userid, postid } = req.params;
      const post = await Post.findById(postid);
  
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
  
      const isLiked = post.likes.includes(userid);
  
      if (isLiked) {
        post.likes.pull(userid);
      } else {
        post.likes.push(userid);
      }
  
      await post.save(); 
  
      res.status(200).json({ likesCount: post.likes.length });  
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  export const deletPost = async (req, res) => {
    try {
      const {userId} = req.params
       
      await Post.deleteMany({ userId: userId });
      res.status(200).json({ message: 'All posts deleted successfully' });
    } catch (error) {
      console.error('Error deleting posts:', error);
      res.status(500).json({ error: 'An error occurred while deleting posts' });
    }
  };
  
  export const savepost = async (req, res) => {
    try {
        const { userID, postid } = req.params;
        const user = await User.findById(userID);
        const post = await Post.findById(postid);
        if (user.saved.includes(postid)) {
            user.saved.pull(postid);
        } else {
            user.saved.push(postid);
        }
        await user.save();  
        res.status(200).json({ message: 'Post saved successfully' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getpost =async(req,res)=>{
  try {
    const {userID}=req.params;
    const data=await Post.find({userId:userID});
    res.status(200).json(data);
  } catch (error) {
    
  }
}
 
/*export const getsavexdpost = async (req, res) => {
  try {
    const { userid } = req.params;
    console.log(userid)
    const data = await User.findById(userid);
    
    if (!data) {
      return res.status(404).json({ message: 'User not found or no saved posts available.' });
    }
    data.map((item,index)=>{
      const post=Post.findById(item.saved[index]);
      console.log(post)
    })

    res.status(200).json(data.saved);
  } catch (error) {
    console.error('Error fetching saved posts:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};*/
export const getsavedpost = async (req, res) => {
  try {
    const { userid } = req.params;
    const user = await User.findById(userid);
    if (!user) {
      return res.status(404).json({ message: 'User not found or no saved posts available.' });
    }
    const xxx = user.saved.map(postId => Post.findById(postId));

    const settledPromises = await Promise.allSettled(xxx);
    
    const posts = settledPromises
      .filter(result => result.status === 'fulfilled')
      .map(result => result.value);  
    
    const errors = settledPromises
      .filter(result => result.status === 'rejected')
      .map(result => result.reason);  
    
    console.log(posts);
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching saved posts:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
