import { Icon } from "@iconify/react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "@/components/ui/button";

const AuthorContact = ({
  authorcontact: authorContact,
}: {
  authorcontact: AuthorContactEntity;
}) => {
  return (
    <div className="flex rounded-2xl bg-card p-5 justify-between">
      <div className="w-[540px] space-y-5">
        <div>
          <h1 className="text-3xl font-semibold">
            Автор туров{" "}
            {authorContact.authorName.split(" ").slice(0, 2).join(" ")}
          </h1>
          {authorContact.isVerified && (
            <div className="flex items-center gap-x-2">
              <Icon
                icon={"mage:check-circle-fill"}
                className="text-primary w-5 h-5"
              />
              <span className="font-medium text-base">
                Проверенный организатор
              </span>
            </div>
          )}
        </div>

        <div>
          <span className="">{authorContact.description}</span>
        </div>

        <Button
          variant="outline"
          className="w-full bg-card hover:bg-card border-primary text-primary"
        >
          Написать автору
        </Button>
      </div>

      <Avatar className="w-28 h-28">
        <AvatarImage
          src={authorContact.avatarUrl}
          alt="Avatar"
          className="object-cover object-left-top"
        />
      </Avatar>
    </div>
  );
};

export default AuthorContact;
