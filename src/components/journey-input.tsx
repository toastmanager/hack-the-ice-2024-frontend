import { Input } from "@/components/ui/input";

const TourStartEndInput = () => {
  return (
    <div className="bg-card text-card-foreground w-full rounded-3xl p-5">
      <div>
        <span className="text-2xl font-semibold">Начало тура</span>
        <div className="space-y-3 pt-4">
          <Input placeholder="Название тура" className="bg-card"/>
          <div className="flex gap-2">
            <Input placeholder="Тип тура" className="w-2/3 bg-card" />
            <Input placeholder="Дополнительные типы тура" className="w-1/3 bg-card" />
          </div>
        </div>

        <div className="pt-3">
          <span className="text-2xl font-semibold ">Конец тура</span>
          <div className="space-y-3 pt-4">
            <Input placeholder="Название тура" className="bg-card"/>
            <div className="flex gap-2">
              <Input placeholder="Тип тура" className="w-2/3 bg-card" />
              <Input placeholder="Дополнительные типы тура" className="w-1/3 bg-card" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourStartEndInput;
