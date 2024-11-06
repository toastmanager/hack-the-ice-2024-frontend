import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const TourScheduleItem = ({ schedule }: { schedule: TourSectionItemEntity }) => {
  const textRef = useRef(null);
  const [isOverflowed, setIsOverflowed] = useState(false);
  const [isTextHidden, setIsTextHidden] = useState(true);

  useEffect(() => {
    const checkOverflow = () => {
      if (textRef.current) {
        const { scrollHeight, clientHeight } = textRef.current;
        setIsOverflowed(scrollHeight > clientHeight);
      }
    };

    checkOverflow();

    window.addEventListener("resize", () => checkOverflow(), false);
  }, []);

  const toggleShowFullText = () => {
    setIsTextHidden((prev) => !prev);
  };

  return (
    <div className="flex gap-x-16 gap-y-4 flex-wrap md:flex-nowrap">
      <div className="min-w-32 py-3 border-2 rounded-full text-nowrap font-semibold h-min flex justify-center">
        <span>День {schedule.day}</span>
      </div>
      <div>
        <h1 className="mb-4 text-xl font-bold">{schedule.title}</h1>

        <div className="flex flex-wrap gap-x-4 gap-y-3 w-full">
          {schedule.imagesUrls.slice(0, 3).map((_, index) => (
            <img
              key={index}
              src={schedule.imagesUrls[index]}
              alt={`Image ${index + 1}`}
              className="w-36 rounded-md"
            />
          ))}
        </div>

        <span
          ref={textRef}
          className={twMerge(
            "font-normal text-foreground pt-5 overflow-hidden",
            isTextHidden ? "line-clamp-3" : "line-clamp-none"
          )}
        >
          {schedule.description}
        </span>

        {isOverflowed && (
          <button
            onClick={toggleShowFullText}
            className="text-primary font-medium mt-2"
          >
            {isTextHidden ? "Развернуть описание" : "Свернуть"}
          </button>
        )}
      </div>
    </div>
  );
};

export default TourScheduleItem;
