import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import image from "next/image";
import { FaChevronDown } from "react-icons/fa";

interface HeaderProps {
  memberName?: string;
  memberImage?: string;
  onClick?: () => void;
}

const Header = ({
  memberImage,
  memberName = "Member",
  onClick,
}: HeaderProps) => {
  const avatarFallback = memberName.charAt(0).toUpperCase();

  return (
    <div className="border-b h-[50px] flex items-center px-4 overflow-hidden">
      <Button
        variant="ghost"
        className="text-lg font-semibold px-2 overflow-hidden w-auto"
        size="sm"
        onClick={onClick}
      >
        <Avatar className="size-6 rounded-md mr-1">
          <AvatarImage src={memberImage} />
          <AvatarFallback className="bg-primary/80 text-secondary rounded-md text-xs">
            {avatarFallback}
          </AvatarFallback>
        </Avatar>
        <span className="truncate">{memberName}</span>
        <FaChevronDown className="size-2.5 ml-2" />
      </Button>
    </div>
  );
};

export default Header;
