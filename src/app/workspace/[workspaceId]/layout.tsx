"use client";
import React, { ReactNode } from "react";
import Toolbar from "./toolbar";
import Sidebar from "./sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import WorkspaceSidebar from "./workspace-sidebar";

const WorkspaceLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full">
      <Toolbar />
      <div className="flex h-[calc(100vh-48px)]">
        <Sidebar />
        <ResizablePanelGroup
          direction="horizontal"
          autoSaveId="work-space-layout"
        >
          <ResizablePanel
            defaultSize={20}
            minSize={11}
            className="bg-primary/80"
          >
            <WorkspaceSidebar />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel minSize={60} defaultSize={80}>
            {children}
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default WorkspaceLayout;
