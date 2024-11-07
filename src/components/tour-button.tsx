import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
const TourButton = ({ tourbutton }: { tourbutton: TourButtonEntity }) => {
  return (
    <div className="bg-card text-card-foreground w-2/3 rounded-3xl py-6 px-6">
      <div className="space-y-6">
        <span className="block text-3xl font-semibold mb-2">{tourbutton.title}</span>
        <p className="">
          {tourbutton.description}
        </p>
        <Button
          variant="outline"
          className="w-full text-primary bg-primary text-white"
        >
          {tourbutton.btnDescription}
        </Button>   
      </div>
    </div>
  );
};

export default TourButton;
