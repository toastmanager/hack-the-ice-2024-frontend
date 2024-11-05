"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
  remeberMe: z.boolean(),
});

const LoginSection = () => {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
      remeberMe: false,
    },
  });

  const handleSubmit = (values: z.infer<typeof loginFormSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="">
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Почта</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-background"
                      placeholder="example@example.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Пароль</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-background"
                      placeholder="Password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </div>
        <FormField
          control={form.control}
          name="remeberMe"
          render={({ field }) => {
            return (
              <FormItem>
                <div className="flex items-center space-x-2 mt-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      disabled={field.disabled}
                      ref={field.ref}
                      name={field.name}
                      onBlur={field.onBlur}
                      onCheckedChange={field.onChange}
                      className="rounded-[5px]"
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Запомнить меня
                  </FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Button type="submit" className="w-full mt-4">
          Войти
        </Button>
      </form>
    </Form>
  );
};

export default LoginSection;
