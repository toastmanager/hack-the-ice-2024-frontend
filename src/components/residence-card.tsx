import { Icon } from "@iconify/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "@/components/ui/button";
const ResidenceCard = ({ residence }: { residence: ResidenceCardEntity }) => {
  return (
    <div className=" relative my-4 border rounded-md p-3 px-6 bg-white flex items-center grid grid-cols-3 w-2/3">
        <div className="flex items-center">
      <Icon icon="hugeicons:smile" className="text-primary w-16 h-16 rounded-full" />
        <div className="w-full pl-2 pt-1 flex flex-col ">
        <div className="space-y-1">
          <h1 className="text-xs font-bold">Комфорт</h1>
          <h1 className="text-xs text-gray-400">{residence.comfortDescription}</h1>
        </div>
        <div className="">

        </div>

        
        </div>
        
      </div>
      <div className="flex items-center">
      <Icon icon="mdi:building" className="text-primary w-16 h-16 rounded-full" />
        <div className="w-full pl-2 pt-1 flex flex-col ">
        <div className="space-y-1">
          <h1 className="text-xs font-bold">Гостиница</h1>
          <h1 className="text-xs text-gray-400">{residence.motelDuration}</h1>
        </div>
        <div className="">

        </div>

        
        </div>
        
      </div>
      <div className="flex items-center">
      <Icon icon="carbon:building" className="text-primary w-16 h-16 rounded-full" />
        <div className="w-full pl-2 pt-1 flex flex-col ">
        <div className="space-y-1">
          <h1 className="text-xs font-bold">Отель</h1>
          <h1 className="text-xs text-gray-400">{residence.hotelDuration}</h1>
        </div>
        <div className="">

        </div>

        
        </div>
        
      </div>
      
    </div>
  );
};

export default ResidenceCard;
