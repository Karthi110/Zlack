import { useParentMessageId } from "@/features/members/store/use-profile-member-id";
import { useProfileMemberId } from "@/features/messages/store/use-parent-message-id";

export const usePanel = () => {
  const [parentMessageId, setParentparentMessageId] = useParentMessageId();
  const [profileMemberId, setProfileMemberId] = useProfileMemberId();

  const onOpenProfile = (memberId: string) => {
    setProfileMemberId(memberId);
    setParentparentMessageId(null);
  };
  const onOpenMessage = (messageId: string) => {
    setParentparentMessageId(messageId);
    setProfileMemberId(null);
  };

  const onClose = () => {
    setParentparentMessageId(null);
    setProfileMemberId(null);
  };

  return {
    parentMessageId,
    onOpenMessage,
    onClose,
    onOpenProfile,
    profileMemberId,
  };
};
