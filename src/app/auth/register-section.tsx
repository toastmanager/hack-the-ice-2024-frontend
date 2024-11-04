"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

const RegisterSection = () => {
  const [userType, setUserType] = useState<"tourist" | "author">("tourist");

  return (
    <section className="flex flex-col gap-4">
      <RadioGroup
        defaultValue="is-tourist"
        className="flex bg-background px-3 py-2 rounded-sm gap-6"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="is-tourist"
            onClick={() => setUserType("tourist")}
            id="is-tourist"
            className="w-6 h-6"
          />
          <Label htmlFor="is-tourist">Я путешественник</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="is-tour-creator"
            onClick={() => setUserType("author")}
            id="is-tour-creator"
            className="w-6 h-6"
          />
          <Label htmlFor="is-tour-creator">Я автор туров</Label>
        </div>
      </RadioGroup>
      <div className="grid grid-flow-row grid-cols-2 gap-x-4">
        <div>
          <Label>ФИО</Label>
          <Input className="bg-background" type="text" />
        </div>
        <div>
          <Label>Почта</Label>
          <Input className="bg-background" type="email" />
        </div>
        <div>
          <Label>Пароль</Label>
          <Input className="bg-background" type="password" />
        </div>
        {userType === "author" && (
          <div>
            <Label>Номер</Label>
            <Input className="bg-background" type="tel" />
          </div>
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
      <Button className="w-full">Зарегистрироваться</Button>
    </section>
  );
};

export default RegisterSection;
