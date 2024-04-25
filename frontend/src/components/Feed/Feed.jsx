 import { Button } from "@/components/ui/button"
import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import Useravatar from "../ui/Useravatar" 
import useStore from "@/lib/hooks";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Feed({name,image,title,userPicturePath,description, postuserid,postid}) {
  const {userData } = useStore();  
  const [saved,setsaved]=useState(false);
  const[data,setdata]=useState()
  const save = async () => {
    try {
       const response = await axios.post(`https://social-o53m.onrender.com/api/post/${userData._id}/${postid}`);
      const rdata = response.status; 
      console.log(rdata)
      setsaved(!saved);  

      
     } catch (error) {
      console.error('Error:', error);
    }
  };
  const like = async () => {
    try {
      const response = await axios.post(`http://localhost:3000/api/post/like/${userData._id}/${postid}`);
      const likedata = response.data;
      setdata(likedata.likesCount)
     } catch (error) {
      console.error("Error liking the post:", error);
    }
  };
  
  useEffect(() => {
    like();
  }, []);
   
  
  return (
    <Card className="w-full mb-5 ">
      <CardContent className="p-0 ">
       
          <div className="grid gap-4">
            <Card className="rounded-2xl shadow-none   border-black border-2 ">
              <CardHeader className="p-4 flex flex-row items-center">
                <Useravatar aname={name} auserPicturePath={userPicturePath}  id={userData._id} friendId={postuserid}></Useravatar>
                 
              </CardHeader>
              <CardContent  className="m-2 rounded-xl    ">
                <img
                  alt="Image"
                  className=" aspect-square rounded-lg border-2 border-black object-cover h-full w-full"
                  
                  src={image}
                  

                   
                />
              </CardContent>
              <CardFooter className="p-2 pb-4 grid gap-2">
                <div className="flex items-center w-full">
                  <Button onClick={like} size="icon" variant="ghost">
                    <HeartIcon className="w-4 h-4" />
                    <div>{data}</div>
                    <span className="sr-only">Like</span>
                  </Button>
                  <Button size="icon" variant="ghost">
                    <MessageCircleIcon className="w-4 h-4" />
                    <span className="sr-only">Comment</span>
                  </Button>
                  <Button size="icon" variant="ghost">
                    <SendIcon className="w-4 h-4" />
                    <span className="sr-only">Share</span>
                  </Button>
                  <Button onClick={() => {save();}}className={`ml-auto   ${saved ? `bg-red-600`:null}`} size="icon" variant="ghost">
                    <BookmarkIcon className={`w-4  h-4`} />
                    <span className="sr-only">save</span>
                  </Button>
                </div>
                <div className="px-2 text-sm w-full grid gap-1.5">
                  <div>
                    <div className="font-medium"  >
                      {title}
                    </div>
                  </div>
                  <div>
                    <div className="font-medium"  >
                    {description}
                    </div>
                    
                  </div>
                </div>
              </CardFooter>
            </Card>
            
         
          </div>
       </CardContent>
    </Card >
  )
}

function BookmarkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  )
}


function FileWarningIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}


function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
  )
}


function MoreHorizontalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  )
}


function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}


function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
