import { Button } from "@/components/ui/button";
const TourButton = ({ tourbutton }: { tourbutton: TourButtonEntity }) => {
  return (
    <div className="bg-card text-card-foreground w-full rounded-3xl p-6">
      <div className="space-y-6">
        <span className="block text-3xl font-semibold mb-2">
          {tourbutton.title}
        </span>
        <p className="">{tourbutton.description}</p>
        <Button
          variant="default"
          className="w-full"
        >
          {tourbutton.btnText}
        </Button>
      </div>
    </div>
  );
};

export default TourButton;
