import express from 'express'
 import cors from 'cors'
 import connectDB from './database/connnection.js'
import {v2 as cloudinary} from 'cloudinary';
import router from './routes/auth.js'

 const app = express();

const port = 3000;
const corsOptions = {
  origin: 'https://social-rho-two.vercel.app',
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
app.get('/', (req, res) => {
  res.send(`Express is running on https://localhost:${port}`);
});

