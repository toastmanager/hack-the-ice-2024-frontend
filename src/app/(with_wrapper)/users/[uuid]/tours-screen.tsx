import TourCard from "@/components/tour-card";

const ToursScreen = ({ tours }: { tours: TourEntity[] }) => {
  return (
    <section className="flex flex-wrap justify-between gap-y-5 mt-12">
      {tours.map((tour) => (
        <TourCard tour={tour} />
      ))}
    </section>
  );
};

export default ToursScreen;
