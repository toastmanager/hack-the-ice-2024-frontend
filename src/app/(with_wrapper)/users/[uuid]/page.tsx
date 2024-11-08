import ProfileCard from "@/components/profile-card/profile-card";
import api from "@/lib/api-client";
import ToursScreen from "./tours-screen";

const UserPage = async ({ params }: { params: { uuid: string } }) => {
  const { uuid } = await params;
  const user = (await api.get(`users/${uuid}`)).data;

  const userInfo: ProfileEntity = {
    id: uuid,
    fullname: user.fullname,
    isVerified: user.is_verified,
    score: 4.6,
    avatarImageKey: user.avatarImageKey,
    bannerUrl: user.banner_url,
    touristsGuidedNumber: 206,
    toursConductedNumber: 22,
    toursPublishedNumber: user.tours.length,
  };

  return (
    <div className="flex min-h-full w-full">
      <main className="w-[1200px] min-h-full mx-auto pt-5 pb-20">
        <ProfileCard profileEntity={userInfo} />
        <ToursScreen tours={user.tours} />
      </main>
    </div>
  );
};

export default UserPage;
