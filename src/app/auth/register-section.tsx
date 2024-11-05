"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const registerFormSchema = z
  .object({
    fullname: z.string().min(4),
    email: z.string().email(),
    password: z.string().min(4),
    passwordConfirm: z.string().min(4),
    phone: z.string().optional(),
    type: z.enum(["tourist", "author"], {
      required_error: "Выберите тип вашего профиля",
    }),
  })
  .refine(
    (data) => {
      return data.password === data.passwordConfirm;
    },
    {
      message: "Пароли не совпадают",
      path: ["passwordConfirm"],
    }
  )
  .refine(
    (data) => {
      return (
        (data.type === "author" && data.phone?.length === 12) || data.type === "tourist"
      );
    },
    {
      message: "Укажите номер телефона",
      path: ["phone"],
    }
  );

const RegisterSection = () => {
  const [userType, setUserType] = useState<"tourist" | "author">("tourist");
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: "",
      fullname: "",
      password: "",
      passwordConfirm: "",
      phone: "",
      type: "tourist",
    },
  });

  const handleSubmit = (values: z.infer<typeof registerFormSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <RadioGroup
                  onValueChange={(value: "author" | "tourist") => {
                    setUserType(value);
                    field.onChange(value);
                  }}
                  defaultValue={field.value}
                  className="flex bg-background px-3 py-2 rounded-sm space-x-6"
                >
                  <FormItem>
                    <FormControl>
                      <RadioGroupItem value="tourist" className="w-6 h-6" />
                    </FormControl>
                    <FormLabel>Я путешественник</FormLabel>
                  </FormItem>
                  <FormItem>
                    <FormControl>
                      <RadioGroupItem value="author" className="w-6 h-6" />
                    </FormControl>
                    <FormLabel>Я автор туров</FormLabel>
                    <FormMessage />
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <div>
          <div className="grid grid-flow-row grid-cols-2 gap-x-4">
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ФИО</FormLabel>
                  <FormControl>
                    <Input className="bg-background" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Почта</FormLabel>
                  <FormControl>
                    <Input className="bg-background" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Пароль</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-background"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="passwordConfirm"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Подтверждение пароля</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-background"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {(userType === "author" || form.getValues('phone')) && (
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Номер телефона</FormLabel>
                  <FormControl>
                    <Input placeholder="+71234567890" className="bg-background" type="tel" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </div>
        <span className="text-[0.75rem]">
          Отправляя форму вы соглашаетесь с условиями публичной оферты для{" "}
          <a
            href={userType == "tourist" ? "#tourist" : "#author"}
            className="text-primary visited:text-purple-600"
          >
            {userType == "tourist" ? "путешественника" : "организатора"}
          </a>{" "}
          и соглашаетесь с политикой{" "}
          <a href="#" className="text-primary visited:text-purple-600">
            обработки персональных данных
          </a>
        </span>
        <Button className="w-full" type="submit">
          Зарегистрироваться
        </Button>
      </form>
    </Form>
  );
};

export default RegisterSection;
