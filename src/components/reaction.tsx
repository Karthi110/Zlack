import { Doc, Id } from "../../convex/_generated/dataModel";
import { useWorkSpaceId } from "@/hooks/use-workspace-id";
import { useCurrentMember } from "@/features/members/api/use-current-member";
import { cn } from "@/lib/utils";
import Hint from "./hint";
import EmojiPopover from "./emoji-popover";
import { MdOutlineAddReaction } from "react-icons/md";
import { buttonVariants } from "./ui/button";

interface ReactionsProps {
  data: Array<
    Omit<Doc<"reactions">, "memberId"> & {
      count: number;
      memberIds: Id<"members">[];
    }
  >;
  onChange: (value: string) => void;
}

const Reactions = ({ data, onChange }: ReactionsProps) => {
  const workspaceId = useWorkSpaceId();

  const { data: currentMember } = useCurrentMember({ workspaceId });

  const currentMemberId = currentMember?._id;

  if (data.length === 0 || !currentMemberId) {
    return null;
  }

  return (
    <div className="flex items-center gap-1 mt-1 mb-1">
      {data.map((reaction) => (
        <Hint
          key={reaction._id}
          label={`${reaction.count} ${reaction.count === 1 ? "person" : "people"} reacted with ${reaction.value}`}
        >
          <button
            onClick={() => onChange(reaction.value)}
            className={cn(
              "h-6 p-1.5 rounded-full bg-secondary border border-transparent text-slate-700 flex items-center gap-x-[1px]",
              reaction.memberIds.includes(currentMemberId) &&
                "border-green-200 bg-secondary "
            )}
          >
            {reaction.value}
            <span
              className={cn(
                "text-xs font-semibold text-muted-foreground",
                reaction.memberIds.includes(currentMemberId) && "text-primary"
              )}
            >
              {reaction.count}
            </span>
          </button>
        </Hint>
      ))}
      <EmojiPopover
        hint="Add reaction"
        onEmojiSelect={(emoji) => onChange(emoji.native)}
      >
        <button
          className={buttonVariants({
            variant: "transparent",
            size: "iconSm",
            className: "text-primary hover:text-pretty/90",
          })}
        >
          <MdOutlineAddReaction className="size-4" />
        </button>
      </EmojiPopover>
    </div>
  );
};

export default Reactions;
