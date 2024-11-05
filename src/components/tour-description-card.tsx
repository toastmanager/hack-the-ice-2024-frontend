import { Icon } from "@iconify/react";
import Image from 'next/image';

const TourDescriptionCard = () => {
  return (
    <div className="bg-card text-card-foreground w-1/3 rounded-3xl h-64 bg-white">
      <div className="h-full object-cover rounded-3xl overflow-hidden">
        <img
          src="https://s3-alpha-sig.figma.com/img/35b9/ae1e/3c34665f403d22e5195723ce52e0a12e?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gYGGkyRW-K9REM59eL~Gquz917J2ep~cdyxAu7WRleLro8e~UdDzh4eh7YgLF0qyc6JRYZm7rCMGPC7lO~lJSUdktQiV6on2Y2FfWQ0KPlkmlRGJGg5ygDGhlT-Qn71nlVNmUYE0dZ-FjSCHRMsOh5LL-O34IbwxgGRPLCR6lBc7h2tg0qLgvfBUULkpU2IVKto1LVvBbt7pKKA6n43RdkWGtwb4uB0-bvGzRd-xYedPjkBkU4EZB6VEtnNAZ6NL0DgN8IDP6nuo-M02yAKIlrWh9ti2A-z6VwJ3bgDBh8Gz3Tu8njkIaIh4yASD4VML7yGN-3TIv9XIxG-ChpVxHA__"
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="py-2 px-2 space-y-2">
        <h1>Знакомство с Иркутском</h1>
        <h1 className="text-gray-400">
          Вас встретят в аэропорту города Иркутска, откуда начнется ваше путешествие.
        </h1>
      </div>
    </div>
  );
};

export default TourDescriptionCard;
