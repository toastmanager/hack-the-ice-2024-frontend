import Link from "next/link";
import { Icon } from "@iconify/react";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const AppBar = () => {
  return (
    <nav className="flex justify-center bg-card text-card-foreground py-3 px-3">
      <div className="w-[1200px] flex justify-between text-sm">
        <div className="flex gap-5 items-center">
          <div className="h-[79px]"></div>
          <Input placeholder="Поиск" className="w-60 bg-accent" />
          <Link href={"#"}>Все путешествия</Link>
          <Link href={"#"}>Подборки туров</Link>
          <Link href={"#"}>Владельцам туров</Link>
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
