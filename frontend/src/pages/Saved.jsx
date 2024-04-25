 
import { Link } from "react-router-dom"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import Header from "@/components/Header/Header"
import axios from "axios"
 import { useEffect, useState } from "react"
import useStore from "@/lib/hooks"

export default function Saved() {
  const { userData, savedpost, setsavedpost } = useStore();
  const [loading, setLoading] = useState(true); // State to track loading status


      const fetchData = async () => {
          try {
              const response = await axios.get(`https://social-o53m.onrender.com/api/saved/${userData._id}`);
              setsavedpost(response.data);
              console.log(savedpost)
              setLoading(false); // Set loading to false after data is fetched
          } catch (error) {
              console.error('Error fetching saved data:', error);
              setLoading(false); // Set loading to false in case of error
          }
      };
      useEffect(() => {
        fetchData();
  }, [ ]);
  
    return ( 
<>
  <Header></Header>
  <div className="container mx-auto mt-16 px-4 py-8 md:px-6 lg:py-12">
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {savedpost && savedpost.map((data, index) => (
        <div key={data._id} className="relative border-black border-[1px] group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View Post</span>
          </Link>
          <img
            alt="Saved Post 1"
            className="object-cover w-full h-64"
            height={400}
            src= {data.image}
            style={{
              aspectRatio: "400/400",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="bg-white p-4 dark:bg-gray-950">
            <div className="flex items-center justify-between">
              <Link className="flex items-center gap-2 text-sm font-semibold" href="#">
                <Avatar className="w-8 h-8 border">
                  <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                {data.name}
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="w-8 h-8 rounded-full" size="icon" variant="ghost">
                    <MoreHorizontalIcon className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <BookmarkIcon className="w-4 h-4 mr-2" />
                    Unsave
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <StarIcon className="w-4 h-4 mr-2" />
                    Add to favorites
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <FileWarningIcon className="w-4 h-4 mr-2" />
                    Report
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <Button size="icon" variant="ghost">
                  <HeartIcon className="w-4 h-4" />
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
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">12 likes</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</>

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

 
