import TourCard from "@/components/tour-card";
import api from "@/lib/api-client";

export default async function Home() {
  const tours = (await api.get("tours")).data;

  console.log(tours)

  return (
    <main className="max-w-[1200px] w-full h-full pt-5 mx-auto mt-5">
      <section className="flex flex-wrap gap-y-5 gap-x-5 items-center">
        {tours.map((tour: any) => (
          <TourCard tour={tour}/>
        ))}
      </section>
    </main>
  );
}
