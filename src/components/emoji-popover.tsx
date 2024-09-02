import React, { ReactNode, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

interface EmojiPopoverProps {
  children: ReactNode;
  hint?: string;
  onEmojiSelect: (emoji: string) => void;
}

const EmojiPopover = ({
  children,
  onEmojiSelect,
  hint = "Emoji",
}: EmojiPopoverProps) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [tootltipOpen, setTootltipOpen] = useState(false);

  const onSelect = (e: EmojiClickData) => {
    onEmojiSelect(e.emoji);
    setPopoverOpen(false);

    setTimeout(() => {
      setTootltipOpen(false);
    }, 500);
  };

  return (
    <TooltipProvider>
      <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
        <Tooltip
          open={tootltipOpen}
          onOpenChange={setTootltipOpen}
          delayDuration={50}
        >
          <PopoverTrigger asChild>
            <TooltipTrigger asChild>{children}</TooltipTrigger>
          </PopoverTrigger>
          <TooltipContent>
            <p className="font-medium text-xs">{hint}</p>
          </TooltipContent>
        </Tooltip>
        <PopoverContent className="p-0 w-full border-none shadow-none">
          <EmojiPicker onEmojiClick={onSelect} />
        </PopoverContent>
      </Popover>
    </TooltipProvider>
  );
};

export default EmojiPopover;
