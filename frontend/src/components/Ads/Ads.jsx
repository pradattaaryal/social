 
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"

export default function Ads() {
  return (
    <Card className="w-full   border-black border-2 ">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Advertisements</CardTitle>
        
      </CardHeader>
      <CardContent className="flex items-center  flex-col">
        <img
          alt="Advertisement"
          className="  border-black border-2 rounded-lg object-cover"
          height="90%"
          src="https://images.unsplash.com/photo-1518734549841-b417d28c22aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width="100%"
        />
      </CardContent> s
    </Card>
  ) 
}

