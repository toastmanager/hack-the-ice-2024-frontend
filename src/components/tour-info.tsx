import { Input } from "@/components/ui/input";
import { FormControl, FormField, FormItem } from "./ui/form";
import { UseFormReturn } from "react-hook-form";

const TourMainInfoInputs = ({ form }: { form: UseFormReturn }) => {
  return (
    <div className="bg-card text-card-foreground w-full rounded-3xl p-5">
      <span className="text-2xl font-semibold ">Основная информация</span>
      <div className="space-y-3 pt-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Название тура"
                  className="bg-card"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Тип тура" className="bg-card" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="extra-types"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Дополнительные типы тура"
                  className="bg-card"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Страна тура"
                  className="bg-card"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="region"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Регион" className="bg-card" {...field}/>
              </FormControl>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default TourMainInfoInputs;
