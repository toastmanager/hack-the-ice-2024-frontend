import { Icon } from "@iconify/react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "@/components/ui/button";

const AuthorContact = ({ authorcontact }: { authorcontact: AuthorContactEntity }) => {
  return (
    <div className="items-start relative my-4 border rounded-md p-3 px-6 bg-white w-96 space-y-4">
        <div className="flex">
      <Avatar>
        <AvatarImage
          src={authorcontact.avatarUrl}
          alt="Avatar"
          className="w-16 h-16 rounded-full"
        />
      </Avatar>

      <div className="w-full pl-2 pt-1 flex flex-col justify-between">
        <div className="space-y-1">
          <h1 className="text-xs text-gray-400">Автор Тура</h1>
          <h1 className="text-xs">{authorcontact.authorName}</h1>
          <p className="text-sm text-gray-600"></p>
        </div>
        </div>
        
      </div>
      <Button
            variant="outline"
            className="w-full bg-card hover:bg-card border-primary text-primary"
          >
            Написать автору
          </Button>
    </div>
  );
};

export default AuthorContact;
