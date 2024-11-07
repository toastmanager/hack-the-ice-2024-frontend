import { Icon } from "@iconify/react";
import { Input } from "@/components/ui/input";

const TourService = ({ tourService }: { tourService: TourServiceEntity }) => {
    return (
        <div className="bg-card text-card-foreground w-2/3 rounded-3xl py-6 px-4">
            <span className="text-2xl font-semibold">{tourService.title}</span>
            <div className="flex items-center gap-4 py-2 ">
                <Icon icon={tourService.icon} className={tourService.iconstyle} style={{ fontSize: "24px" }} />
                <h1>{tourService.description}</h1>
            </div>
            
            
        </div>
    );
};

export default TourService;
