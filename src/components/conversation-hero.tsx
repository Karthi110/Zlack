import { format } from "date-fns";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface ChannelHeroProps {
  name?: string;
  image?: string;
}

const ConversationHero = ({ image, name = "Member" }: ChannelHeroProps) => {
  const avatarFallback = name.charAt(0).toUpperCase();
  return (
    <div className="mt-[60px] mx-5 mb-4">
      <div className="flex items-center gap-x-1 mb-2">
        <Avatar className="size-14 rounded-md mr-1">
          <AvatarImage src={image} />
          <AvatarFallback className="bg-primary/80 text-secondary rounded-md text-xs">
            {avatarFallback}
          </AvatarFallback>
        </Avatar>
        <p className="text-3xl font-bold capitalize">{name}</p>
      </div>
      <p className="font-normal text-slate-800 mb-4">
        This conversation is just between you and <strong>{name}</strong>
      </p>
    </div>
  );
};

export default ConversationHero;
