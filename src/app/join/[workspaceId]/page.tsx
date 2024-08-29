"use client";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";
import { useGetWorkspaceInfo } from "@/features/workspaces/api/use-get-workspaceInfo";
import { useJoin } from "@/features/workspaces/api/use-join";
import { useWorkSpaceId } from "@/hooks/use-workspace-id";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo } from "react";
import { toast } from "sonner";

const JoinPage = () => {
  const [value, setValue] = React.useState("");
  const router = useRouter();
  const workspaceId = useWorkSpaceId();

  const { data, isLoading } = useGetWorkspaceInfo({ id: workspaceId });
  const { mutate, isPending } = useJoin();

  const isMember = useMemo(() => data?.isMember, [data?.isMember]);

  useEffect(() => {
    if (isMember) {
      router.push(`workspace/${workspaceId}`);
    }
  }, [isMember, router, workspaceId]);

  const handleComplete = () => {
    mutate(
      { workspaceId, joinCode: value },
      {
        onSuccess: (id) => {
          router.replace(`/workspace/${id}`);
          toast.success("workspace joined");
        },
        onError: () => {
          toast.error("failed to join workspace");
        },
      }
    );
  };

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Loader2 className="size-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full gap-y-8 items-center justify-center p-8 rounded-lg shadow-md">
      <Image
        src="/logo.png"
        width={90}
        height={90}
        alt="logo"
        className="object-contain"
      />
      <div className="flex flex-col gap-y-4 items-center justify-center max-w-md">
        <div className=" flex flex-col gap-y-2 items-center justify-center">
          <h1 className="text-2xl font-bold">Join {data?.name}</h1>
          <p className=" text-muted-foreground text-base">
            Enter the workspace code to join
          </p>
        </div>
        <InputOTP
          maxLength={6}
          pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
          value={value}
          onChange={(value) => setValue(value.toUpperCase())}
          onComplete={handleComplete}
          disabled={isPending}
        >
          <InputOTPGroup>
            <InputOTPSlot
              index={0}
              className="size-14 text-2xl font-semibold "
              autoFocus
            />
            <InputOTPSlot
              index={1}
              className="size-14 text-2xl font-semibold"
            />
            <InputOTPSlot
              index={2}
              className="size-14 text-2xl font-semibold"
            />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot
              index={3}
              className="size-14 text-2xl font-semibold"
            />
            <InputOTPSlot
              index={4}
              className="size-14 text-2xl font-semibold"
            />
            <InputOTPSlot
              index={5}
              className="size-14 text-2xl font-semibold"
            />
          </InputOTPGroup>
        </InputOTP>
        <Button size="lg" variant="outline" asChild>
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </div>
  );
};

export default JoinPage;
