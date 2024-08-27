import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import { useCreateWorkspaceModal } from "@/features/workspaces/store/use-create-workspace-modal";
import { useWorkSpaceId } from "@/hooks/use-workspace-id";
import { Loader2, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const WorkspaceSwitcher = () => {
  const router = useRouter();
  const workspaceId = useWorkSpaceId();
  const [_open, setOpen] = useCreateWorkspaceModal();

  const { data: workspace, isLoading: w_loading } = useGetWorkspace({
    id: workspaceId,
  });

  const { data: workspaces, isLoading: ws_loading } = useGetWorkspaces();

  const filteredWorkspaces = workspaces?.filter(
    (w) => w._id !== workspace?._id
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="secondary"
          size="iconSm"
          className="relative overflow-hidden font-medium text-lg"
        >
          {w_loading ? (
            <Loader2 className="size-5 animate-spin shrink-0" />
          ) : (
            workspace?.name.charAt(0).toUpperCase()
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="start" className="w-64">
        <DropdownMenuItem
          className="cursor-pointer flex-col justify-normal items-start capitalize"
          onClick={() => router.push(`/workspace/${workspaceId}`)}
        >
          {workspace?.name}
          <span className="text-xs text-muted-foreground">
            Active workspace
          </span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {filteredWorkspaces?.map((w) => (
          <DropdownMenuItem
            key={w._id}
            className="cursor-pointer capitalize space-x-2"
            onClick={() => router.push(`/workspace/${w._id}`)}
          >
            <Button size="iconSm" className="shrink-0" variant="secondary">
              {w.name.charAt(0).toUpperCase()}
            </Button>
            <p className="truncate">{w.name}</p>
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <Button className="overflow-hidden" variant="ghost" size="iconSm">
            <Plus className="size-5 mr-2" />
          </Button>
          Create a new workspace
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WorkspaceSwitcher;
