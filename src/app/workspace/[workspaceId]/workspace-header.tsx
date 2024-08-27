import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import { Doc } from "../../../../convex/_generated/dataModel";
import { ChevronDown, ListFilter, SquarePen } from "lucide-react";

interface WorkspaceHeaderProps {
  workspace: Doc<"workspaces">;
  isAdmin: boolean;
}

const WorkspaceHeader = ({ workspace, isAdmin }: WorkspaceHeaderProps) => {
  return (
    <div className="flex items-center justify-between px-4 h-[49px] gap-0.5">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="transparent"
            className="font-semibold text-base w-auto p-1.5 overflow-hidden"
            size="sm"
          >
            <span className="truncate">{workspace.name}</span>
            <ChevronDown className="size-5 shrink-0 ml-1" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="bottom" align="start" className="w-64">
          <DropdownMenuItem className="cursor-pointer capitalize space-x-2 p-1">
            <Button size="iconSm" className="hover:bg-primary">
              {workspace.name.charAt(0).toUpperCase()}
            </Button>
            <div className="flex flex-col items-start">
              <p className="font-bold">{workspace.name}</p>
              <p className="text-xs text-muted-foreground">Active workspace.</p>
            </div>
          </DropdownMenuItem>
          {isAdmin && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer p-2"
                onClick={() => {}}
              >
                Invite people to {workspace.name}
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer p-2"
                onClick={() => {}}
              >
                Preferences
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex items-center gap-0.5">
        <Button variant="transparent" size="iconSm">
          <ListFilter className="size-4" />
        </Button>
        <Button variant="transparent" size="iconSm">
          <SquarePen className="size-4" />
        </Button>
      </div>
    </div>
  );
};

export default WorkspaceHeader;
