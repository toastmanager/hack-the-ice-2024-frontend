import { Icon } from "@iconify/react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel } from "./ui/form";

const TourDescriptionInput = ({ form }: { form: UseFormReturn }) => {
  return (
    <div className="bg-card text-card-foreground w-full rounded-3xl p-5">
      <div>
        <span className="text-2xl font-semibold ">Описание тура</span>
      </div>
      <div className="space-y-3 pt-4">
        <div className="">
          <label htmlFor="countries" className="block mb-2 text-sm font-medium">
            Классификация
          </label>
          <div className="flex gap-x-4">
            <FormField
              control={form.control}
              name="activity"
              defaultValue=""
              render={({ field }) => (
                <select
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                  {...field}
                >
                  <option value="" disabled hidden>
                    Активность
                  </option>
                  <option>Базовый</option>
                  <option>Средний</option>
                  <option>Продвинутый</option>
                  <option>Сложный</option>
                </select>
              )}
            />
            <FormField
              control={form.control}
              name="comfort"
              defaultValue=""
              render={({ field }) => (
                <select
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                  {...field}
                >
                  <option value="" disabled hidden>
                    Комфорт
                  </option>
                  <option>Низкий</option>
                  <option>Средний</option>
                  <option>Высокий</option>
                  <option>Идеальный</option>
                </select>
              )}
            />
            <FormField
              control={form.control}
              name="language"
              defaultValue=""
              render={({ field }) => (
                <select
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                  {...field}
                >
                  <option value="" disabled hidden>
                    Язык группы
                  </option>
                  <option>Русский</option>
                  <option>English</option>
                </select>
              )}
            />
            <FormField
              control={form.control}
              name="age_group"
              defaultValue=""
              render={({ field }) => (
                <select
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                  {...field}
                >
                  <option value="" disabled hidden>
                    Средний возраст группы
                  </option>
                  <option>10-20</option>
                  <option>20-30</option>
                  <option>40+</option>
                </select>
              )}
            />
          </div>
          <div className="grid w-full gap-1.5 mt-5">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Label>Общее описание тура</Label>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Введите описание места."
                      id="message"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="grid w-full items-center gap-1.5 mt-5">
            <FormField
              control={form.control}
              name="video_url"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>
                      <Label htmlFor="videoUrl">
                        Ссылка на видео YouTube о туре (не обязательно)
                      </Label>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="url"
                        placeholder="Вставьте ссылку"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                );
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDescriptionInput;
