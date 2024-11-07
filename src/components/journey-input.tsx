import { Icon } from "@iconify/react";
import { Input } from "@/components/ui/input"

const JourneyInput = () => {
  return (
    <div className="bg-card text-card-foreground w-2/3 rounded-3xl py-6 px-4">
    <div>
        <span className="text-2xl font-semibold ">Основная информация</span>
        <div className="space-y-3 pt-4">
            <Input type="bebra" placeholder="Название тура" />
        <div className="flex gap-2">
            <Input type="bebra" placeholder="Тип тура" className="w-2/3" />
            <Input type="bebra" placeholder="Дополнительные типы тура" className="w-1/3" />
        </div>
    </div>
     
     <div className="pt-3">
        <span className="text-2xl font-semibold ">Финиш</span>
        <div className="space-y-3 pt-4">
            <Input type="bebra" placeholder="Название тура" />
            <div className="flex gap-2">
                <Input type="bebra" placeholder="Тип тура" className="w-2/3" />
                <Input type="bebra" placeholder="Дополнительные типы тура" className="w-1/3" />
            </div>
        </div>
     </div>
     
    </div>
    </div>
  );
};

export default JourneyInput;
