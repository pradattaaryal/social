import { CardContent, Card } from "@/components/ui/card";

export default function Profile({ name, image }) {
  // Provide default values or handle null case
  const defaultName = "Default Name";
  const defaultImage = "/default-image.jpg";

  return (
    <Card className="w-full max-w-full md:max-w-[22%] p-4 h-full max-h-[50%] border-black border-2">
      <CardContent className="flex items-center space-y-3 flex-col text-center">
        <div className="space-y-2">
          <div className="aspect-square overflow-hidden border-black border-2 rounded-full w-24">
            <img
              alt="User avatar"
              className="object-cover"
              height={100}
              src={image || defaultImage} // Use default image if image is null
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width={100}
            />
          </div>
          <h2 className="text-lg font-bold">{name || defaultName}</h2> {/* Use default name if name is null */}
          <p className="text-sm font-medium not-italic text-gray-500 dark:text-gray-400">Frontend Engineer</p>
        </div>
        <div>medium</div>
        <div className="flex flex-col items-center space-y-2">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            <span className="font-semibold">1.2k</span>
            Followers{"\n                  "}
          </p>
          <p className="text-sm font-medium text-gray-500  dark:text-gray-400">
            <span className="font-semibold">976</span>
            Following{"\n                  "}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
