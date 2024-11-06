import { Icon } from "@iconify/react";
import { Input } from "@/components/ui/input"

const TourCard = () => {
  return (
    <div className="bg-card text-card-foreground w-96 rounded-3xl py-6 px-4">
     <span className="text-2xl font-semibold">Основная информация</span>
     <div>
     <Input type="email" placeholder="Email" />
     </div>
     
    </div>
  );
};

export default TourCard;
