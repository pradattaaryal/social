 import cloudinary from 'cloudinary';
import User from '../models/user.js';
import jwt from "jsonwebtoken";
 
export const Register = async (req, res) => {
  const { name, email, password } = req.body;

   if (!name || !email || !password || !req.file) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(200).send({ 'msg': 'User already exists' });
    }

    const result = await cloudinary.uploader.upload(req.file.path);
    const imageURL = result.secure_url;

     const newUser = new User({
      name,
      email,
      password,
      image: imageURL
    });
    await newUser.save();

    return res.status(200).send({ message: 'User registered successfully', state: true });
  } catch (error) {
    console.error("Error in signin:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User does not exist." });

    const isMatch = await compareValues(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });

    const token = jwt.sign({ id: user._id }, "xxx");
    delete user.password;
    res.status(200).json({ token, user, message: "Logged In Successfully!" });
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ error: "Internal Server Error" }); // Use 500 for internal server errors
  }
};

