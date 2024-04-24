import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
 import connectDB from './database/connnection.js'
import {v2 as cloudinary} from 'cloudinary';
import router from './routes/auth.js'

dotenv.config();
const app = express();

const port = 3000;
const corsOptions = {
  origin: 'http://localhost:5173',
};
cloudinary.config({ 
    cloud_name:'dnlxxfy5u', 
    api_key: '696895291819317', 
    api_secret: 'awXg5wMq9xo_XxwUM0JXMD9fqQ4'
});
app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', router);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`listening at port ${port}`)
  })
})
