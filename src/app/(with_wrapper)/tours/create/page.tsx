import StepsBar from "@/components/stepsbar";
import { Button } from "@/components/ui/button";

const TourCreatePage = () => {
  return (
    <div className="h-full w-full flex justify-center">
      <main className="max-w-[1200px] w-full mt-5 space-y-5">
        <span className="text-2xl font-semibold">Создание тура</span>
        <StepsBar step={1} />
        <Button />
      </main>
    </div>
  );
};

export default TourCreatePage;
