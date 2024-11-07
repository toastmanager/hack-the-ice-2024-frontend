import AuthorContact from "@/components/author-contact";
import ResidenceSection from "@/components/residence-section";
import TourFeatures from "@/components/tour-features";
import TourReviewsSection from "@/components/tour-reviews-section";
import TourScheduleSection from "@/components/tour-schedule-section";
import api from "@/lib/api-client";
import { twMerge } from "tailwind-merge";

const TourDetailsPage = async ({ params }: { params: { uuid: string } }) => {
  const { uuid } = await params;
  const review = (await api.get(`tours/${uuid}`)).data;

  console.log(review);

  const examleReviews: ReviewEntity[] = Array.from(
    { length: 14 },
    (_, index) => {
      const review: ReviewEntity = {
        date: new Date(),
        score: 4,
        text: "Отличный тур!!!",
        user: {
          id: index.toString(),
          fullname: "Дронова Наталья Петровна",
          isVerified: false,
          avatarUrl: "",
          bannerUrl: "",
        },
      };

      return review;
    }
  );

  return (
    <div className="min-h-full flex justify-center">
      <main className="max-w-[1200px] w-full mt-5 mb-10">
        <div className="bg-card rounded-2xl w-full p-5">
          <span className="text-4xl font-semibold">{review.title}</span>
          <div className="mt-5 grid grid-cols-auto-fit-240 w-full gap-2 grid-rows-auto-fit-240">
            {review.image_urls.map((imageUrl: string, index: number) => (
              <img
                key={index}
                src={imageUrl}
                className={twMerge(
                  "object-cover h-full w-full rounded-2xl",
                  index === 0 ? "md:row-span-2 md:col-span-1 lg:col-span-2" : ""
                )}
              ></img>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap-reverse w-full justify-between mt-2">
          <div className="w-[840px] space-y-2">
            <TourFeatures
              tourfeat={{
                gapGroup: 15,
                languageSupport: "Русский, Английский",
                scoreActivity: 1,
                scoreComfort: 3,
                tourDuration: 7,
              }}
            />
            <TourScheduleSection scheduleItems={[]} />
            <ResidenceSection
              residence={{
                comfort: 4,
                hotelDuration: "4 ночи",
                motelDuration: "7 дней 6 ночей",
                items: [
                  {
                    imagesUrls: [],
                    title: "Irkutsk city center",
                    description:
                      "Мы будем жить в уютном гест хаусе с красивой зелёной территорией c видом на пальмовую рощу в шаговой доступности от океана. В номерах есть всё необходимое для вашего удобства: кондиционер, фен, электрический чайник, сейф, wi-fi.",
                    duration: "6 ночей",
                  },
                ],
              }}
            />
            <TourReviewsSection reviews={examleReviews} />
            <AuthorContact
              authorcontact={{
                authorName: "Егорова Валентина",
                isVerified: true,
                avatarUrl: "",
                description:
                  "Я сертифицированный фитнес/йога инструктор и хореограф. Более 10 лет организую женские туры по всему миру. Cейчас живу на Байкале и приглашаю тебя посетить это волшебное место!",
              }}
            />
          </div>
          <div className="w-[350px] space-y-2">
            <div className="rounded-2xl bg-card h-[298px] p-5">
              <span>This is page of tour with uuid {uuid}</span>
            </div>
            <div className="h-[149px] bg-card rounded-2xl p-5">
              <span>This is page of tour with uuid {uuid}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TourDetailsPage;
