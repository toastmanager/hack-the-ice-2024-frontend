import { Icon } from "@iconify/react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
const TourDescriptionInput = () => {
  return (
    <div className="bg-card text-card-foreground w-full rounded-3xl p-5">
      <div>
        <span className="text-2xl font-semibold ">Описание тура</span>
      </div>
      <div className="space-y-3 pt-4">
        <form className="">
          <label htmlFor="countries" className="block mb-2 text-sm font-medium">
            Классификация
          </label>
          <div className="flex gap-x-4">
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option>Активность</option>
              <option>Базовый</option>
              <option>Средний</option>
              <option>Продвинутый</option>
              <option>Сложный</option>
            </select>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option>Комфорт</option>
              <option>Низкий</option>
              <option>Средний</option>
              <option>Высокий</option>
              <option>Идеальный</option>
            </select>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option>Язык группы</option>
              <option>Русский</option>
              <option>English</option>
            </select>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option>Средний возраст группы</option>
              <option>10-20</option>
              <option>20-30</option>
              <option>40+</option>
            </select>
          </div>
          <div className="grid w-full gap-1.5 mt-5">
            <Label htmlFor="message">Общее описание тура</Label>
            <Textarea placeholder="Введите описание места." id="message" />
          </div>
          <div className="grid w-full items-center gap-1.5 mt-5">
            <Label htmlFor="videoUrl">
              Ссылка на видео YouTube о туре (не обязательно)
            </Label>
            <Input
              type="videoUrl"
              id="videoUrl"
              placeholder="Вставьте ссылку"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TourDescriptionInput;
