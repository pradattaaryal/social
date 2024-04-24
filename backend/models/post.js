import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: String,
    title: String,
    image: String,
    userPicturePath: String,
    likes: {
      type:Array,
      default:[],
       
    },
    comments: {
      type: Array,
      default: [],
    },
  
  },
  { timestamps: true,
    }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
