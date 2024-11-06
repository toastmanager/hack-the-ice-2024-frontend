import { Icon } from "@iconify/react";
import TourSectionItem from "./tour-section-item";

const ResidenceSection = ({
  residence,
}: {
  residence: ResidenceSectionEntity;
}) => {
  const comfortDescriptions = [
    "Низкий",
    "Ниже среднего",
    "Средний",
    "Выше среднего",
    "Высокий",
  ];

  return (
    <div className="rounded-2xl py-5 px-6 bg-card">
      <h1 className="text-3xl font-semibold pb-5">Проживание</h1>

      <div className="grid grid-cols-3 w-full">
        <div className="flex items-center gap-2">
          <Icon
            icon="hugeicons:smile"
            className="text-primary w-16 h-16 rounded-full"
          />
          <div className="w-full flex flex-col gap-1">
            <h1 className="text-sm font-medium">Комфорт</h1>
            <h1 className="text-xs text-foreground-alternative font-medium">
              {comfortDescriptions[residence.comfort - 1]}
            </h1>
            <div className="flex gap-[3px]">
              {[...Array(residence.comfort)].map((_, index) => (
                <div className="h-3 w-3 bg-primary-foreground border-[3px] border-primary rounded-full"></div>
              ))}
              {[...Array(5 - residence.comfort)].map((_, index) => (
                <div className="h-3 w-3 bg-primary rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Icon
            icon="solar:buildings-outline"
            className="text-primary w-16 h-16 rounded-full"
          />
          <div className="w-full flex flex-col">
            <div className="space-y-1">
              <h1 className="text-sm font-medium">Гостиница</h1>
              <h1 className="text-xs text-foreground-alternative font-medium">
                {residence.motelDuration}
              </h1>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Icon
            icon="solar:buildings-2-outline"
            className="text-primary w-16 h-16 rounded-full"
          />
          <div className="w-full flex flex-col ">
            <div className="space-y-1">
              <h1 className="text-sm font-medium">Отель</h1>
              <h1 className="text-xs text-foreground-alternative font-medium">
                {residence.hotelDuration}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <ul className="mt-3">
        <li>
          {residence.items.map((item) => (
            <TourSectionItem item={item} />
          ))}
        </li>
      </ul>
    </div>
  );
};

export default ResidenceSection;
