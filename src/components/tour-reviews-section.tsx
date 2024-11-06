import { twMerge } from "tailwind-merge";
import TourReview from "./tour-review";
import { ScrollArea } from "./ui/scroll-area";

const TourReviewsSection = ({
  className,
  reviews,
}: {
  className?: string;
  reviews: ReviewEntity[];
}) => {
  return (
    <section className={twMerge("space-y-2 bg-card p-5 rounded-2xl", className)}>
      <span className="text-3xl font-semibold">Отзывы о туре</span>
      <ScrollArea className="overflow-y-auto max-h-[512px] rounded-2xl bg-background p-2">
        <ul className="space-y-2">
          {reviews.map((review, index) => {
            return (
              <li key={index}>
                <TourReview review={review} />
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </section>
  );
};

export default TourReviewsSection;
