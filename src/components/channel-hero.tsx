import { format } from "date-fns";
import React from "react";

interface ChannelHeroProps {
  name: string;
  creationTime: number;
}

const ChannelHero = ({ creationTime, name }: ChannelHeroProps) => {
  return (
    <div className="mt-[60px] mx-5 mb-4">
      <p className="text-3xl font-bold flex items-center mb-2 capitalize">
        # {name}
      </p>
      <p className="font-normal text-slate-800 mb-4">
        This channel was created on {format(creationTime, "MMM do,yyy")}. This
        is the very beginning of the <strong>{name}</strong> channel.
      </p>
    </div>
  );
};

export default ChannelHero;
