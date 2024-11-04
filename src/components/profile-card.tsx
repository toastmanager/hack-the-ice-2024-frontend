import Link from "next/link";
import { Icon } from "@iconify/react";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "@/components/ui/button";

const ProfileCard = ({ ProfileCard }: { ProfileCard: ProfileCardEntity }) => {
  return (
    <div className="mx-4 md:mx-auto max-w-6xl bg-card text-card-foreground rounded-3xl relative">
      <div className="relative">
        <div className="w-full h-60 bg-cover bg-center rounded-t-3xl" style={{ backgroundImage: `url(${ProfileCard.imageUrl})` }}>
        </div>
        
        <Avatar className="absolute top-56 left-6 border-4 border-white w-24 h-24">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="pl-36 pt-2 pb-5">
          <div className="flex"> 
            <h1 className="flex items-center text-xl">
            {ProfileCard.name}<span className="text-green-500 ml-2"><Icon icon="bi:check-circle-fill" className="w-4"/></span>
            </h1>
          </div>
          
          <div className="flex space-x-4 mt-2">
            <div>
              <p className="text-xs text-gray-400">Проведено</p>
              <p className="text-xs font-bold">{ProfileCard.tours} тура</p>
            </div>

            <div>
              <p className="text-xs text-gray-400">Опубликовано</p>
              <p className="text-xs font-bold">{ProfileCard.published} туров</p>
            </div>

            <div>
              <p className="text-xs text-gray-400">Рейтинг</p>
              <p className="text-xs font-bold">{ProfileCard.score}</p>
            </div>

            <div>
              <p className="text-xs text-gray-400">Проведено туристов</p>
              <p className="text-xs font-bold">{ProfileCard.touristcount}</p>
            </div>
          </div>

          <div className="absolute bottom-2 right-4 flex flex-col items-end ">
            <Button variant="outline" className="mb-1 w-48">Редактировать</Button>
            <Button variant="outline" className="w-48">Создать тур</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;