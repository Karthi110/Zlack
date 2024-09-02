import { useParentMessageId } from "@/features/messages/store/use-parent-message-id";

export const usePanel = () => {
  const [parentMessageId, setParentparentMessageId] = useParentMessageId();

  const onOpenMessage = (messageId: string) => {
    setParentparentMessageId(messageId);
  };

  const onClose = () => {
    setParentparentMessageId(null);
  };

  return {
    parentMessageId,
    onOpenMessage,
    onClose,
  };
};
