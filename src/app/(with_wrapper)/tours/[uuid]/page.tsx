import AuthorContact from "@/components/author-contact";
import ResidenceSection from "@/components/residence-section";
import TourFeatures from "@/components/tour-features";
import TourReviewsSection from "@/components/tour-reviews-section";
import TourScheduleSection from "@/components/tour-schedule-section";
import api from "@/lib/api-client";
import { twMerge } from "tailwind-merge";

const TourDetailsPage = async ({ params }: { params: { uuid: string } }) => {
  const { uuid } = await params;
  const tour = (await api.get(`tours/${uuid}`)).data;

  console.log(tour);

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
          <span className="text-4xl font-semibold">{tour.title}</span>
          <div className="mt-5 grid grid-cols-auto-fit-240 w-full gap-2 grid-rows-auto-fit-240">
            {tour.image_urls.map((imageUrl: string, index: number) => (
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
                ageGroup: tour.age_group,
                supportedLanguages: tour.supported_languages,
                scoreActivity: tour.activity_score,
                scoreComfort: tour.comfort_score,
                tourDuration: tour.days_duration,
              }}
            />
            <TourScheduleSection scheduleItems={[]} />
            <ResidenceSection
              residence={{
                comfort: tour.residence_comfort,
                hotel_duration: tour.hotel_duration,
                motel_duration: tour.motel_duration,
                recidencies: tour.residencies
              }}
            />
            <TourReviewsSection reviews={examleReviews} />
            <AuthorContact
              authorcontact={{
                authorName: tour.author.fullname,
                isVerified: tour.author.is_verified,
                avatarUrl: tour.author.avatar_url,
                description: tour.author.description,
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
