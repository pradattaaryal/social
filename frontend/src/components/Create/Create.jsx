import React, { useState } from 'react';
import axios from 'axios';
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import useStore from '@/lib/hooks';
import Header from '../Header/Header';
export default function Create() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const { userData} = useStore();
  const _id =userData._id  ;
  const createPost = async () => {
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('image', image);
      formData.append('_id', _id);

      const responseData = await axios.post(`http://localhost:3000/api/create`, formData,_id, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(responseData.data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className=' '><Header></Header>
    <Card key="1" className=" max-w-[95%] md:max-w-[40%] border-black border-2 mt-24   mx-auto">
      <CardHeader>
        <CardTitle className="text-xl text-center">Create your Page</CardTitle>
        <CardDescription className="text-center">Enter your post information below.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Post Title</Label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} id="title" name="title" className="border-black border-2"  placeholder="Enter your post title" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} id="description" name="description" placeholder="Enter your description" className="border-black border-2" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="file">Image</Label>
          <Input onChange={handleImageChange} id="file" className="border-black border-2"  type="file" />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={createPost} size="lg">Post</Button>
      </CardFooter>
    </Card></div>
  )
}
