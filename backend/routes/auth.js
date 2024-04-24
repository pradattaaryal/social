import express from 'express';
import multer from 'multer';
import { Register,login } from '../controllers/Auth.js';
import{createPost,deletPost,getFeedPosts, getsavedpost, likePost, savepost} from '../controllers/Post.js'
import { addRemoveFriend, getUser, getUserFriends } from '../controllers/user.js';
  const router = express.Router();

 
const storage = multer.diskStorage({
  
  filename: function (req, file, cb) {
    cb(null, file.originalname);  
  }
});

const upload = multer({ storage: storage });

router.post('/Register', upload.single('image'), Register);
router.post('/create', upload.single('image'), createPost);
router.post('/login', login);
router.get('/posts', getFeedPosts);
router.get('/friends/:id',getUserFriends)
router.patch('/:id/:friendId',addRemoveFriend)
router.delete('/posts/:userId',deletPost);
router.post('/post/:userID/:postid', savepost);
router.get('/profile/:id', getUser);
router.post('/post/like/:userid/:postid', likePost);
router.get('/saved/:userid',getsavedpost);






export default router;
