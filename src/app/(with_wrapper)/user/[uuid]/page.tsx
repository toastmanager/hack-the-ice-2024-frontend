import ProfileCard from "@/components/profile-card";

const UserPage = async ({ params }: { params: { uuid: string } }) => {
  const { uuid } = await params;

  const sampleProfile: ProfileEntity = {
    id: uuid,
    fullname: "Егорова Валентина Ивановна",
    isVerified: true,
    score: 4.6,
    touristsGuidedNumber: 206,
    toursConductedNumber: 22,
    toursPublishedNumber: 12,
  };

  return (
    <div className="flex h-full w-full">
      <main className="h-full w-[1200px] mx-auto pt-5">
        <ProfileCard profileEntity={sampleProfile} />
      </main>
    </div>
  );
};

export default UserPage;
