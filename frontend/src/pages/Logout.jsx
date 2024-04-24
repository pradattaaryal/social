 
import { Button } from "@/components/ui/button"

export default function Logout() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
      <div className="mx-auto flex items-center space-x-3">
        <FlagIcon className="h-8 w-8 rounded-lg bg-gray-100 dark:bg-gray-800" />
      </div>
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter">Logout</h1>
        <p className="text-gray-500 dark:text-gray-400">You are about to be logged out of your account.</p>
      </div>
      <Button className="w-full max-w-sm">Logout</Button>
    </div>
  )
}

function FlagIcon(props) {
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
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}
