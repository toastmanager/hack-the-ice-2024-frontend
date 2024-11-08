import { Icon } from "@iconify/react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const TourCard = ({
  tour,
  className = "",
}: {
  tour: TourEntity;
  className?: string;
}) => {
  return (
    <Link
      href={`/tours/${tour.uuid}`}
      className={twMerge(
        "bg-card text-card-foreground w-96 rounded-3xl",
        className
      )}
    >
      <div className="relative">
        <button className="absolute top-0 right-0 bg-card px-[11px] py-2 rounded-tr-[1.4rem] rounded-bl-lg">
          {tour.inBookmark ? (
            <Icon icon="mage:heart-fill" width={24} className="text-primary" />
          ) : (
            <Icon icon="mage:heart" width={24} className="text-primary" />
          )}
        </button>
        <img
          alt="image"
          src={tour.image_urls[0]}
          className="rounded-t-3xl bg-gray-600 object-left-top object-cover w-96 h-44"
        />
        <div className="flex absolute bottom-0 w-full justify-between">
          <div className="flex items-center bg-card pl-3 pr-4 py-1 rounded-tr-lg">
            <Icon icon="mage:location" className="mr-1 text-primary" />
            <span>{tour.location}</span>
          </div>
          <div className="bg-card px-3 rounded-tl-lg py-1">
            <span>{tour.days_duration}</span>
          </div>
        </div>
      </div>
      <div className="px-5 py-4">
        <span className="text-sm font-medium">{tour.title}</span>
        <div className="flex justify-between mt-4">
          <div className="flex gap-1">
            <span className="text-xl font-semibold">{tour.price} ₽</span>
            {tour.previousPrice && (
              <span className="text-sm line-through text-foreground-alternative">
                {tour.previousPrice} ₽
              </span>
            )}
          </div>
          <div className="flex items-center gap-1">
            <Icon icon="mage:star-fill" className="text-primary text-xl" />
            <span className="text-xl font-semibold">{tour.score ?? "4.4"}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TourCard;
