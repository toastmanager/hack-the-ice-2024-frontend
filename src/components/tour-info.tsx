import { Icon } from "@iconify/react";
import { Input } from "@/components/ui/input"

const TourCard = () => {
  return (
    <div className="bg-card text-card-foreground w-2/3 rounded-3xl py-6 px-4">
     <span className="text-2xl font-semibold ">Основная информация</span>
     <div className="space-y-3 pt-4">
     <Input type="bebra" placeholder="Название тура" />
     <Input type="bebra" placeholder="Тип тура" />
     <Input type="bebra" placeholder="Дополнительные типы тура" />
     <Input type="bebra" placeholder="Страна тура" />
     <Input type="bebra" placeholder="Регион" />
     </div>
     
    </div>
  );
};

export default TourCard;
