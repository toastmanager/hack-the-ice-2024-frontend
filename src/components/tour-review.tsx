import Link from "next/link";
import { Icon } from "@iconify/react";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const TourReview = ({ review }: { review: ReviewEntity }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < review.score; i++) {
      stars.push(<Icon key={i} icon="mdi:star" className="text-green-400" />); {/* ai ass */}
    }
    return stars;
  };

  return (
    <div className="flex items-start relative my-4 border rounded-md p-5 bg-white">
      <Avatar>
        <AvatarImage src={review.imageUrl} alt="Avatar" className="w-12 h-12 rounded-full" />
      </Avatar>

      <div className="w-full pl-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{review.UserName}</h3>
          <p className="text-sm text-gray-600">{review.Date}</p>
        </div>

        <div className="flex items-center space-x-1">
          {renderStars()} 
          <h1>{review.score}</h1>
        </div>

        <p className="text-sm text-gray-800 mt-2">{review.description}</p>
      </div>
    </div>
  );
};

export default TourReview;
