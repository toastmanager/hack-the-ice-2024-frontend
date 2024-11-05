import Link from "next/link";
import { Icon } from "@iconify/react";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";
import logo from "../../public/logo.svg";

const AppBar = () => {
  return (
    <nav className="flex justify-center bg-card text-card-foreground py-3 px-3">
      <div className="w-[1200px] flex justify-between text-sm">
        <div className="flex gap-7 items-center">
          <Image alt="Logo" src={logo} />
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
          <Avatar>
            <AvatarImage />
            <AvatarFallback>User</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
};

export default AppBar;
