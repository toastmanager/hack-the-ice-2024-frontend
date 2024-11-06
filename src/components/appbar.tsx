"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { useAuth } from "@/providers/auth-provider";

const AppBar = () => {
  const user = useAuth();

  return (
    <nav className="flex justify-center bg-card text-card-foreground py-3 px-3">
      <div className="w-[1200px] flex justify-between text-sm">
        <div className="flex gap-7 items-center">
          <Link href='/'>
            <Image alt="Logo" src={logo} />
          </Link>
          <Input placeholder="Поиск" className="w-60 bg-accent" />
          <div className="flex gap-5">
            <Link href={"#"}>Все путешествия</Link>
            <Link href={"#"}>Подборки туров</Link>
            <Link href={"#"}>Владельцам туров</Link>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 bg-accent rounded-full">
            <Icon
              icon="mage:notification-bell"
              width={24}
              className="text-accent-foreground"
            />
          </button>
          <Link href={!user ? "/auth" : `/users/${user.id}`}>
            {!user ? (
              <div className="p-2 bg-accent rounded-full">
                <Icon icon={"mage:login"} width={24} />
              </div>
            ) : (
              <Avatar>
                <AvatarImage src={user.avatarUrl} />
                <AvatarFallback className="bg-primary text-primary-foreground text-3xl font-medium">
                  {user.fullname[0]}
                </AvatarFallback>
              </Avatar>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AppBar;
