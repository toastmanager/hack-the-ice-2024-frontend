import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem } from "./ui/form";

const TourStartEndInput = ({ form }: { form: UseFormReturn }) => {
  return (
    <div className="bg-card text-card-foreground w-full rounded-3xl p-5">
      <div>
        <span className="text-2xl font-semibold">Начало путешесетвия</span>
        <div className="space-y-3 pt-4">
          <FormField
            control={form.control}
            name="start_city"
            render={({ field }) => (
              <Input
                placeholder="Старт путешествия (Город)"
                className="bg-card"
                {...field}
              />
            )}
          />
          <div className="flex gap-2">
            <FormField
              control={form.control}
              name="start_location"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Место сбора"
                      className="w-full bg-card"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="start_time"
              render={({ field }) => (
                <Input
                  placeholder="Время сбора"
                  className="w-1/3 bg-card"
                  {...field}
                />
              )}
            />
          </div>
        </div>

        <div className="pt-3">
          <span className="text-2xl font-semibold ">Финиш путешесетвия</span>
          <div className="space-y-3 pt-4">
            <FormField
              control={form.control}
              name="end_city"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Конец путешествия (Город)"
                      className="bg-card w-full"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="end_location"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="Место сбора"
                        className="w-full bg-card"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="end_time"
                render={({ field }) => (
                  <Input
                    placeholder="Время завершения тура"
                    className="w-1/3 bg-card"
                    {...field}
                  />
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourStartEndInput;
