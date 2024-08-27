"use client";
import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { useWorkSpaceId } from "@/hooks/use-workspace-id";
import React from "react";

const WorkspaceIdPage = () => {
  const workspaceId = useWorkSpaceId();
  const { data } = useGetWorkspace({ id: workspaceId });
  return <div>ID:{data?._id}</div>;
};

export default WorkspaceIdPage;
