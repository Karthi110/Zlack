import { Button } from "@/components/ui/button";
import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { useWorkSpaceId } from "@/hooks/use-workspace-id";
import { Info, Search } from "lucide-react";
import React from "react";

const Toolbar = () => {
  const workspaceId = useWorkSpaceId();

  const { data } = useGetWorkspace({ id: workspaceId });

  return (
    <nav className="bg-primary flex items-center justify-between h-12 p-1">
      <div className="flex-1" />
      <div className="min-w-[280px] max-[642px] grow-[2] shrink">
        <Button
          variant="secondary"
          className=" w-full justify-start px-2"
          size="sm"
        >
          <Search className="size-4  mr-2" />
          <span className="text-xs">Search {data?.name}</span>
        </Button>
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
