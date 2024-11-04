import TourCard from "@/components/tour-card";

export default function Home() {
  const sampleTour: TourEntity = {
    location: "Бурятия",
    duration: "8 дней",
    imageUrl:
      "https://variety.com/wp-content/uploads/2024/01/GettyImages-1849594759-e1704908885262.jpg?w=1024",
    inBookmark: false,
    price: 54000,
    score: 4.6,
    title: "Незабываемая поездка на озеро Байкал на монстер траках",
  };
  return (
    <main className="w-[1200px] pt-5">
      <TourCard tour={sampleTour} />
    </main>
  );
}
