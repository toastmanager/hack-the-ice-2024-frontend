import { Input } from "@/components/ui/input";

const TourMainInfoInputs = () => {
  return (
    <div className="bg-card text-card-foreground w-full rounded-3xl p-5">
      <span className="text-2xl font-semibold ">Основная информация</span>
      <div className="space-y-3 pt-4">
        <Input placeholder="Название тура" />
        <Input placeholder="Тип тура" />
        <Input placeholder="Дополнительные типы тура" />
        <Input placeholder="Страна тура" />
        <Input placeholder="Регион" />
      </div>
    </div>
  );
};

export default TourMainInfoInputs;
