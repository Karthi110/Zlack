import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useGetChannels } from "@/features/channels/api/use-get-channels";
import { useGetMembers } from "@/features/members/api/use-get-members";
import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { useWorkSpaceId } from "@/hooks/use-workspace-id";
import { Calendar, Info, Search } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Toolbar = () => {
  const workspaceId = useWorkSpaceId();

  const [open, setOpen] = useState(false);

  const { data: channels } = useGetChannels({ workspaceId });
  const { data: members } = useGetMembers({ workspaceId });

  const { data } = useGetWorkspace({ id: workspaceId });

  return (
    <nav className="bg-primary flex items-center justify-between h-12 p-1">
      <div className="flex-1" />
      <div className="min-w-[280px] max-[642px] grow-[2] shrink">
        <Button
          variant="secondary"
          className=" w-full justify-start px-2"
          size="sm"
          onClick={() => setOpen(true)}
        >
          <Search className="size-4  mr-2" />
          <span className="text-xs">Search {data?.name}</span>
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Channels">
              {channels?.map((channel) => (
                <CommandItem key={channel._id} asChild>
                  <Link
                    href={`/workspace/${workspaceId}/channel/${channel._id}`}
                    onClick={() => setOpen(false)}
                  >
                    {channel.name}
                  </Link>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandGroup heading="Members">
              {members?.map((member) => (
                <CommandItem key={member._id} asChild>
                  <Link
                    href={`/workspace/${workspaceId}/member/${member._id}`}
                    onClick={() => setOpen(false)}
                  >
                    {member.user.name}
                  </Link>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
          </CommandList>
        </CommandDialog>
      </div>
      <div className="ml-auto flex-1 flex items-center justify-end">
        <Button variant="transparent" size="iconSm">
          <Info className="size-5 text-white" />
        </Button>
      </div>
    </nav>
  );
};

export default Toolbar;
