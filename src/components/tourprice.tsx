import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const TourPrice = () => {
  return (
    <div className="bg-card text-card-foreground w-full rounded-3xl p-5">
      <span className="text-2xl font-semibold">Стоимость тура</span>

      <div className="space-y-4 pt-4">
        <span className="">
          При выборе основной валюты тура, окончательная цена поездки будет
          пересчитываться в рублях по актуальному курсу валют на момент покупки.
        </span>
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="email">Итоговая стоимость</Label>
          <Input
            type="email"
            id="email"
            placeholder="Введите стоимость в любой рублях"
          />
        </div>
      </div>
    </div>
  );
};

export default TourPrice;
