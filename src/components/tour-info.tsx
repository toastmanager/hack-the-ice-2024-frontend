import { Input } from "@/components/ui/input";

const TourMainInfoInputs = () => {
  return (
    <div className="bg-card text-card-foreground w-full rounded-3xl p-5">
      <span className="text-2xl font-semibold ">Основная информация</span>
      <div className="space-y-3 pt-4">
        <Input placeholder="Название тура" className="bg-card"/>
        <Input placeholder="Тип тура" className="bg-card"/>
        <Input placeholder="Дополнительные типы тура" className="bg-card"/>
        <Input placeholder="Страна тура" className="bg-card"/>
        <Input placeholder="Регион" className="bg-card"/>
      </div>
    </div>
  );
};

export default TourMainInfoInputs;
