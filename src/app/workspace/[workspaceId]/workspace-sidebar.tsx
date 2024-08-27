import { useCurrentMember } from "@/features/members/api/use-current-member";
import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { useWorkSpaceId } from "@/hooks/use-workspace-id";
import { AlertTriangle, Loader2 } from "lucide-react";
import React from "react";
import WorkspaceHeader from "./workspace-header";

const WorkspaceSidebar = () => {
  const workspaceId = useWorkSpaceId();

  const { data: member, isLoading: memberLoading } = useCurrentMember({
    workspaceId,
  });
  const { data: workspace, isLoading: workspaceLoading } = useGetWorkspace({
    id: workspaceId,
  });

  if (workspaceLoading || memberLoading) {
    return (
      <div className="flex flex-col  h-full items-center justify-center">
        <Loader2 className="size-5 animate-spin text-white" />
      </div>
    );
  }
  if (!member || !workspace) {
    return (
      <div className="flex flex-col h-full items-center justify-center">
        <AlertTriangle className="size-5 text-white" />
        <span className="text-white text-sm">Workspace not found</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <WorkspaceHeader
        workspace={workspace}
        isAdmin={member.role === "admin"}
      />
    </div>
  );
};

export default WorkspaceSidebar;
