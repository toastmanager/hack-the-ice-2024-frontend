import { Icon } from "@iconify/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "@/components/ui/button";

const ProfileCard = ({ profileEntity }: { profileEntity: ProfileEntity }) => {
  return (
    <div className="mx-4 md:mx-auto bg-card text-card-foreground rounded-3xl relative">
      <div
        className="w-full h-52 bg-cover bg-center rounded-t-3xl bg-gray-500"
        style={{ backgroundImage: `url(${profileEntity.bannerUrl})` }}
      ></div>

      <Avatar className="absolute top-44 left-5 border-4 border-card w-[136px] h-[136px]">
        <AvatarImage src={profileEntity.avatarUrl} className="object-cover" />
        <AvatarFallback>Avatar</AvatarFallback>
      </Avatar>

      <div className="pt-14 px-5 md:px-0 md:pt-0 md:pl-44 mt-14 md:mt-5 pb-5 mr-5 flex flex-wrap justify-between items-center">
        <div>
          <div className="flex">
            <h1 className="flex items-center text-2xl gap-2">
              <span>{profileEntity.fullname}</span>
              <Icon
                icon="mage:check-circle-fill"
                className="w-5 text-primary"
              />
            </h1>
          </div>

          <div className="flex flex-wrap gap-5 mt-3">
            <div>
              <p className="text-xs font-light text-gray-400">Проведено</p>
              <p className="text-sm font-medium">
                {profileEntity.toursConductedNumber} тура
              </p>
            </div>

            <div>
              <p className="text-xs font-light text-gray-400">Опубликовано</p>
              <p className="text-sm font-medium">
                {profileEntity.toursPublishedNumber} туров
              </p>
            </div>

            <div>
              <p className="text-xs font-light text-gray-400">Рейтинг</p>
              <p className="text-sm font-medium">{profileEntity.score}</p>
            </div>

            <div>
              <p className="text-xs font-light text-gray-400">
                Проведено туристов
              </p>
              <p className="text-sm font-medium">
                {profileEntity.touristsGuidedNumber}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-5 md:mt-0 gap-1">
          {/* FIXME: make available only if profile id is current user id */}
          <Button
            variant="outline"
            className="w-48 bg-card hover:bg-card border-primary text-primary"
          >
            Редактировать
          </Button>
          <Button
            variant="outline"
            className="w-48 bg-primary text-primary-foreground hover:bg-primary hover:opacity-85 hover:text-primary-foreground"
          >
            Создать тур
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
