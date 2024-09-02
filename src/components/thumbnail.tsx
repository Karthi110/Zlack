import React from "react";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "./ui/dialog";
import { X } from "lucide-react";

const Thumbnail = ({ url }: { url: string | null | undefined }) => {
  if (!url) return null;
  return (
    <Dialog>
      <DialogTrigger className="p-0 w-fit">
        <div className="relative overflow-hidden max-w-[360px] border rounded-lg my-2 cursor-pointer">
          <img
            src={url}
            alt="message image"
            className="rounded-md object-cover size-full"
          />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[800px] border-none bg-transparent p-0 shadow-none">
        <img
          src={url}
          alt="message image"
          className="rounded-md object-cover size-full"
        />
      </DialogContent>
    </Dialog>
  );
};

export default Thumbnail;
