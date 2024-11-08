"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { useAuth } from "@/providers/auth-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import api from "@/lib/api-client";

const AppBar = () => {
  const { user, setAccessToken } = useAuth();

  const logout = async () => {
    try {
      await api.post("auth/logout", undefined, {
        withCredentials: true,
      });
      setAccessToken(null);
      window.location.href = "/";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="flex justify-center bg-card text-card-foreground py-3 px-3">
      <div className="w-[1200px] flex justify-between text-sm">
        <div className="flex gap-7 items-center">
          <Link href="/">
            <Image alt="Logo" src={logo} />
          </Link>
          {/* <Input placeholder="Поиск" className="w-60 bg-accent" /> */}
          <div className="flex gap-5">
            <Link href={"/"}>Поиск туров</Link>
            <Link href={user ? "/tours/create" : "/auth"}>Создать тур</Link>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {!user ? (
            <>
              <Link href={"/auth?initial=login"}>
                <Button
                  className="bg-card text-primary border-primary"
                  variant={"outline"}
                >
                  Войти
                </Button>
              </Link>
              <Link href={"/auth?initial=register"}>
                <Button variant={"default"}>Регистрация</Button>
              </Link>
            </>
          ) : (
            <>
              <button className="p-2 bg-accent rounded-full">
                <Icon
                  icon="mage:notification-bell"
                  width={24}
                  className="text-accent-foreground"
                />
              </button>
              <Dialog>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Вы уверены что хотите выйти?</DialogTitle>
                    <DialogDescription></DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button
                      variant={"destructive"}
                      type="submit"
                      onClick={logout}
                    >
                      Да
                    </Button>
                  </DialogFooter>
                </DialogContent>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar>
                      <AvatarImage src={user.avatarUrl} />
                      <AvatarFallback className="bg-primary text-primary-foreground text-3xl font-medium">
                        {user.fullname[0]}
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Link
                        href={`/users/${user.id}`}
                        className="flex gap-1 items-center"
                      >
                        <Icon icon="mage:home" />
                        <span>Профиль</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <DialogTrigger className="flex gap-1 items-center text-destructive">
                        <Icon icon="mage:logout" />
                        Выйти
                      </DialogTrigger>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </Dialog>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default AppBar;
